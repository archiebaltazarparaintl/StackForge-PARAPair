import { ReactNode } from 'react';
interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F4F7FA] flex flex-col">

      {/* CONTENT */}
      <section className="flex-1 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-6xl rounded-[32px] overflow-hidden shadow-2xl bg-white grid lg:grid-cols-2">

          {/* LEFT BRAND PANEL */}
          <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#0EA5A5] to-[#087C7C]">

            {/* CLOUD SHAPES */}
            <div className="absolute top-0 right-[-80px] w-[220px] h-[220px] bg-white rounded-full opacity-95" />
            <div className="absolute top-[180px] right-[-120px] w-[280px] h-[280px] bg-white rounded-full" />
            <div className="absolute bottom-[100px] right-[-90px] w-[240px] h-[240px] bg-white rounded-full opacity-95" />
            <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-white rounded-full" />

            <div className="relative z-10 flex flex-col justify-between h-full p-14 text-white">

              <div>
                <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/80">
                  Welcome to
                </p>

                <h1 className="mt-8 text-7xl font-black leading-none">
                  PARA
                  <span className="text-[#FF7A00]">
                    PAIR
                  </span>
                </h1>

                <p className="mt-8 text-lg text-white/90 leading-relaxed max-w-sm">
                  Helping professionals build trusted connections through collaboration and opportunity.
                </p>
              </div>

              <div className="flex gap-4 text-[11px] uppercase tracking-[0.25em] text-white/70">
                <span>Trusted</span>
                <span>Professional</span>
                <span>Connected</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="bg-[#FCFDFD] flex items-center justify-center px-5 py-10 sm:px-10">

            <div className="w-full max-w-md">
              {children}
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE FOOTER */}
      <footer className="lg:hidden bg-gradient-to-r from-[#0EA5A5] to-[#087C7C] rounded-t-[32px] px-6 py-10 text-center text-white">

        <h2 className="text-3xl font-black">
          PARA
          <span className="text-[#FF7A00]">
            PAIR
          </span>
        </h2>

        <p className="mt-3 text-sm text-white/80">
          Smart Professional Connection Platform
        </p>

        <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-white/70">
          Powered by Parapair Technologies
        </div>
      </footer>
    </main>
  );
}