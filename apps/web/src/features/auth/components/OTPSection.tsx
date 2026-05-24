/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { Check, Loader2, Mail, Send, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

interface Props {
  email: string;
  setEmail: (value: string) => void;
  validEmail: boolean;
  otpSent: boolean;
  otpCode: string;
  setOtpCode: (value: string) => void;
  otpVerified: boolean;
  sendingOtp: boolean;
  verifyingOtp: boolean;
  resendCooldown: number;
  onSendOtp: () => void;
  onVerifyOtp: () => void;
}

export default function OTPSection({
  email, setEmail, validEmail, otpSent, otpCode, setOtpCode,
  otpVerified, sendingOtp, verifyingOtp, resendCooldown,
  onSendOtp, onVerifyOtp,
}: Props) {
  const [prevVerified, setPrevVerified] = useState(false);

  useEffect(() => {
    if (otpVerified && !prevVerified) {
      toast.success('OTP verified successfully!');
      setPrevVerified(true);
    }
  }, [otpVerified, prevVerified]);

  const handleVerify = async () => {
    if (otpCode.length !== 6) {
      toast.error('OTP must contain 6 digits.');
      return;
    }
    try {
      await onVerifyOtp();
    } catch {
      toast.error('Invalid OTP code.');
    }
  };

  return (
    <div className="space-y-3">
      {/* EMAIL ROW */}
      <div className="space-y-2">
        <label className="ml-1 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
          E-mail Address
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none focus:ring-4 focus:ring-[#0EA5A5]/10 focus:border-[#0EA5A5]"
            />
          </div>
          <button
            type="button"
            onClick={onSendOtp}
            disabled={!validEmail || sendingOtp || resendCooldown > 0}
            className="h-12 px-5 rounded-2xl bg-[#0EA5A5] text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#0b8b8b] disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {sendingOtp ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : resendCooldown > 0 ? (
              `${resendCooldown}s`
            ) : otpSent ? 'Resend' : 'Send OTP'}
            {!sendingOtp && <Send size={14} />}
          </button>
        </div>
      </div>

      {/* OTP INPUT ROW */}
      {otpSent && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              inputMode="numeric"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="000000"
              className={`w-full h-12 rounded-2xl border text-center tracking-[0.20em] font-bold outline-none focus:border-[#0EA5A5] pr-10
                ${otpVerified ? 'border-emerald-500 bg-emerald-50' : 'border-[#0EA5A5]/30 bg-[#F0FDFA]'}`}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {otpVerified && <Check className="w-4 h-4 text-emerald-500" />}
            </div>
          </div>
          <button
            type="button"
            onClick={handleVerify}
            disabled={otpVerified || otpCode.length !== 6 || verifyingOtp}
            className="h-12 px-5 rounded-2xl bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#e46d00] disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {verifyingOtp ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : otpVerified ? (
              <><ShieldCheck className="w-4 h-4" /> Verified</>
            ) : 'Verify OTP'}
          </button>
        </div>
      )}
    </div>
  );
}
