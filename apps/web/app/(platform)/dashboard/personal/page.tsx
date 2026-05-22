'use client';

import {
  Bell,
  BriefcaseBusiness,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

import { motion } from 'framer-motion';

const matches = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'UI/UX Designer',
    company: 'PixelForge',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    match: '98%',
    location: 'Makati',
    tags: ['Design Systems', 'Mobile UX', 'Startup'],
  },
  {
    id: 2,
    name: 'Daniel Cruz',
    role: 'Frontend Engineer',
    company: 'Nova Labs',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
    match: '95%',
    location: 'Taguig',
    tags: ['React', 'Next.js', 'AI'],
  },
];

const quickStats = [
  {
    label: 'New Matches',
    value: '24',
    icon: Heart,
  },
  {
    label: 'Profile Views',
    value: '89',
    icon: Users,
  },
  {
    label: 'Messages',
    value: '16',
    icon: MessageCircle,
  },
];

export default function PersonalDashboardPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFC] pb-32">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
          }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FF7A00] via-[#FF8C42] to-[#FFC371] p-6 text-white shadow-[0_20px_60px_rgba(255,122,0,0.22)] md:p-8"
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Welcome back to PARA Pair
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Discover meaningful professional connections.
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
                Swipe through curated professionals, collaborate with aligned
                people, and unlock opportunities designed around trust.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-white px-6 py-3 font-semibold text-[#FF7A00] shadow-lg transition-all duration-200 hover:-translate-y-1">
                  Start Discovering
                </button>

                <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-200 hover:bg-white/20">
                  View Matches
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {quickStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-2xl font-bold">{item.value}</h3>

                    <p className="mt-1 text-sm text-white/80">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* DISCOVERY */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#171717]">
                  Suggested Matches
                </h2>

                <p className="mt-1 text-sm text-[#5F6368]">
                  Curated professionals aligned with your interests.
                </p>
              </div>

              <button className="rounded-full bg-[#FFF1E4] px-4 py-2 text-sm font-medium text-[#FF7A00]">
                See All
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {matches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="overflow-hidden rounded-[32px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-[#FF7A00] backdrop-blur-xl">
                      <Flame className="h-4 w-4 fill-[#FF7A00]" />
                      {match.match} Match
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">
                            {match.name}
                          </h3>

                          <p className="text-sm text-white/85">
                            {match.role}
                          </p>
                        </div>

                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#FF7A00] shadow-xl transition-all duration-200 hover:scale-105">
                          <Heart className="h-6 w-6 fill-[#FF7A00]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                      <BriefcaseBusiness className="h-4 w-4" />
                      {match.company}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#5F6368]">
                      <MapPin className="h-4 w-4" />
                      {match.location}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {match.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#FFF1E4] px-3 py-1 text-xs font-medium text-[#FF7A00]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            {/* PROFILE COMPLETION */}
            <div className="rounded-[32px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#8E8E93]">
                    Profile Strength
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-[#171717]">
                    86%
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1E4]">
                  <Star className="h-6 w-6 fill-[#FF7A00] text-[#FF7A00]" />
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#F3F3F3]">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547]" />
              </div>

              <button className="mt-6 w-full rounded-full bg-[#171717] py-4 font-semibold text-white transition-all duration-200 hover:bg-black">
                Complete Profile
              </button>
            </div>

            {/* ACTIVITY */}
            <div className="rounded-[32px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#171717]">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-sm text-[#8E8E93]">
                    Your latest engagement
                  </p>
                </div>

                <Bell className="h-5 w-5 text-[#8E8E93]" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'You matched with Sophia',
                  'Daniel viewed your profile',
                  'New message received',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-[#FAFAFA] p-4"
                  >
                    <div className="h-3 w-3 rounded-full bg-[#FF7A00]" />

                    <p className="text-sm font-medium text-[#171717]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
          {[
            {
              icon: Flame,
              active: true,
            },
            {
              icon: MessageCircle,
            },
            {
              icon: Heart,
            },
            {
              icon: Bell,
            },
            {
              icon: Users,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-200 ${
                  item.active
                    ? 'bg-gradient-to-br from-[#FF7A00] to-[#FFB547] text-white shadow-lg'
                    : 'text-[#8E8E93] hover:bg-[#FFF1E4] hover:text-[#FF7A00]'
                }`}
              >
                <Icon className="h-6 w-6" />
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
