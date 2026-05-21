export default function StepAccount({ form, next, sendOtp }: any) {
  const { register, watch } = form;

  return (
    <div className="space-y-4">
      <input {...register('fullname')} placeholder="Full Name" className="input" />
      <input {...register('username')} placeholder="Username" className="input" />
      <input {...register('email')} placeholder="Email" className="input" />
      <input {...register('birthDate')} type="date" className="input" />

      <button
        type="button"
        onClick={() => {
          sendOtp(watch('email'));
          next();
        }}
        className="w-full bg-teal-600 text-white py-3 rounded-xl"
      >
        Send OTP
      </button>
    </div>
  );
}