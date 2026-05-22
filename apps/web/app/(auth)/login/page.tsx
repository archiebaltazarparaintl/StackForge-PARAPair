'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getMe } from '../../../src/lib/auth';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const user = await getMe();

      if (user) {
        router.push('/dashboard');
      }
    };

    check();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Login Page
    </div>
  );
}