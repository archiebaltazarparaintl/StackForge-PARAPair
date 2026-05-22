'use client';

import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#FFFDFC] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.12),transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
        }}
        className="relative z-10 w-full max-w-lg rounded-[32px] bg-white p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FFB547] shadow-[0_15px_35px_rgba(255,122,0,0.28)]">
          <Compass className="h-10 w-10 text-white" />
        </div>

        <h1 className="mt-8 text-5xl font-bold text-[#171717]">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-[#171717]">
          Opportunity not found
        </h2>

        <p className="mt-4 text-base leading-relaxed text-[#5F6368]">
          The page you’re looking for may have moved, expired,
          or never existed in the PARA Pair ecosystem.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB547] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>

          <Link
            href="/dashboard/personal"
            className="flex flex-1 items-center justify-center rounded-full border border-[#ECECEC] bg-[#FAFAFA] px-6 py-4 font-medium text-[#171717] transition-all duration-200 hover:bg-[#FFF1E4] hover:text-[#FF7A00]"
          >
            Open Dashboard
          </Link>
        </div>
      </motion.div>
    </main>
  );
}