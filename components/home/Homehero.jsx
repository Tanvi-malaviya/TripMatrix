"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OceanModernHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-white">

      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1.05, 1.15, 1.05],
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/beachhero.webp"
          alt="Beach Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Light Sweep */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Discover Your
          <span className="text-[#FACC15] block mt-2">
            Next Escape
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-white/90 
                     max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <Link
            href="/destinations"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full 
                       bg-[#FACC15] text-[#0F172A] font-semibold 
                       shadow-lg hover:scale-105 transition duration-300"
          >
            Explore Now
          </Link>

          <Link
            href="/tours"
            className="w-full sm:w-auto text-center px-8 py-3 rounded-full 
                       border border-white/40 backdrop-blur-md 
                       hover:bg-white/20 transition duration-300"
          >
            View Packages
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
