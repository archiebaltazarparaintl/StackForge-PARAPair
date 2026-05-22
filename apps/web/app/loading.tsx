export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFFDFC]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-ping rounded-full bg-[#FFB547]/30" />

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FFB547] shadow-[0_10px_30px_rgba(255,122,0,0.35)]">
            <div className="h-6 w-6 rounded-full bg-white" />
          </div>
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-[#171717]">
            Loading PARA Pair
          </h2>

          <p className="text-sm text-[#8E8E93]">
            Preparing meaningful connections...
          </p>
        </div>
      </div>
    </main>
  );
}