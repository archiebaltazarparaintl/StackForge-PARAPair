/* eslint-disable @typescript-eslint/no-unused-vars */
 'use client';

import { useMemo, useState } from 'react';
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
} from 'lucide-react';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const interests = [
  { name: 'Engineering', icon: Cpu },
  { name: 'Coding', icon: Code2 },
  { name: 'Freelancing', icon: Laptop },
  { name: 'Electricity', icon: Lightbulb },
  { name: 'Bakery', icon: ChefHat },
  { name: 'Construction', icon: Hammer },
  { name: 'Business', icon: BriefcaseBusiness },
  { name: 'Design', icon: Paintbrush },
  { name: 'Photography', icon: Camera },
  { name: 'Music', icon: Music2 },
  { name: 'Startups', icon: Building2 },
  { name: 'Repairs', icon: Wrench },
];


export default function SelectInterestsPage() {
  const router = useRouter();

  const [isNavigating, setIsNavigating] = useState(false);

  const [search, setSearch] = useState('');

  const [selected, setSelected] = useState<string[]>([]);

  const filteredInterests = useMemo(() => {
    return interests.filter((interest) =>
      interest.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const toggleInterest = (value: string) => {
    setSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item: string) => item !== value);
      }
      return [...prev, value];
    });
  };

const handleContinue = async () => {
  if (selected.length < 3) return;

  try {
    // CHECK EXISTING GUEST
    let guestId = localStorage.getItem('guest-id');

    // CREATE IF NONE
    if (!guestId) {
      guestId =
        'guest_' +
        Date.now() +
        '_' +
        Math.random().toString(36).substring(2, 9);

      localStorage.setItem('guest-id', guestId);
    }

    // SAVE INTERESTS
    localStorage.setItem(
      'guest-interests',
      JSON.stringify(selected),
    );

    console.log('GUEST ID:', guestId);
    console.log('INTERESTS:', selected);

    router.push('/login');
  } catch (error) {
    console.log(error);
    alert('Failed to continue');
  }
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
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
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
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="relative bg-white border border-[#F3F3F3] rounded-[36px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              {/* BACK */}
              <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#ECECEC] flex items-center justify-center hover:bg-[#FFF1E4] transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              {/* HEADER */}
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-[#171717]">
                  Select Interests
                </h2>
                <p className="mt-3 text-[#5F6368]">
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
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-14 rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] pl-14 pr-5 outline-none focus:border-[#FFB547] focus:ring-4 focus:ring-[#FFF1E4]"
                />
              </div>

              {/* GRID */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {filteredInterests.map((interest) => {
                  const Icon = interest.icon;
                  const active = selected.includes(interest.name);

                  return (
                    <motion.button
                      key={interest.name}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleInterest(interest.name)}
                      className={`rounded-[28px] border p-5 text-center transition-all ${
                        active
                          ? 'border-[#FF7A00] bg-[#FFF1E4]'
                          : 'border-[#ECECEC] bg-white'
                      }`}
                    >
                      <div
                        className={`mx-auto w-14 h-14 rounded-2xl flex items-center justify-center ${
                          active
                            ? 'bg-gradient-to-br from-[#FF7A00] to-[#FFB547] text-white'
                            : 'bg-[#FAFAFA]'
                        }`}
                      >
                        <Icon size={24} />
                      </div>

                      <p className="mt-4 font-semibold text-sm">
                        {interest.name}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* SELECTED */}
              <div className="mt-8 flex flex-wrap gap-2">
                {selected.map((item: string) => (
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
  onClick={handleContinue}
  disabled={selected.length < 3 || isNavigating}
  className={`w-full h-14 rounded-full font-semibold flex items-center justify-center gap-2 ${
    selected.length >= 3 && !isNavigating
      ? 'bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white'
      : 'bg-[#F3F3F3] text-[#A1A1AA] cursor-not-allowed'
  }`}
>
  Continue <ArrowRight size={20} />
</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
