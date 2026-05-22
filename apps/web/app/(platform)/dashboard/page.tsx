import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../src/lib/auth';
import { isAdmin } from '../../../features/lib/auth';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    console.log('No user found, redirecting to /register. user:', user);
    redirect('/register');
  }

  const destination = getDashboardRoute(user);

  redirect(destination);
}

function getDashboardRoute(user: {
  role: string;
  currentMode?: string;
}) {
  if (isAdmin(user)) {
    return '/dashboard/admin';
  }

  if (user.currentMode === 'BUSINESS') {
    return '/dashboard/business';
  }

  return '/dashboard/personal';
}