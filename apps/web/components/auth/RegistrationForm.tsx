/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/static-components */
 
'use client';

import {
  registerUser,
  sendOtp,
  verifyOtp,
} from '../../services/auth.service';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { Exo_2 } from 'next/font/google';

import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Sparkles,
  Calendar,
  AtSign,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from 'lucide-react';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USERNAME_REGEX =
  /^[a-zA-Z0-9_]{3,20}$/;

export default function RegisterPage() {
  const router = useRouter();

  // =========================
  // BASIC FORM STATES
  // =========================
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

  // =========================
  // UI STATES
  // =========================
  const [showPassword, setShowPassword] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const [error, setError] = useState('');

  const [success, setSuccess] =
    useState('');

  // =========================
  // OTP STATES
  // =========================
  const [otpSent, setOtpSent] =
    useState(false);

  const [otpVerified, setOtpVerified] =
    useState(false);

  const [sendingOtp, setSendingOtp] =
    useState(false);

  const [
    verifyingOtp,
    setVerifyingOtp,
  ] = useState(false);

  const [resendCooldown, setResendCooldown] =
    useState(0);

  // =========================
  // SUBMISSION STATE
  // =========================
  const [loading, setLoading] =
    useState(false);

  // =========================
  // MOUNT
  // =========================
  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================
  // AUTO CLEAR ALERTS
  // =========================
  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 4000);

    return () => clearTimeout(timer);
  }, [error, success]);

  // =========================
  // RESEND TIMER
  // =========================
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) =>
        prev > 0 ? prev - 1 : 0,
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  // =========================
  // VALIDATION HELPERS
  // =========================
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

  const validEmail = useMemo(
    () => EMAIL_REGEX.test(email),
    [email],
  );

  const validUsername = useMemo(
    () =>
      USERNAME_REGEX.test(username),
    [username],
  );

  const passwordsMatch = useMemo(
    () =>
      password.length > 0 &&
      password === confirmPassword,
    [password, confirmPassword],
  );

  const strengthScore = useMemo(() => {
    return Object.values(passwordChecks)
      .filter(Boolean).length;
  }, [passwordChecks]);

  const strengthLabel = useMemo(() => {
    if (strengthScore <= 2) {
      return {
        label: 'Weak',
        color: 'bg-red-500',
      };
    }

    if (strengthScore === 3) {
      return {
        label: 'Fair',
        color: 'bg-yellow-500',
      };
    }

    if (strengthScore === 4) {
      return {
        label: 'Good',
        color: 'bg-[#0EA5A5]',
      };
    }

    return {
      label: 'Strong',
      color: 'bg-emerald-500',
    };
  }, [strengthScore]);

  // =========================
  // SUBMIT VALIDATION
  // =========================
  const canSubmit = useMemo(() => {
    return (
      fullname.trim().length > 0 &&
      validUsername &&
      birthDate.trim().length > 0 &&
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

  // =========================
  // SUCCESS MESSAGE
  // =========================
  const showSuccess = useCallback(
    (message: string) => {
      setSuccess(message);
      setError('');
    },
    [],
  );

  // =========================
  // ERROR MESSAGE
  // =========================
  const showError = useCallback(
    (message: string) => {
      setError(message);
      setSuccess('');
    },
    [],
  );

  // =========================
  // SEND OTP
  // =========================
  const handleSendOtp = async () => {
    try {
      if (!validEmail) {
        showError(
          'Please enter a valid email address.',
        );

        return;
      }

      if (sendingOtp || resendCooldown > 0)
        return;

      setSendingOtp(true);

      setOtpVerified(false);

      await sendOtp({
        email,
      });

      setOtpSent(true);

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
  };

  // =========================
  // VERIFY OTP
  // =========================
  const handleVerifyOtp = async () => {
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
  };

  // =========================
  // REGISTER
  // =========================
  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
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
        'Account created successfully. Redirecting to login...',
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

  // =========================
  // PASSWORD CHECK ITEM
  // =========================
  const PasswordRule = ({
    valid,
    text,
  }: {
    valid: boolean;
    text: string;
  }) => (
    <div className="flex items-center gap-2 text-xs">
      {valid ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      ) : (
        <AlertCircle className="w-4 h-4 text-red-400" />
      )}

      <span
        className={
          valid
            ? 'text-emerald-600'
            : 'text-slate-500'
        }
      >
        {text}
      </span>
    </div>
  );

  return (
    <div
      className={`${exo2.className} min-h-screen bg-[#F4F7FA] flex items-center justify-center px-4 py-8`}
    >
      <div className="w-full max-w-6xl bg-white overflow-hidden rounded-[40px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] grid lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="hidden lg:flex relative bg-[#0EA5A5] overflow-hidden">
          <div className="absolute top-0 right-[-120px] w-[240px] h-full bg-white rounded-l-[120px]" />

          <div className="relative z-10 flex flex-col justify-between p-16 text-white max-w-[480px]">
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="flex -space-x-1.5 font-bold">
                  <div className="w-9 h-9 rounded-xl border-2 border-white flex items-center justify-center text-sm">
                    P
                  </div>

                  <div className="w-9 h-9 rounded-xl border-2 border-[#FF7A00] bg-[#FF7A00] flex items-center justify-center text-sm text-white">
                    P
                  </div>
                </div>

                <span className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-70">
                  Registration
                </span>
              </div>

              <h1 className="text-[76px] font-[800] leading-none tracking-tighter mb-8">
                <span className="text-white">
                  PARA
                </span>

                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-white/90 font-medium tracking-tight italic">
                “Building trusted professional
                connections through
                opportunity.”
              </p>
            </div>

            <div className="flex gap-6 text-[11px] uppercase tracking-[0.3em] text-white/60 font-black">
              <span>Trusted</span>
              <span>Professional</span>
              <span>Connected</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white flex flex-col items-center justify-center px-6 py-10 lg:px-14 text-[#0D1B2A]">
          <div className="w-full max-w-[440px]">
            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-[42px] font-bold tracking-tight">
                Create Account
              </h2>

              <p className="text-slate-400 mt-1 font-medium text-sm italic">
                Join the PARAPair Network
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[32px] border border-[#E7EEF3] shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-8 sm:p-10">
              <form
                className="space-y-5"
                onSubmit={handleRegister}
              >
                {/* NAME & USERNAME */}
                <div className="grid grid-cols-2 gap-3">
                  {/* FULLNAME */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Full Name
                    </label>

                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="text"
                        autoComplete="name"
                        value={fullname}
                        onChange={(e) =>
                          setFullname(
                            e.target.value,
                          )
                        }
                        placeholder="Kevin France"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-10 pr-4 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                      />
                    </div>
                  </div>

                  {/* USERNAME */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Username
                    </label>

                    <div className="relative group">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="text"
                        autoComplete="username"
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
                        className={`w-full h-12 rounded-xl bg-[#FAFAFA] pl-10 pr-4 text-sm outline-none transition-all border ${
                          username.length === 0
                            ? 'border-slate-200 focus:border-[#0EA5A5]'
                            : validUsername
                            ? 'border-emerald-500'
                            : 'border-red-400'
                        }`}
                      />
                    </div>

                    {username.length > 0 && (
                      <p
                        className={`text-xs ${
                          validUsername
                            ? 'text-emerald-600'
                            : 'text-red-500'
                        }`}
                      >
                        {validUsername
                          ? '✓ Valid username'
                          : 'Username must be 3-20 characters and contain only letters, numbers, and underscores'}
                      </p>
                    )}
                  </div>
                </div>

                {/* BIRTHDATE */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Birth Date
                  </label>

                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                    <input
                      type="date"
                      autoComplete="bday"
                      value={birthDate}
                      onChange={(e) =>
                        setBirthDate(
                          e.target.value,
                        )
                      }
                      className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-4 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    E-mail Address
                  </label>

                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(
                            e.target.value.trim(),
                          );

                          setOtpVerified(false);
                        }}
                        placeholder="kevin@email.com"
                        className={`w-full h-12 rounded-xl bg-[#FAFAFA] pl-12 pr-4 text-sm outline-none transition-all border ${
                          email.length === 0
                            ? 'border-slate-200 focus:border-[#0EA5A5]'
                            : validEmail
                            ? 'border-emerald-500'
                            : 'border-red-400'
                        }`}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={
                        !validEmail ||
                        sendingOtp ||
                        resendCooldown > 0
                      }
                      className={`min-w-[120px] h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        !validEmail ||
                        sendingOtp ||
                        resendCooldown > 0
                          ? 'bg-slate-300 text-white cursor-not-allowed'
                          : 'bg-[#0EA5A5] hover:bg-[#0b8b8b] text-white'
                      }`}
                    >
                      {sendingOtp ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : resendCooldown > 0 ? (
                        `${resendCooldown}s`
                      ) : otpSent ? (
                        'Resend'
                      ) : (
                        'Send OTP'
                      )}

                      {!sendingOtp && (
                        <Send size={12} />
                      )}
                    </button>
                  </div>

                  {email.length > 0 &&
                    !validEmail && (
                      <p className="text-xs text-red-500">
                        Please enter a valid
                        email address.
                      </p>
                    )}
                </div>

                {/* OTP */}
                {otpSent && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-[#0EA5A5]">
                      Verification Code
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        disabled={otpVerified}
                        value={otpCode}
                        onChange={(e) =>
                          setOtpCode(
                            e.target.value
                              .replace(/\D/g, '')
                              .slice(0, 6),
                          )
                        }
                        placeholder="000000"
                        maxLength={6}
                        className={`flex-1 h-12 rounded-xl border bg-[#FAFAFA] text-center tracking-[0.5em] font-bold outline-none transition-all ${
                          otpVerified
                            ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                            : 'border-[#0EA5A5]/30 text-[#0EA5A5] focus:border-[#0EA5A5]'
                        }`}
                      />

                      <button
                        type="button"
                        onClick={
                          handleVerifyOtp
                        }
                        disabled={
                          otpVerified ||
                          otpCode.length !==
                            6 ||
                          verifyingOtp
                        }
                        className={`min-w-[120px] h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          otpVerified
                            ? 'bg-emerald-500 text-white'
                            : otpCode.length !==
                                6 ||
                              verifyingOtp
                            ? 'bg-slate-300 text-white cursor-not-allowed'
                            : 'bg-[#FF7A00] hover:bg-[#eb7000] text-white'
                        }`}
                      >
                        {verifyingOtp ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : otpVerified ? (
                          <>
                            Verified
                            <ShieldCheck className="w-4 h-4" />
                          </>
                        ) : (
                          'Verify OTP'
                        )}
                      </button>
                    </div>

                    {otpVerified && (
                      <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold animate-in fade-in duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                        OTP successfully verified
                      </div>
                    )}
                  </div>
                )}

                {/* PASSWORD */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                    <input
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) =>
                        setPassword(
                          e.target.value,
                        )
                      }
                      placeholder="••••••••"
                      className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-12 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#0EA5A5]"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {/* STRENGTH */}
                  {mounted &&
                    password.length > 0 && (
                      <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div>
                          <div className="flex gap-1 h-2 mb-2">
                            {[1, 2, 3, 4, 5].map(
                              (step) => (
                                <div
                                  key={step}
                                  className={`flex-1 rounded-full transition-all ${
                                    step <=
                                    strengthScore
                                      ? strengthLabel.color
                                      : 'bg-slate-200'
                                  }`}
                                />
                              ),
                            )}
                          </div>

                          <p className="text-xs font-semibold text-slate-600">
                            Password Strength:{' '}
                            {
                              strengthLabel.label
                            }
                          </p>
                        </div>

                        <div className="grid gap-2">
                          <PasswordRule
                            valid={
                              passwordChecks.minLength
                            }
                            text="At least 8 characters"
                          />

                          <PasswordRule
                            valid={
                              passwordChecks.uppercase
                            }
                            text="One uppercase letter"
                          />

                          <PasswordRule
                            valid={
                              passwordChecks.lowercase
                            }
                            text="One lowercase letter"
                          />

                          <PasswordRule
                            valid={
                              passwordChecks.number
                            }
                            text="One number"
                          />

                          <PasswordRule
                            valid={
                              passwordChecks.special
                            }
                            text="One special character"
                          />
                        </div>
                      </div>
                    )}
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                    <input
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(
                          e.target.value,
                        )
                      }
                      placeholder="••••••••"
                      className={`w-full h-12 rounded-xl bg-[#FAFAFA] pl-12 pr-12 text-sm outline-none transition-all border ${
                        confirmPassword.length ===
                        0
                          ? 'border-slate-200'
                          : passwordsMatch
                          ? 'border-emerald-500'
                          : 'border-red-400'
                      }`}
                    />
                  </div>

                  {confirmPassword.length >
                    0 && (
                    <p
                      className={`text-xs font-medium ${
                        passwordsMatch
                          ? 'text-emerald-600'
                          : 'text-red-500'
                      }`}
                    >
                      {passwordsMatch
                        ? '✓ Passwords match'
                        : '✗ Passwords do not match'}
                    </p>
                  )}
                </div>

                {/* ERROR */}
                {error && (
                  <div className="animate-in fade-in slide-in-from-top-1 duration-300 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-sm text-red-600 font-medium">
                      {error}
                    </p>
                  </div>
                )}

                {/* SUCCESS */}
                {success && (
                  <div className="animate-in fade-in slide-in-from-top-1 duration-300 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <p className="text-sm text-emerald-700 font-medium">
                      {success}
                    </p>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full h-14 rounded-2xl text-white text-base font-bold shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                    canSubmit
                      ? 'bg-[#FF7A00] hover:bg-[#e66e00] shadow-[#FF7A00]/20'
                      : 'bg-slate-300 cursor-not-allowed shadow-none'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      Create Account
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* LOGIN */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 font-semibold tracking-tight uppercase">
                Already member?

                <Link
                  href="/login"
                  className="text-[#0EA5A5] font-black hover:underline tracking-tighter ml-1"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}