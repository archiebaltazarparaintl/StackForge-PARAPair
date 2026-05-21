'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    title: string;
    subtitle: string;
    image: string;
}

export function SwipeCard({
    title,
    subtitle,
    image,
}: Props) {
    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{
                rotate: 8,
                scale: 1.03,
            }}
            className="absolute w-full h-full rounded-[32px] overflow-hidden bg-[#111827] border border-white/10 shadow-2xl"
        >

            <div className="relative w-full h-[65%]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="p-6">

                <h2 className="text-3xl font-bold">
                    {title}
                </h2>

                <p className="mt-2 text-[#94A3B8]">
                    {subtitle}
                </p>

                <div className="flex gap-2 mt-5">

                    <span className="px-3 py-1 rounded-full bg-[#0EA5A5]/20 text-[#0EA5A5] text-xs">
                        Design
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#FF7A00]/20 text-[#FF7A00] text-xs">
                        Startup
                    </span>
                </div>
            </div>
        </motion.div>
    );
}