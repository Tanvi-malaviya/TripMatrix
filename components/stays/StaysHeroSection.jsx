"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StaysHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/staybg.webp" 
          alt="Luxury Stay"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Soft Glow Accent */}
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[var(--color-secondary)]/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-[6px] text-sm text-[var(--color-secondary)]"
          >
            Curated Stays
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-bold leading-tight mt-6"
          >
            Stay Somewhere <br />
            <span className="text-[var(--color-secondary)]">
              Extraordinary
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-200 max-w-lg"
          >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.
          </motion.p>

       
        </div>

        {/* RIGHT FLOATING GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hidden lg:block"
        >
          <h3 className="text-xl font-semibold mb-6">
            Quick Stay Preview
          </h3>

          <div className="space-y-4 text-sm text-gray-200">
            <div className="flex justify-between">
              <span>Location</span>
              <span>Maldives</span>
            </div>
            <div className="flex justify-between">
              <span>Starting From</span>
              <span>$420 / Night</span>
            </div>
            <div className="flex justify-between">
              <span>Rating</span>
              <span>⭐ 4.9</span>
            </div>
          </div>
          <Link href="/contact">
          <button className="mt-6 w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition">
            View Details
          </button>
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm tracking-widest text-gray-300"
      >
        SCROLL
      </motion.div>

    </section>
  );
}
