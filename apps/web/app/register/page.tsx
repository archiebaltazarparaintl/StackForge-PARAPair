/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { registerUser } from '@/services/auth.service';
import Link from 'next/link';
import { useState, useMemo } from 'react';
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
  const [showPassword, setShowPassword] = useState(false);

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [otpSent, setOtpSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // PASSWORD STRENGTH
  const strengthResult = useMemo(() => {
    let score = 0;

    if (password.length > 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const colors = [
      'bg-red-400',
      'bg-[#FF7A00]',
      'bg-yellow-400',
      'bg-[#0EA5A5]',
    ];

    const labels = ['Weak', 'Fair', 'Good', 'Strong'];

    return {
      score,
      label: labels[score - 1] || '',
      color: colors[score - 1] || 'bg-slate-200',
    };
  }, [password]);

  // REGISTER HANDLER
  const handleRegister = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      await registerUser({
        fullname,
        username,
        email,
        password,
        birthDate,
      });

      setSuccess('Account created successfully');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Registration failed');
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
              <h1 className="text-[76px] font-[800] leading-none tracking-tighter mb-8">
                <span className="text-white">PARA</span>
                <span className="text-[#FF7A00]">PAIR</span>
              </h1>

              <p className="text-xl leading-relaxed text-white/90 font-medium tracking-tight italic">
                “Building trusted professional connections through opportunity.”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white flex flex-col items-center justify-center px-6 py-10 lg:px-14 text-[#0D1B2A]">
          <div className="w-full max-w-[420px]">

            <div className="text-center mb-8">
              <h2 className="text-[42px] font-bold tracking-tight">
                Create Account
              </h2>

              <p className="text-slate-400 mt-1 font-medium text-sm italic">
                Join the PARAPair Network
              </p>
            </div>

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

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Full Name
                    </label>

                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Kevin France"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-10 text-sm outline-none focus:border-[#0EA5A5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                      Username
                    </label>

                    <div className="relative group">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="kevinfrance"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-10 text-sm outline-none focus:border-[#0EA5A5]"
                      />
                    </div>
                  </div>
                </div>

                {/* BIRTHDATE */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Birth Date
                  </label>

                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-4 text-sm outline-none focus:border-[#0EA5A5]"
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
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="kevin@email.com"
                        className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-4 text-sm outline-none focus:border-[#0EA5A5]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setOtpSent(true)}
                      className="px-4 bg-[#0EA5A5] text-white rounded-xl text-[10px] font-black uppercase tracking-widest"
                    >
                      {otpSent ? 'Resend' : 'OTP'} <Send size={12} />
                    </button>
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-500">
                    Password
                  </label>

                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />

                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-12 rounded-xl border border-slate-200 bg-[#FAFAFA] pl-12 pr-12 text-sm outline-none focus:border-[#0EA5A5]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* ERRORS */}
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
                  className="w-full h-14 rounded-2xl bg-[#FF7A00] hover:bg-[#e66e00] text-white text-base font-bold"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

              </form>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 font-semibold tracking-tight uppercase">
                Already member?{' '}
                <Link
                  href="/login"
                  className="text-[#0EA5A5] font-black hover:underline"
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