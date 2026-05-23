/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromCookie } from '../lib/auth';

export function useAuth(redirectIfNotAuth = '/register') {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const me = await getUserFromCookie();

      if (!me) {
        localStorage.removeItem('token');
        router.push(redirectIfNotAuth);
        return;
      }

      setUser(me);
      setLoading(false);
    };

    checkAuth();
  }, [router, redirectIfNotAuth]);

  return { user, loading };
}