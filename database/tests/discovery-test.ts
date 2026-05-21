import { PrismaClient } from "@prisma/client";
import { DiscoveryService } from "../../apps/api/src/modules/discovery/discovery.service";

const prisma = new PrismaClient();
const service = new DiscoveryService();

async function run() {
  console.log("\n🧪 DISCOVERY ENGINE TEST STARTED\n");

  // 1. Create test user (viewer)
  const viewer = await prisma.user.create({
    data: {
      email: `viewer_${Date.now()}@test.com`,
      username: `viewer_${Date.now()}`,
      passwordHash: "test",
      currentMode: "PERSONAL",
    },
  });

  // 2. Create candidates
  const users = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `user_${i}_${Date.now()}@test.com`,
          username: `user_${i}_${Date.now()}`,
          passwordHash: "test",
          currentMode: i % 2 === 0 ? "BUSINESS" : "PERSONAL",
        },
      })
    )
  );

  console.log("✅ Users created");

  // 3. Swipe one user to simulate filtering
  await prisma.swipe.create({
    data: {
      senderId: viewer.id,
      receiverId: users[0].id,
      type: "RIGHT",
    },
  });

  console.log("👉 Swipe simulated");

  // 4. Run discovery engine
  const feed = await service.getFeed(viewer.id, 10);

  console.log("\n🔥 FEED RESULT:\n");

  feed.forEach((u, i) => {
    console.log(`${i + 1}. ${u.username}`);
  });

  // 5. Assertions
  const swipedShown = feed.find((u) => u.id === users[0].id);

  if (swipedShown) {
    throw new Error("❌ Swiped user still appears in feed");
  }

  console.log("\n🎉 DISCOVERY TEST PASSED\n");

  // 6. Cleanup
  await prisma.swipe.deleteMany({});
  await prisma.user.deleteMany({
    where: { id: { in: [viewer.id, ...users.map((u) => u.id)] } },
  });

  await prisma.$disconnect();
}

run();