/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Plus_Jakarta_Sans } from 'next/font/google';

import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  User,
  HeartHandshake,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { loginUser } from '@/features/auth/services/auth.service';

import { tokenStorage } from '@/lib/storage';

import InputField from '../../features/auth/components/InputField';
import PasswordField from '../../features/auth/components/PasswordField';
import SubmitButton from '../../features/auth/components/SubmitButton';
import AlertMessage from '../../features/auth/components/AlertMessage';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

const validForm = useMemo(() => {
  return (
    username.trim().length >= 3 &&
    password.length >= 6
  );
}, [username, password]);

const isDisabled = !mounted ? false : !validForm;

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

        document.cookie = `access_token=${response.access_token}; path=/`;

        router.push('/');
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
      className={`${jakarta.className} min-h-screen bg-[#FFFDFC] relative overflow-hidden`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#FFF1E4]" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[#FFE7C7]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,181,71,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 lg:px-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="hidden lg:block"
          >
            {/* BRAND */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#ECECEC] shadow-lg flex items-center justify-center font-bold text-[#171717]">
                  P
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FFB547] shadow-lg flex items-center justify-center font-bold text-white">
                  P
                </div>
              </div>

              <div>
                <h2 className="font-bold text-2xl tracking-tight">
                  PARAPAIR
                </h2>

                <p className="text-sm text-[#8E8E93]">
                  Swipe-native professional discovery
                </p>
              </div>
            </div>

            {/* HERO */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF1E4] border border-[#FFE0BF] rounded-full px-4 py-2 text-sm font-semibold text-[#FF7A00]">
                <Sparkles className="w-4 h-4" />
                Trusted professional matching
              </div>

              <h1 className="mt-8 text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-[#171717]">
                Meaningful
                <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent">
                  opportunities
                </span>
                begin here.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-[#5F6368] max-w-xl">
                Connect with founders, creatives,
                freelancers, and professionals through
                emotionally intelligent networking.
              </p>

              {/* FEATURES */}
              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <HeartHandshake className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Mutual Intent Matching
                    </h3>

                    <p className="text-[#5F6368]">
                      Connect only when both sides align.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <ShieldCheck className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Trust & Verification
                    </h3>

                    <p className="text-[#5F6368]">
                      Professional credibility built-in.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full max-w-xl mx-auto"
          >
            {/* MOBILE LOGO */}
            <div className="lg:hidden text-center mb-10">
              <h1 className="text-5xl font-bold tracking-tight">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>

              <p className="mt-3 text-[#5F6368]">
                Professional discovery made human.
              </p>
            </div>

            {/* LOGIN CARD */}
            <div className="bg-white border border-[#F3F3F3] rounded-[36px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              {/* HEADER */}
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[#171717]">
                  Welcome Back
                </h2>

                <p className="mt-3 text-[#5F6368] leading-relaxed">
                  Sign in and continue building meaningful professional connections.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={
                  handleSubmit
                }
                className="mt-10 space-y-5"
              >
                <InputField
                  label="Username"
                  value={username}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) =>
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

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-sm text-[#8E8E93]">
                    <ShieldCheck
                      size={16}
                      className="text-[#22C55E]"
                    />

                    Secure Login
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-semibold text-[#FF7A00] hover:underline"
                  >
                    Forgot Password?
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
  disabled={isDisabled}
  icon={ArrowRight}
>
                  Continue
                </SubmitButton>

                {/* REGISTER */}
                <div className="pt-4 text-center">
                  <p className="text-[#5F6368]">
                    Don&apos;t have an account?

                    <Link
                      href="/register"
                      className="ml-2 font-semibold text-[#FF7A00] hover:underline"
                    >
                      Create account
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#8E8E93]">
              <span>Trusted</span>
              <span>•</span>
              <span>Secure</span>
              <span>•</span>
              <span>Human-first</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}