 
'use client';

import {
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronLeft,
  FolderHeart,
  Sparkles,
  UserRound,
  ShieldCheck,
} from 'lucide-react';

import { Plus_Jakarta_Sans } from 'next/font/google';

// import { getProfiles } from '@/app/utils/storage';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function SelectTypePage() {
  const router = useRouter();

  const [
    type,
    setType,
  ] = useState<
    'personal' | 'business' | null
  >(null);

  const [
    profileCount,
  ] = useState(0);

//   useEffect(() => {
//     setProfileCount(
//       getProfiles().length,
//     );
//   }, []);

    const handleContinue = () => {
    if (!type) return;

    localStorage.setItem(
        'selected-role',
        type,
    );

    router.push(
        '/select-interests',
    );
    };

  return (
    <div
      className={`${jakarta.className} min-h-screen bg-[#FFFDFC] relative overflow-hidden`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-[#FFF1E4]" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[#FFE7C7]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,181,71,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 lg:px-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="hidden lg:block"
          >
            {/* BRAND */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#ECECEC] shadow-lg flex items-center justify-center font-bold text-[#171717]">
                  P
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FFB547] shadow-lg flex items-center justify-center font-bold text-white">
                  P
                </div>
              </div>

              <div>
                <h2 className="font-bold text-2xl tracking-tight">
                  PARAPAIR
                </h2>

                <p className="text-sm text-[#8E8E93]">
                  Swipe-native professional discovery
                </p>
              </div>
            </div>

            {/* HERO */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF1E4] border border-[#FFE0BF] rounded-full px-4 py-2 text-sm font-semibold text-[#FF7A00]">
                <Sparkles className="w-4 h-4" />
                Personalized professional experience
              </div>

              <h1 className="mt-8 text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-[#171717]">
                Choose your
                <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent">
                  professional
                </span>
                journey.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-[#5F6368] max-w-xl">
                Personalize your PARAPAIR
                experience and start building
                meaningful professional
                connections.
              </p>

              {/* FEATURES */}
              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <ShieldCheck className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Trusted Networking
                    </h3>

                    <p className="text-[#5F6368]">
                      Connect through verified profiles and shared intent.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <FolderHeart className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Opportunity Driven
                    </h3>

                    <p className="text-[#5F6368]">
                      Build connections that align with your goals.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-full max-w-xl mx-auto"
          >
            {/* MOBILE LOGO */}
            <div className="lg:hidden text-center mb-10">
              <h1 className="text-5xl font-bold tracking-tight">
                PARA
                <span className="text-[#FF7A00]">
                  PAIR
                </span>
              </h1>

              <p className="mt-3 text-[#5F6368]">
                Professional discovery made human.
              </p>
            </div>

            {/* CARD */}
            <div className="relative bg-white border border-[#F3F3F3] rounded-[36px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              {/* BACK BUTTON */}
              <button
                onClick={() =>
                  router.push('/')
                }
                className="absolute top-6 left-6 w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#ECECEC] flex items-center justify-center hover:bg-[#FFF1E4] transition-all"
              >
                <ChevronLeft
                  size={20}
                />
              </button>

              {/* HEADER */}
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[#171717]">
                  Select Role
                </h2>

                <p className="mt-3 text-[#5F6368] leading-relaxed">
                  Choose how you want to use PARAPAIR.
                </p>
              </div>

              {/* OPTIONS */}
              <div className="mt-10 space-y-5">

                {/* PERSONAL */}
                <motion.button
                  whileHover={{
                    y: -2,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    setType(
                      'personal',
                    )
                  }
                  className={`w-full rounded-[30px] border p-6 text-left transition-all ${
                    type ===
                    'personal'
                      ? 'border-[#FF7A00] bg-[#FFF1E4] shadow-[0_10px_30px_rgba(255,122,0,0.12)]'
                      : 'border-[#ECECEC] bg-white hover:border-[#FFD5A6]'
                  }`}
                >
                  <div className="flex items-start gap-5">

                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        type ===
                        'personal'
                          ? 'bg-gradient-to-br from-[#FF7A00] to-[#FFB547] text-white'
                          : 'bg-[#FAFAFA] text-[#171717]'
                      }`}
                    >
                      <UserRound size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-[#171717]">
                          Personal
                        </h3>

                        {type ===
                          'personal' && (
                          <div className="px-3 py-1 rounded-full bg-[#FF7A00] text-white text-xs font-semibold">
                            Selected
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-[#5F6368] leading-relaxed">
                        Perfect for freelancers,
                        creatives, founders,
                        professionals, and job seekers looking for meaningful collaborations.
                      </p>
                    </div>

                  </div>
                </motion.button>

                {/* BUSINESS */}
                <motion.button
                  whileHover={{
                    y: -2,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    setType(
                      'business',
                    )
                  }
                  className={`w-full rounded-[30px] border p-6 text-left transition-all ${
                    type ===
                    'business'
                      ? 'border-[#FF7A00] bg-[#FFF1E4] shadow-[0_10px_30px_rgba(255,122,0,0.12)]'
                      : 'border-[#ECECEC] bg-white hover:border-[#FFD5A6]'
                  }`}
                >
                  <div className="flex items-start gap-5">

                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        type ===
                        'business'
                          ? 'bg-gradient-to-br from-[#FF7A00] to-[#FFB547] text-white'
                          : 'bg-[#FAFAFA] text-[#171717]'
                      }`}
                    >
                      <BriefcaseBusiness size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-[#171717]">
                          Business
                        </h3>

                        {type ===
                          'business' && (
                          <div className="px-3 py-1 rounded-full bg-[#FF7A00] text-white text-xs font-semibold">
                            Selected
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-[#5F6368] leading-relaxed">
                        Ideal for startups,
                        agencies, organizations,
                        and companies searching for talent and partnerships.
                      </p>
                    </div>

                  </div>
                </motion.button>

              </div>

              {/* ACTIONS */}
              <div className="mt-8 space-y-4">

                <button
                  onClick={
                    handleContinue
                  }
                  disabled={!type}
                  className={`w-full h-14 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                    type
                      ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white shadow-[0_10px_30px_rgba(255,122,0,0.25)] hover:scale-[1.02]'
                      : 'bg-[#F3F3F3] text-[#A1A1AA] cursor-not-allowed'
                  }`}
                >
                  Continue

                  <ArrowRight
                    size={20}
                  />
                </button>

                <button
                  onClick={() =>
                    router.push(
                      '/Profiles',
                    )
                  }
                  className="w-full h-14 rounded-full border border-[#ECECEC] bg-white hover:bg-[#FAFAFA] text-[#171717] font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FolderHeart
                    size={18}
                    className="text-[#FF7A00]"
                  />

                  Manage Saved Cards

                  {profileCount >
                  0
                    ? `(${profileCount})`
                    : ''}
                </button>

              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#8E8E93]">
              <span>Trusted</span>
              <span>•</span>
              <span>Swipe-native</span>
              <span>•</span>
              <span>Human-first</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}