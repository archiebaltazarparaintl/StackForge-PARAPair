'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users2,
  BriefcaseBusiness,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function LandingPage() {
  return (
    <main
      className={`${jakarta.className} min-h-screen bg-[#FFFDFC] overflow-hidden relative`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-180px] left-[-140px] w-[480px] h-[480px] rounded-full bg-[#FFF1E4]" />

        <div className="absolute bottom-[-220px] right-[-120px] w-[520px] h-[520px] rounded-full bg-[#FFE7C7]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,181,71,0.08),transparent_30%)]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#ECECEC] shadow-lg flex items-center justify-center font-bold text-[#171717]">
                P
              </div>

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FFB547] shadow-lg flex items-center justify-center font-bold text-white">
                P
              </div>
            </div>

            <div>
              <h1 className="font-bold text-2xl tracking-tight text-[#171717]">
                PARAPAIR
              </h1>

              <p className="text-sm text-[#8E8E93]">
                Professional discovery made human
              </p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:flex h-12 px-6 rounded-full border border-[#ECECEC] bg-white hover:bg-[#FAFAFA] transition-all items-center justify-center font-semibold text-[#171717]"
            >
              Sign In
            </Link>

            <Link
              href="/select-type"
              className="h-12 px-6 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white font-semibold shadow-[0_10px_30px_rgba(255,122,0,0.25)] hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Get Started

              <ArrowRight
                size={18}
              />
            </Link>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-[#FFF1E4] border border-[#FFE0BF] rounded-full px-5 py-2 text-sm font-semibold text-[#FF7A00]">
                <Sparkles className="w-4 h-4" />
                Swipe-native professional networking
              </div>

              {/* TITLE */}
              <h1 className="mt-8 text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-[#171717]">
                Find your next
                <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent">
                  collaboration,
                </span>
                opportunity,
                <span className="block">
                  or connection.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#5F6368] max-w-2xl">
                PARAPAIR transforms professional networking into a warm,
                human-first experience — helping founders, freelancers,
                creatives, businesses, and professionals connect through
                shared goals and mutual intent.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <Link
                  href="/select-type"
                  className="h-14 px-8 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white font-semibold shadow-[0_10px_30px_rgba(255,122,0,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  Start Your Journey

                  <ArrowRight
                    size={20}
                  />
                </Link>

                <Link
                  href="/login"
                  className="h-14 px-8 rounded-full border border-[#ECECEC] bg-white hover:bg-[#FAFAFA] transition-all flex items-center justify-center font-semibold text-[#171717]"
                >
                  I already have an account
                </Link>

              </div>

              {/* STATS */}
              <div className="mt-14 flex flex-wrap gap-8">

                <div>
                  <h3 className="text-4xl font-bold text-[#171717]">
                    10K+
                  </h3>

                  <p className="mt-1 text-[#8E8E93]">
                    Professionals
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-[#171717]">
                    3x
                  </h3>

                  <p className="mt-1 text-[#8E8E93]">
                    Faster discovery
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-[#171717]">
                    100%
                  </h3>

                  <p className="mt-1 text-[#8E8E93]">
                    Human-centered
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              {/* MAIN CARD */}
              <div className="relative mx-auto max-w-md">

                <div className="absolute -top-6 -right-6 bg-white border border-[#F3F3F3] rounded-3xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                      <BadgeCheck className="text-[#FF7A00]" />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#171717]">
                        Verified Match
                      </h4>

                      <p className="text-sm text-[#8E8E93]">
                        Shared interests found
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#F3F3F3] rounded-[36px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                  {/* PROFILE */}
                  <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FF7A00] via-[#FF9A3D] to-[#FFC371] p-8 text-white min-h-[480px] flex flex-col justify-between">

                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold">
                        Product Designer
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <HeartHandshake />
                      </div>
                    </div>

                    {/* CENTER */}
                    <div>
                      <div className="w-28 h-28 rounded-[30px] bg-white/20 backdrop-blur-md mb-6" />

                      <h2 className="text-4xl font-bold">
                        Kevin France
                      </h2>

                      <p className="mt-2 text-white/90 text-lg">
                        UI/UX • Branding • Startups
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">

                        <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
                          Creative
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
                          Freelance
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
                          Founder
                        </div>

                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex items-center justify-between">

                      <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        ✕
                      </button>

                      <button className="h-16 px-8 rounded-full bg-white text-[#FF7A00] font-bold shadow-lg flex items-center gap-2">
                        Pair Now

                        <ChevronRight
                          size={20}
                        />
                      </button>

                    </div>

                  </div>

                </div>

                {/* FLOATING CARD */}
                <div className="absolute -bottom-8 -left-8 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[260px]">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                      <Users2 className="text-[#FF7A00]" />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#171717]">
                        Human-first
                      </h4>

                      <p className="text-sm text-[#8E8E93]">
                        Less pressure. More opportunities.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#FFF1E4] border border-[#FFE0BF] rounded-full px-5 py-2 text-sm font-semibold text-[#FF7A00]">
              <BriefcaseBusiness className="w-4 h-4" />
              How PARAPAIR works
            </div>

            <h2 className="mt-8 text-5xl font-bold tracking-tight text-[#171717]">
              A smoother way to network professionally.
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#5F6368]">
              Designed to reduce networking anxiety through intuitive and emotionally intelligent interactions.
            </p>
          </div>

          {/* STEPS */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">

            {/* STEP 1 */}
            <div className="bg-white border border-[#F3F3F3] rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E4] flex items-center justify-center text-[#FF7A00]">
                <Sparkles />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                Select Your Role
              </h3>

              <p className="mt-4 text-[#5F6368] leading-relaxed">
                Choose whether you are joining as an individual professional or as a business.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-white border border-[#F3F3F3] rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E4] flex items-center justify-center text-[#FF7A00]">
                <HeartHandshake />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                Pick Your Interests
              </h3>

              <p className="mt-4 text-[#5F6368] leading-relaxed">
                Personalize your experience through industries, passions, and skills.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-white border border-[#F3F3F3] rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 rounded-2xl bg-[#FFF1E4] flex items-center justify-center text-[#FF7A00]">
                <ShieldCheck />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#171717]">
                Start Matching
              </h3>

              <p className="mt-4 text-[#5F6368] leading-relaxed">
                Swipe through meaningful opportunities and connect with mutual intent.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-20 flex justify-center">
            <Link
              href="/select-type"
              className="h-16 px-10 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white font-semibold shadow-[0_10px_30px_rgba(255,122,0,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              Begin Your Journey

              <ArrowRight
                size={22}
              />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}