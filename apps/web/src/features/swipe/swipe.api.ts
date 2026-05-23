export async function getSwipeFeed() {
  const res = await fetch('/api/swipe', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch swipe feed');
  }

  return res.json();
}

export async function sendSwipe(
  receiverId: string,
  type: 'LEFT' | 'RIGHT',
) {
  const res = await fetch('/api/swipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      receiverId,
      type,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to swipe');
  }

  return res.json();
}