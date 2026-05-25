'use client';

import { useAuth } from '../../../../web/src/hooks/useAuth';

export default function DashboardPage() {
  const { user, loading } = useAuth('/register');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.email}
      </h1>
    </div>
  );
}