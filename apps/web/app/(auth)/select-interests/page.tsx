'use client';

import {
  useMemo,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import {
  ArrowRight,
  ChevronLeft,
  Sparkles,
  Search,
  Code2,
  BriefcaseBusiness,
  Cpu,
  Hammer,
  Paintbrush,
  Camera,
  Music2,
  Laptop,
  Building2,
  Lightbulb,
  ChefHat,
  Wrench,
  HeartHandshake,
  BadgeCheck,
} from 'lucide-react';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const interests = [
  {
    name: 'Engineering',
    icon: Cpu,
  },
  {
    name: 'Coding',
    icon: Code2,
  },
  {
    name: 'Freelancing',
    icon: Laptop,
  },
  {
    name: 'Electricity',
    icon: Lightbulb,
  },
  {
    name: 'Bakery',
    icon: ChefHat,
  },
  {
    name: 'Construction',
    icon: Hammer,
  },
  {
    name: 'Business',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Design',
    icon: Paintbrush,
  },
  {
    name: 'Photography',
    icon: Camera,
  },
  {
    name: 'Music',
    icon: Music2,
  },
  {
    name: 'Startups',
    icon: Building2,
  },
  {
    name: 'Repairs',
    icon: Wrench,
  },
];

export default function SelectInterestsPage() {
  const router = useRouter();

  const [selected, setSelected] =
    useState<string[]>([]);

  const [search, setSearch] =
    useState('');

  const filteredInterests =
    useMemo(() => {
      return interests.filter(
        (interest) =>
          interest.name
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      );
    }, [search]);

  const toggleInterest = (
    value: string,
  ) => {
    setSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter(
          (item) =>
            item !== value,
        );
      }

      return [...prev, value];
    });
  };

  const handleContinue = () => {
    localStorage.setItem(
      'user-interests',
      JSON.stringify(selected),
    );

    router.push('/dashboard');
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
                Personalized matching system
              </div>

              <h1 className="mt-8 text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-[#171717]">
                Discover people
                <span className="block bg-gradient-to-r from-[#FF7A00] to-[#FFB547] bg-clip-text text-transparent">
                  with shared
                </span>
                interests.
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-[#5F6368] max-w-xl">
                Select industries, passions,
                and expertise so PARAPAIR can
                personalize your discovery
                experience.
              </p>

              {/* FEATURES */}
              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <HeartHandshake className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Better Matching
                    </h3>

                    <p className="text-[#5F6368]">
                      Connect with professionals aligned to your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-[#F3F3F3] rounded-3xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1E4] flex items-center justify-center">
                    <BadgeCheck className="text-[#FF7A00]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Personalized Feed
                    </h3>

                    <p className="text-[#5F6368]">
                      Curated opportunities and meaningful discoveries.
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
                  router.back()
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
                  Select Interests
                </h2>

                <p className="mt-3 text-[#5F6368] leading-relaxed">
                  Choose at least 3 interests to personalize your experience.
                </p>
              </div>

              {/* SEARCH */}
              <div className="mt-8 relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8E8E93] w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search interests..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value,
                    )
                  }
                  className="w-full h-14 rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] pl-14 pr-5 text-[#171717] placeholder:text-[#8E8E93] outline-none focus:border-[#FFB547] focus:ring-4 focus:ring-[#FFF1E4] transition-all"
                />
              </div>

              {/* INTEREST GRID */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">

                {filteredInterests.map(
                  (interest) => {
                    const Icon =
                      interest.icon;

                    const active =
                      selected.includes(
                        interest.name,
                      );

                    return (
                      <motion.button
                        key={
                          interest.name
                        }
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={() =>
                          toggleInterest(
                            interest.name,
                          )
                        }
                        className={`rounded-[28px] border p-5 transition-all text-center ${
                          active
                            ? 'border-[#FF7A00] bg-[#FFF1E4] shadow-[0_10px_30px_rgba(255,122,0,0.10)]'
                            : 'border-[#ECECEC] bg-white hover:border-[#FFD5A6]'
                        }`}
                      >
                        <div
                          className={`mx-auto w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                            active
                              ? 'bg-gradient-to-br from-[#FF7A00] to-[#FFB547] text-white'
                              : 'bg-[#FAFAFA] text-[#171717]'
                          }`}
                        >
                          <Icon size={24} />
                        </div>

                        <p className="mt-4 font-semibold text-[#171717] text-sm">
                          {interest.name}
                        </p>
                      </motion.button>
                    );
                  },
                )}

              </div>

              {/* SELECTED */}
              <div className="mt-8 flex flex-wrap gap-2">
                {selected.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#FFF1E4] border border-[#FFD5A6] text-[#FF7A00] text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* ACTION */}
              <div className="mt-8">

                <button
                  onClick={
                    handleContinue
                  }
                  disabled={
                    selected.length <
                    3
                  }
                  className={`w-full h-14 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                    selected.length >=
                    3
                      ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white shadow-[0_10px_30px_rgba(255,122,0,0.25)] hover:scale-[1.02]'
                      : 'bg-[#F3F3F3] text-[#A1A1AA] cursor-not-allowed'
                  }`}
                >
                  Continue

                  <ArrowRight
                    size={20}
                  />
                </button>

              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#8E8E93]">
              <span>Curated</span>
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