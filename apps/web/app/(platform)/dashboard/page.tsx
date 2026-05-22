import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../src/lib/auth';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  const destination = getDashboardRoute(user);

  redirect(destination);
}

function getDashboardRoute(user: {
  role: string;
  currentMode?: string;
}) {
  if (['ADMIN', 'SUPER_ADMIN'].includes(user.role)) {
    return '/dashboard/admin';
  }

  if (user.currentMode === 'BUSINESS') {
    return '/dashboard/business';
  }

  return '/dashboard/personal';
}