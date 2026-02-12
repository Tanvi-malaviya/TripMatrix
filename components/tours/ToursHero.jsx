"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ToursHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/desti1.jpg"
          alt="Luxury Tours"
          fill
          priority
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">

          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[4px] text-xs sm:text-sm text-[var(--color-secondary)]"
          >
            Curated Experiences
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              font-bold text-white
              mt-4 sm:mt-6
              leading-tight
              max-w-4xl
            "
          >
            Handcrafted Tours <br />
            For The{" "}
            <span className="text-[var(--color-accent)]">
              Modern Traveler
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="
              mt-6 sm:mt-8
              text-sm sm:text-base md:text-lg
              text-white/80
              max-w-2xl
            "
          >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.  
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="
              mt-8 sm:mt-12
              flex flex-col sm:flex-row
              gap-4 sm:gap-6
              w-full sm:w-auto
            "
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#tours"
              className="
                text-center
                px-8 sm:px-10 py-3 sm:py-4
                rounded-full
                bg-[var(--color-primary)]
                text-white font-semibold
                shadow-2xl shadow-[var(--color-primary)]/40
              "
            >
              Explore Tours
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="
                text-center
                px-8 sm:px-10 py-3 sm:py-4
                rounded-full
                border border-white/40
                text-white
                backdrop-blur-md
                hover:bg-white hover:text-black
                transition
              "
            >
              Talk To Expert
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="
          absolute bottom-6 sm:bottom-8
          left-1/2 -translate-x-1/2
          text-white/70 text-xs sm:text-sm
          tracking-wide
        "
      >
        Scroll to explore ↓
      </motion.div>

    </section>
  );
}
