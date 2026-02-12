"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="relative min-h-[95vh] sm:min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home1.jpg"
          alt="Final CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Responsive Floating Blur */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] 
        lg:w-[600px] lg:h-[600px] 
        bg-[var(--color-primary)]/30 blur-[120px] sm:blur-[150px] lg:blur-[180px] 
        rounded-full"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-5 sm:px-8 max-w-3xl"
      >
        <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">
          Your Journey Awaits
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Some Stories Are Meant <br className="hidden sm:block" />
          To Be Lived, Not Planned
        </h2>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          
        </p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mt-8 sm:mt-12"
        >
          <Link
            href="/contact"
            className="inline-block px-7 sm:px-10 py-3 sm:py-4 
            text-sm sm:text-lg font-medium 
            bg-white text-black rounded-full 
            hover:bg-white/90 transition"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
