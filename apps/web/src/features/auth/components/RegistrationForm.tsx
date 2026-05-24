'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import {
  registerUser,
  sendOtp,
  verifyOtp,
} from '../services/auth.service';

import {
  Sparkles,
  User,
  Calendar,
  AtSign,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Plus_Jakarta_Sans } from 'next/font/google';

import InputField from './InputField';
import UsernameField from './UsernameField';
import PasswordField from './PasswordField';
import PasswordStrength from './PasswordStrength';
import OTPSection from './OTPSection';
import SubmitButton from './SubmitButton';
import AlertMessage from './AlertMessage';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USERNAME_REGEX =
  /^[a-zA-Z0-9_]{3,20}$/;

export default function RegisterForm() {
  const router = useRouter();

  // FORM
  const [fullname, setFullname] =
    useState('');

  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [username, setUsername] =
    useState('');

  const [birthDate, setBirthDate] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('');

  const [otpCode, setOtpCode] =
    useState('');

  // UI
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [sendingOtp, setSendingOtp] =
    useState(false);

  const [
    verifyingOtp,
    setVerifyingOtp,
  ] = useState(false);

  const [otpSent, setOtpSent] =
    useState(false);

  const [otpVerified, setOtpVerified] =
    useState(false);

  const [resendCooldown, setResendCooldown] =
    useState(0);

  const [error, setError] =
    useState('');

  const [success, setSuccess] =
    useState('');

  // ALERT TIMER
  useEffect(() => {
    if (!error && !success)
      return;

    const timer = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 4000);

    return () =>
      clearTimeout(timer);
  }, [error, success]);

  // OTP TIMER
  useEffect(() => {
    if (resendCooldown <= 0)
      return;

    const timer = setInterval(() => {
      setResendCooldown((prev) =>
        prev > 0 ? prev - 1 : 0,
      );
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [resendCooldown]);

  // VALIDATIONS
  const validEmail = useMemo(
    () => EMAIL_REGEX.test(email),
    [email],
  );

  const validUsername = useMemo(
    () =>
      USERNAME_REGEX.test(username),
    [username],
  );

  const passwordChecks = useMemo(
    () => ({
      minLength:
        password.length >= 8,

      uppercase:
        /[A-Z]/.test(password),

      lowercase:
        /[a-z]/.test(password),

      number:
        /[0-9]/.test(password),

      special:
        /[^A-Za-z0-9]/.test(
          password,
        ),
    }),
    [password],
  );

  const strongPassword = useMemo(
    () =>
      Object.values(
        passwordChecks,
      ).every(Boolean),
    [passwordChecks],
  );

  const passwordsMatch = useMemo(
    () =>
      password.length > 0 &&
      password === confirmPassword,
    [password, confirmPassword],
  );

  const canSubmit = useMemo(() => {
    return (
      fullname.trim().length >
        0 &&
      validUsername && usernameAvailable === true &&
      birthDate &&
      validEmail &&
      strongPassword &&
      passwordsMatch &&
      otpVerified &&
      !loading
    );
  }, [
    fullname,
    validUsername,
    usernameAvailable,
    birthDate,
    validEmail,
    strongPassword,
    passwordsMatch,
    otpVerified,
    loading,
  ]);

  const showError = useCallback(
    (message: string) => {
      setError(message);

      setSuccess('');
    },
    [],
  );

  const showSuccess =
    useCallback(
      (message: string) => {
        setSuccess(message);

        setError('');
      },
      [],
    );

  // SEND OTP
  const handleSendOtp =
    useCallback(async () => {
      try {
        if (!validEmail) {
          showError(
            'Please enter a valid email address.',
          );

          return;
        }

        if (
          sendingOtp ||
          resendCooldown > 0
        )
          return;

        setSendingOtp(true);

        await sendOtp({
          email,
        });

        setOtpSent(true);

        setOtpVerified(false);

        setResendCooldown(60);

        showSuccess(
          'Verification code sent successfully.',
        );
      } catch (err: any) {
        showError(
          err?.response?.data
            ?.message ||
            'Failed to send OTP.',
        );
      } finally {
        setSendingOtp(false);
      }
    }, [
      email,
      resendCooldown,
      sendingOtp,
      showError,
      showSuccess,
      validEmail,
    ]);

  // VERIFY OTP
  const handleVerifyOtp =
    useCallback(async () => {
      try {
        if (
          otpCode.length !== 6
        ) {
          showError(
            'OTP must contain 6 digits.',
          );

          return;
        }

        setVerifyingOtp(true);

        await verifyOtp({
          email,
          otpCode,
        });

        setOtpVerified(true);

        showSuccess(
          'OTP verified successfully.',
        );
      } catch (err: any) {
        setOtpVerified(false);

        showError(
          err?.response?.data
            ?.message ||
            'Invalid OTP code.',
        );
      } finally {
        setVerifyingOtp(false);
      }
    }, [
      email,
      otpCode,
      showError,
      showSuccess,
    ]);

  // REGISTER
  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (!canSubmit) return;

    try {
      setLoading(true);

      await registerUser({
        fullname:
          fullname.trim(),

        username:
          username.trim(),

        email:
          email.trim(),

        password,

        birthDate,

        otpCode,
      });

      showSuccess(
        'Account created successfully.',
      );

      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch (err: any) {
      showError(
        err?.response?.data
          ?.message ||
          'Registration failed.',
      );
    } finally {
      setLoading(false);
    }
  };

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

          {/* LEFT PANEL */}
          <motion.div
            initial={false}
            animate={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
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
                Join the future of networking
              </div>

              <h1 className="mt-8 text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-[#171717]">
                Create your
                <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent">
                  professional
                </span>
                identity.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-[#5F6368] max-w-xl">
                Meet collaborators, founders,
                creatives, and professionals
                through emotionally intelligent
                matching.
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
                      Discover people aligned with your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <ShieldCheck className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Trusted Community
                    </h3>

                    <p className="text-[#5F6368]">
                      Verified and opportunity-driven professionals.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={false}
            animate={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full max-w-xl mx-auto"
          >
            {/* MOBILE BRAND */}
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

            {/* REGISTER CARD */}
            <div className="bg-white border border-[#F3F3F3] rounded-[36px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              {/* HEADER */}
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[#171717]">
                  Create Account
                </h2>

                <p className="mt-3 text-[#5F6368] leading-relaxed">
                  Join PARAPAIR and start building meaningful professional relationships.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={
                  handleSubmit
                }
                className="mt-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    value={fullname}
                    onChange={(e) =>
                      setFullname(
                        e.target.value,
                      )
                    }
                    placeholder="Kevin France"
                    icon={User}
                    autoComplete="name"
                  />

                  <UsernameField
                    value={username}
                    onChange={(val) => {
                      setUsername(val);
                      setOtpVerified(false);
                    }}
                    onAvailabilityChange={setUsernameAvailable}
                  />
                </div>

                <InputField
                  label="Birth Date"
                  type="date"
                  value={birthDate}
                  onChange={(e) =>
                    setBirthDate(
                      e.target.value,
                    )
                  }
                  icon={Calendar}
                  autoComplete="bday"
                />

                <OTPSection
                  email={email}
                  setEmail={setEmail}
                  validEmail={
                    validEmail
                  }
                  otpSent={otpSent}
                  otpCode={otpCode}
                  setOtpCode={setOtpCode}
                  otpVerified={
                    otpVerified
                  }
                  sendingOtp={
                    sendingOtp
                  }
                  verifyingOtp={
                    verifyingOtp
                  }
                  resendCooldown={
                    resendCooldown
                  }
                  onSendOtp={
                    handleSendOtp
                  }
                  onVerifyOtp={
                    handleVerifyOtp
                  }
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

                {password.length >
                  0 && (
                  <PasswordStrength
                    passwordChecks={
                      passwordChecks
                    }
                  />
                )}

                <PasswordField
                  label="Confirm Password"
                  value={
                    confirmPassword
                  }
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value,
                    )
                  }
                  showPassword={
                    showPassword
                  }
                  setShowPassword={
                    setShowPassword
                  }
                  error={
                    confirmPassword &&
                    !passwordsMatch
                      ? 'Passwords do not match'
                      : undefined
                  }
                  success={
                    confirmPassword &&
                    passwordsMatch
                      ? 'Passwords match'
                      : undefined
                  }
                />

                {error && (
                  <AlertMessage
                    type="error"
                    message={error}
                  />
                )}

                {success && (
                  <AlertMessage
                    type="success"
                    message={success}
                  />
                )}

                <SubmitButton
                  loading={loading}
                  disabled={
                    !canSubmit
                  }
                  icon={
                    Sparkles
                  }
                >
                  Create Account
                </SubmitButton>

                {/* LOGIN */}
                <div className="pt-4 text-center">
                  <p className="text-[#5F6368]">
                    Already have an account?

                    <Link
                      href="/login"
                      className="ml-2 font-semibold text-[#FF7A00] hover:underline"
                    >
                      Sign In
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