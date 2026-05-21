/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

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
} from '@/services/auth.service';

import {
  Sparkles,
  User,
  Calendar,
  AtSign,
} from 'lucide-react';

import InputField from './InputField';
import PasswordField from './PasswordField';
import PasswordStrength from './PasswordStrength';
import OTPSection from './OTPSection';
import SubmitButton from './SubmitButton';
import AlertMessage from './AlertMessage';

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USERNAME_REGEX =
  /^[a-zA-Z0-9_]{3,20}$/;

export default function RegisterForm() {
  const router = useRouter();

  // FORM STATE
  const [fullname, setFullname] =
    useState('');

  const [username, setUsername] =
    useState('');

  const [birthDate, setBirthDate] =
    useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] =
    useState('');

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('');

  const [otpCode, setOtpCode] =
    useState('');

  // UI STATE
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

  const [error, setError] = useState('');

  const [success, setSuccess] =
    useState('');

  // ALERT TIMER
  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 4000);

    return () => clearTimeout(timer);
  }, [error, success]);

  // OTP COOLDOWN
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) =>
        prev > 0 ? prev - 1 : 0,
      );
    }, 1000);

    return () => clearInterval(timer);
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
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special:
        /[^A-Za-z0-9]/.test(password),
    }),
    [password],
  );

  const strongPassword = useMemo(
    () =>
      Object.values(passwordChecks).every(
        Boolean,
      ),
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
      fullname.trim().length > 0 &&
      validUsername &&
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

  const showSuccess = useCallback(
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

        await sendOtp({ email });

        setOtpSent(true);

        setOtpVerified(false);

        setResendCooldown(60);

        showSuccess(
          'Verification code sent successfully.',
        );
      } catch (err: any) {
        showError(
          err?.response?.data?.message ||
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
        if (otpCode.length !== 6) {
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
          err?.response?.data?.message ||
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
        fullname: fullname.trim(),
        username: username.trim(),
        email: email.trim(),
        password,
        birthDate,
        otpCode,
      });

      showSuccess(
        'Account created successfully. Redirecting...',
      );

      setTimeout(() => {
        router.push('/login');
      }, 1800);
    } catch (err: any) {
      showError(
        err?.response?.data?.message ||
          'Registration failed.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
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
                  Registration
                </span>
              </div>

              <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tight leading-none">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>

              <p className="mt-8 text-lg xl:text-xl leading-relaxed text-white/90 italic max-w-md">
                Building trusted professional
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
        <div className="flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-xl">
            {/* MOBILE BRAND */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0EA5A5]">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>
            </div>

            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Create Account
              </h2>

              <p className="mt-2 text-sm sm:text-base text-slate-500 italic">
                Join the PARAPair Network
              </p>
            </div>

            {/* FORM CARD */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
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

                  <InputField
                    label="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(
                        e.target.value.replace(
                          /\s/g,
                          '',
                        ),
                      );

                      setOtpVerified(false);
                    }}
                    placeholder="kevinfrance"
                    icon={AtSign}
                    autoComplete="username"
                    error={
                      username &&
                      !validUsername
                        ? 'Username must be 3-20 characters.'
                        : undefined
                    }
                    success={
                      username &&
                      validUsername
                        ? 'Valid username'
                        : undefined
                    }
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
                  validEmail={validEmail}
                  otpSent={otpSent}
                  otpCode={otpCode}
                  setOtpCode={setOtpCode}
                  otpVerified={otpVerified}
                  sendingOtp={sendingOtp}
                  verifyingOtp={verifyingOtp}
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

                {password.length > 0 && (
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
                  disabled={!canSubmit}
                  icon={Sparkles}
                >
                  Create Account
                </SubmitButton>
              </form>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Already a member?

                <Link
                  href="/login"
                  className="ml-2 font-bold text-[#0EA5A5] hover:text-[#0b8b8b] transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}