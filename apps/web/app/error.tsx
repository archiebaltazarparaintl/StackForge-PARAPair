'use client';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F7FA]">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
      <p className="text-lg text-gray-700">Please try again later.</p>
    </div>
  );
}