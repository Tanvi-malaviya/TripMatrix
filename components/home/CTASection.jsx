"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[var(--color-primary)] animate-gradientMove opacity-90" />

      {/* Wrapper */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative 
            p-8 sm:p-10 md:p-14
            rounded-3xl
            backdrop-blur-xl
            bg-[var(--color-glass)]
            border border-[var(--color-border)]
            shadow-2xl
          "
          style={{
            backgroundImage: `linear-gradient(var(--color-glass), var(--color-glass)),
                              linear-gradient(120deg, var(--color-primary), var(--color-secondary), var(--color-accent))`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Label */}
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-[var(--color-primary)] mb-4 sm:mb-6">
            Ready For Your Next Journey?
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-snug mb-5 sm:mb-6">
            Let’s Explore The World
            <span className="block sm:inline"> With OceanBreeze</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full sm:w-auto
              px-8 sm:px-10 py-3 sm:py-4
              rounded-full 
              font-semibold 
              text-black
              bg-[var(--color-accent)]
              shadow-lg
              transition-all
              duration-300
            "
          >
            Plan Your Trip
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
}
