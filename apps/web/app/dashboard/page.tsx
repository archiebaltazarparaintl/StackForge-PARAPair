import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  if (
    user.role === 'ADMIN' ||
    user.role === 'SUPER_ADMIN'
  ) {
    redirect('/dashboard/admin');
  }

  if (user.currentMode === 'BUSINESS') {
    redirect('/dashboard/business');
  }

  redirect('/dashboard/personal');
}