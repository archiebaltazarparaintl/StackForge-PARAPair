/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  registerUser,
  sendOtp,
} from '../../services/auth.service';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';

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
} from 'lucide-react';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // PASSWORD STRENGTH
  const strengthResult = useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;

    if (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password)
    ) {
      score++;
    }

    if (/[0-9]/.test(password)) score++;

    if (/[^A-Za-z0-9]/.test(password)) score++;

    const colors = [
      'bg-red-400',
      'bg-[#FF7A00]',
      'bg-yellow-400',
      'bg-[#0EA5A5]',
    ];

    const labels = [
      'Weak',
      'Fair',
      'Good',
      'Strong',
    ];

    return {
      score,
      label: labels[score - 1] || '',
      color:
        colors[score - 1] || 'bg-slate-200',
    };
  }, [password]);

  // AUTO CLEAR SUCCESS
  const showTemporarySuccess = (
    message: string,
  ) => {
    setSuccess(message);

    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  // SEND OTP
  const handleSendOtp = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      if (!email) {
        setError('Please enter your email');
        return;
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setError(
          'Please enter a valid email',
        );
        return;
      }

      await sendOtp({
        email,
      });

      setOtpSent(true);

      showTemporarySuccess(
        'Verification code sent to your email',
      );
    } catch (err: any) {
      console.error('Error sending OTP:', err);
      setError(
        err?.response?.data?.message ||
          'Failed to send OTP',
      );
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleRegister = async () => {
    try {
      setLoading(true);

      setError('');
      setSuccess('');

      // REQUIRED FIELDS
      if (
        !fullname ||
        !username ||
        !birthDate ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        setError(
          'Please fill in all fields',
        );

        return;
      }

      // USERNAME VALIDATION
      const usernameRegex =
        /^[a-zA-Z0-9_]+$/;

      if (!usernameRegex.test(username)) {
        setError(
          'Username can only contain letters, numbers and underscores',
        );

        return;
      }

      // PASSWORD LENGTH
      if (password.length < 8) {
        setError(
          'Password must be at least 8 characters',
        );

        return;
      }

      // OTP REQUIRED
      if (!otpCode) {
        setError(
          'Please enter OTP code',
        );

        return;
      }

      // PASSWORD MATCH
      if (password !== confirmPassword) {
        setError(
          'Passwords do not match',
        );

        return;
      }

      await registerUser({
        fullname,
        username,
        email,
        password,
        birthDate,
        otpCode,
      });

      showTemporarySuccess(
        'Account created successfully',
      );

      // CLEAR FORM
      setFullname('');
      setUsername('');
      setBirthDate('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setOtpCode('');
      setOtpSent(false);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          'Registration failed',
      );
    } finally {
      setLoading(false);
    }
  };

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

          <div className="w-full max-w-[420px]">

            {/* HEADER */}
            <div className="text-center mb-8">
              <h2 className="text-[42px] font-bold tracking-tight">
                Create Account
              </h2>

              <p className="text-slate-400 mt-1 font-medium text-sm italic">
                Join the PARAPair Network
              </p>
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-[32px] border border-[#E7EEF3] shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-8 sm:p-10">

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
              >

                {/* NAME & USERNAME */}
                <div className="grid grid-cols-2 gap-3">

                  {/* FULLNAME */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Full Name
                    </label>

                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) =>
                          setFullname(
                            e.target.value,
                          )
                        }
                        placeholder="Kevin France"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-10 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                      />
                    </div>
                  </div>

                  {/* USERNAME */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Username
                    </label>

                    <div className="relative group">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                      <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                          setUsername(
                            e.target.value,
                          )
                        }
                        placeholder="kevinfrance"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-10 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* BIRTH DATE */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Birth Date
                  </label>

                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                    <input
                      type="date"
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
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    E-mail Address
                  </label>

                  <div className="flex gap-2">

                    <div className="relative flex-1 group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(
                            e.target.value,
                          )
                        }
                        placeholder="kevin@email.com"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-4 text-sm outline-none focus:border-[#0EA5A5] transition-all"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={mounted ? !email || loading : true}
                      className={`px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                        !email || loading
                          ? 'bg-gray-300 cursor-not-allowed text-white'
                          : 'bg-[#0EA5A5] hover:bg-[#0c8e8e] text-white'
                      }`}
                    >
                      {otpSent
                        ? 'Resend'
                        : 'OTP'}

                      <Send size={12} />
                    </button>
                  </div>
                </div>

                {/* OTP */}
                {otpSent && (
                  <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">

                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-[#0EA5A5]">
                      Verification Code
                    </label>

                    <input
                      type="text"
                      value={otpCode}
                      onChange={(e) =>
                        setOtpCode(
                          e.target.value
                            .replace(/\D/g, '')
                            .slice(0, 6),
                        )
                      }
                      placeholder="0 0 0 0 0 0"
                      maxLength={6}
                      className="w-full h-12 rounded-xl border border-[#0EA5A5]/30 bg-[#FAFAFA] text-center tracking-[0.5em] font-bold text-[#0EA5A5] outline-none focus:border-[#0EA5A5]"
                    />
                  </div>
                )}

                {/* PASSWORD */}
                <div className="space-y-1">

                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Password
                  </label>

                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                    <input
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
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

                  {/* PASSWORD STRENGTH */}
                  {mounted && password.length > 0 && (
                    <div className="mt-2 px-1">

                      <div className="flex gap-1 h-1.5">
                        {[1, 2, 3, 4].map(
                          (step) => (
                            <div
                              key={step}
                              className={`flex-1 rounded-full transition-all duration-500 ${
                                step <=
                                strengthResult.score
                                  ? strengthResult.color
                                  : 'bg-slate-100'
                              }`}
                            />
                          ),
                        )}
                      </div>

                      <p className="text-xs text-slate-500 mt-1">
                        Strength:{' '}
                        {
                          strengthResult.label
                        }
                      </p>
                    </div>
                  )}
                </div>

                {/* CONFIRM PASSWORD */}
                {mounted && password.length >= 8 && (
                  <div className="space-y-1">

                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Confirm Password
                    </label>

                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#0EA5A5]" />

                      <input
                        type={
                          showPassword
                            ? 'text'
                            : 'password'
                        }
                        value={
                          confirmPassword
                        }
                        onChange={(e) =>
                          setConfirmPassword(
                            e.target.value,
                          )
                        }
                        placeholder="••••••••"
                        className={`w-full h-12 rounded-xl bg-[#FAFAFA] pl-12 pr-12 text-sm outline-none transition-all border ${
                          confirmPassword.length ===
                          0
                            ? 'border-slate-200 focus:border-[#0EA5A5]'
                            : password ===
                              confirmPassword
                            ? 'border-green-500 focus:border-green-500'
                            : 'border-red-500 focus:border-red-500'
                        }`}
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

                    {confirmPassword.length >
                      0 && (
                      <p
                        className={`text-xs font-medium mt-1 ${
                          password ===
                          confirmPassword
                            ? 'text-green-600'
                            : 'text-red-500'
                        }`}
                      >
                        {password ===
                        confirmPassword
                          ? '✓ Passwords match'
                          : '✗ Passwords do not match'}
                      </p>
                    )}
                  </div>
                )}

                {/* ERROR */}
                {error && (
                  <p className="text-sm text-red-500 font-medium">
                    {error}
                  </p>
                )}

                {/* SUCCESS */}
                {success && (
                  <p className="text-sm text-green-600 font-medium">
                    {success}
                  </p>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-14 rounded-2xl text-white text-base font-bold shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#FF7A00] hover:bg-[#e66e00] shadow-[#FF7A00]/20'
                  }`}
                >
                  <Sparkles size={18} />

                  {loading
                    ? 'Creating Account...'
                    : 'Create Account'}
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