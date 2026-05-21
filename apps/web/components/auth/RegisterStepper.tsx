/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema } from '@/lib/validation';
import { useRegister } from '../hooks/useRegister';

import StepAccount from './steps/StepAccount';
import StepVerify from './steps/StepVerify';
import StepPassword from './steps/StepPassword';

export default function RegisterStepper() {
  const [step, setStep] = useState(1);

  const {
    otpSent,
    otpVerified,
    send,
    verify,
    register,
  } = useRegister();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submit = async (data: any) => {
    await register(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white rounded-3xl p-6 shadow-xl"
      >
        {/* STEP INDICATOR */}
        <div className="flex justify-between mb-6 text-xs font-bold">
          <span className={step >= 1 ? 'text-teal-600' : ''}>Account</span>
          <span className={step >= 2 ? 'text-teal-600' : ''}>Verify</span>
          <span className={step >= 3 ? 'text-teal-600' : ''}>Password</span>
        </div>

        {/* STEP CONTENT */}
        {step === 1 && (
          <StepAccount
            form={form}
            next={next}
            sendOtp={send}
          />
        )}

        {step === 2 && (
          <StepVerify
            form={form}
            otpSent={otpSent}
            otpVerified={otpVerified}
            verifyOtp={verify}
            next={next}
            back={back}
          />
        )}

        {step === 3 && (
          <StepPassword
            form={form}
            submit={submit}
            back={back}
          />
        )}
      </motion.div>
    </div>
  );
}