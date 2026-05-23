'use client';

import { Exo_2 } from 'next/font/google';
import LoginForm from '../../../src/features/auth/components/LoginForm';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function LoginPage() {
  return (
    <main
      className={`${exo2.className} min-h-screen bg-[#F4F7FA]`}
    >
      <LoginForm />
    </main>
  );
}