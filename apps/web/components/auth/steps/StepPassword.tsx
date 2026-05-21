/* eslint-disable @typescript-eslint/no-explicit-any */
export default function StepPassword({ form, submit, back }: any) {
  const { register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <input {...register('password')} type="password" className="input" />
      <input {...register('confirmPassword')} type="password" className="input" />

      <div className="flex gap-2">
        <button type="button" onClick={back} className="flex-1 bg-gray-200 py-2 rounded-xl">
          Back
        </button>

        <button type="submit" className="flex-1 bg-teal-600 text-white py-2 rounded-xl">
          Create Account
        </button>
      </div>
    </form>
  );
}