import { redirect } from 'next/navigation';
import { getUserFromCookie } from '../../../../src/lib/auth';

export default async function DashboardPage() {
  const user = await getUserFromCookie();

  // ✅ FIX: prevent null crash
  if (!user || !user.role) {
    return redirect('/register');
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

function isAdmin(user: { role: string }) {
  return ['ADMIN', 'SUPER_ADMIN'].includes(user.role);
}