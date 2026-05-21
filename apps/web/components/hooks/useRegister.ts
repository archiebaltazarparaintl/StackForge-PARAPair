/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendOtp, verifyOtp, registerUser } from '@/services/auth.service';

export function useRegister() {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const send = async (email: string) => {
    if (cooldown > 0) return;

    try {
      setLoading(true);
      await sendOtp({ email });

      setOtpSent(true);
      setCooldown(60);

      toast.success('OTP sent');
    } catch {
      toast.error('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const verify = async (email: string, otp: string) => {
    try {
      setLoading(true);
      await verifyOtp({ email, otpCode: otp });

      setOtpVerified(true);
      toast.success('OTP verified');
    } catch {
      setOtpVerified(false);
      toast.error('Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: any) => {
    try {
      setLoading(true);

      await registerUser(data);

      toast.success('Account created');
    } catch {
      toast.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    otpSent,
    otpVerified,
    loading,
    cooldown,
    send,
    verify,
    register,
  };
}