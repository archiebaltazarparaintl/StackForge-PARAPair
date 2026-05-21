/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import {
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Exo_2 } from 'next/font/google';

import {
  ShieldCheck,
  User,
} from 'lucide-react';

import { loginUser } from '@/services/auth.service';

import { tokenStorage } from '@/lib/storage';

import InputField from './InputField';
import PasswordField from './PasswordField';
import SubmitButton from './SubmitButton';
import AlertMessage from './AlertMessage';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  const validForm = useMemo(() => {
    return (
      username.trim().length >= 3 &&
      password.length >= 6
    );
  }, [username, password]);

  const handleSubmit = useCallback(
    async (
      e: React.FormEvent,
    ) => {
      e.preventDefault();

      if (!validForm || loading)
        return;

      try {
        setLoading(true);

        setError('');

        const response =
          await loginUser({
            username:
              username.trim(),
            password,
          });

        tokenStorage.set(
          response.access_token,
        );

        router.push('/dashboard');
      } catch (err: any) {
        setError(
          err?.response?.data
            ?.message ||
            'Invalid credentials.',
        );
      } finally {
        setLoading(false);
      }
    },
    [
      loading,
      password,
      router,
      username,
      validForm,
    ],
  );

  return (
    <div
      className={`${exo2.className} min-h-screen bg-[#F4F7FA] flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8`}
    >
      <div className="w-full max-w-7xl overflow-hidden rounded-[32px] lg:rounded-[42px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] grid lg:grid-cols-2">
        {/* LEFT PANEL */}
        <aside className="relative hidden lg:flex bg-[#0EA5A5] overflow-hidden">
          <div className="absolute inset-y-0 right-[-120px] w-[240px] bg-white rounded-l-[120px]" />

          <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 text-white w-full">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-xl border-2 border-white flex items-center justify-center font-bold">
                    P
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FF7A00] border-2 border-[#FF7A00] flex items-center justify-center font-bold">
                    P
                  </div>
                </div>

                <span className="uppercase tracking-[0.35em] text-xs font-bold text-white/70">
                  StackForge
                </span>
              </div>

              <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tight leading-none italic">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>

              <p className="mt-8 text-lg xl:text-xl leading-relaxed text-white/90 max-w-md">
                Helping professionals create
                meaningful and trusted
                connections through
                opportunity.
              </p>
            </div>

            <div className="flex gap-5 text-[11px] uppercase tracking-[0.28em] font-black text-white/60">
              <span>Trusted</span>
              <span>Professional</span>
              <span>Connected</span>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <div className="flex items-center justify-center px-4 py-8 sm:px-8 lg:px-14 xl:px-20">
          <div className="w-full max-w-xl">
            {/* MOBILE BRAND */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0EA5A5] italic">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>
            </div>

            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm sm:text-base text-slate-500">
                Sign in to your professional
                portal
              </p>
            </div>

            {/* FORM CARD */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <form
                onSubmit={
                  handleSubmit
                }
                className="space-y-5"
              >
                <InputField
                  label="Username"
                  value={username}
                  onChange={(e) =>
                    setUsername(
                      e.target.value,
                    )
                  }
                  placeholder="Enter your username"
                  icon={User}
                  autoComplete="username"
                />

                <PasswordField
                  label="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value,
                    )
                  }
                  showPassword={
                    showPassword
                  }
                  setShowPassword={
                    setShowPassword
                  }
                />

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold uppercase tracking-wider text-[#0EA5A5] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {error && (
                  <AlertMessage
                    type="error"
                    message={error}
                  />
                )}

                <SubmitButton
                  loading={loading}
                  disabled={
                    !validForm
                  }
                  icon={
                    ShieldCheck
                  }
                >
                  Sign In
                </SubmitButton>

                <div className="pt-2 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest opacity-40">
                    <ShieldCheck
                      size={14}
                      className="text-[#0EA5A5]"
                    />
                    Secure Login
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Don&rsquo;t have an account?

                <Link
                  href="/register"
                  className="ml-2 font-bold uppercase tracking-tight text-[#FF7A00] hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}