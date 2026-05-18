/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  PrismaClient,
  AccountType,
  SwipeType,
  MatchStatus,
  MessageType,
} from '@prisma/client';

import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 SEED STARTED');

  const passwordHash = await bcrypt.hash('Password123!', 10);

  try {
    // 🔥 USE TRANSACTION FOR FULL SAFETY
    await prisma.$transaction(async (tx) => {
      console.log('🧹 Cleaning database...');

      await tx.message.deleteMany();
      await tx.conversation.deleteMany();
      await tx.match.deleteMany();
      await tx.swipe.deleteMany();
      await tx.personalProfile.deleteMany();
      await tx.businessProfile.deleteMany();
      await tx.refreshToken.deleteMany();
      await tx.report.deleteMany();
      await tx.user.deleteMany();

      console.log('✅ Database cleared');

      const personalUsers = [];
      const businessUsers = [];

      // 👤 PERSONAL USERS
      for (let i = 1; i <= 5; i++) {
        const user = await tx.user.create({
          data: {
            email: `personal${i}@stackforge.dev`,
            username: `personal_${i}`,
            passwordHash,
            currentMode: AccountType.PERSONAL,

            personalProfile: {
              create: {
                firstName: `P${i}`,
                lastName: `User`,
                bio: `Personal user ${i}`,
                location: 'Manila',
                skills: ['React', 'Node.js'],
                interests: ['Startup', 'Tech'],
                education: 'BS CS',
                experience: 'Dev',
                profileImageUrl: 'https://placehold.co/300',
              },
            },
          },
        });

        personalUsers.push(user);
        console.log(`✔ Personal ${i}/5`);
      }

      // 🏢 BUSINESS USERS
      for (let i = 1; i <= 5; i++) {
        const user = await tx.user.create({
          data: {
            email: `business${i}@stackforge.dev`,
            username: `business_${i}`,
            passwordHash,
            currentMode: AccountType.BUSINESS,

            businessProfile: {
              create: {
                businessName: `Business ${i}`,
                industry: 'Tech',
                description: `Business ${i}`,
                location: 'Makati',
                teamSize: 10,
                services: ['Dev'],
                lookingFor: ['Partners'],
                logoUrl: 'https://placehold.co/300',
              },
            },
          },
        });

        businessUsers.push(user);
        console.log(`✔ Business ${i}/5`);
      }

      console.log(`👤 Personal: ${personalUsers.length}`);
      console.log(`🏢 Business: ${businessUsers.length}`);

      // 💥 SWIPE MATCH SETUP
      const p1 = personalUsers[0];
      const b1 = businessUsers[0];

      await tx.swipe.create({
        data: {
          senderId: p1.id,
          receiverId: b1.id,
          type: SwipeType.RIGHT,
        },
      });

      await tx.swipe.create({
        data: {
          senderId: b1.id,
          receiverId: p1.id,
          type: SwipeType.RIGHT,
        },
      });

      const match = await tx.match.create({
        data: {
          userOneId: p1.id,
          userTwoId: b1.id,
          status: MatchStatus.ACTIVE,
        },
      });

      const convo = await tx.conversation.create({
        data: {
          matchId: match.id,
        },
      });

      await tx.message.createMany({
        data: [
          {
            conversationId: convo.id,
            senderId: p1.id,
            type: MessageType.TEXT,
            content: 'Hello!',
          },
          {
            conversationId: convo.id,
            senderId: b1.id,
            type: MessageType.TEXT,
            content: 'Hi there!',
          },
        ],
      });

      console.log('💬 Match system created');
    });

    console.log('🎉 SEED SUCCESS FULLY COMPLETED');
  } catch (err) {
    console.error('❌ SEED FAILED HARD');
    console.error(err);
    process.exit(1);
  }
}

await main().finally(async () => {
  await prisma.$disconnect();
});
