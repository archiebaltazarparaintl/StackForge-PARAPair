/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export default function StepVerify({
  form,
  otpVerified,
  verifyOtp,
  next,
  back,
}: any) {
  const email = form.watch('email');
  const [otp, setOtp] = useState('');

  // AUTO VERIFY
  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp(email, otp);
    }
  }, [otp]);

  return (
    <div className="space-y-4">
      <input
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))
        }
        placeholder="Enter OTP"
        className="w-full text-center tracking-[0.5em] border p-3 rounded-xl"
      />

      <div className="flex gap-2">
        <button onClick={back} className="flex-1 bg-gray-200 py-2 rounded-xl">
          Back
        </button>

        <button
          disabled={!otpVerified}
          onClick={next}
          className="flex-1 bg-orange-500 text-white py-2 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}