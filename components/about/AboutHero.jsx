"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative bg-[var(--color-background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>

          {/* Floating label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-5 py-2 rounded-full 
              bg-[#FACC15]/20 text-[#0E7490] 
              text-xs sm:text-sm tracking-widest uppercase font-semibold"
          >
            Our Story
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold text-[#0F172A] leading-tight"
          >
            We Don’t <br />
            Sell Trips.
            <span className="block text-primary">
              We Craft Journeys.
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-[3px] bg-[#FACC15] my-8 sm:my-10 rounded-full"
          />

          {/* Description (Lorem Added) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg text-[#0F172A]/80 max-w-xl leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </motion.p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative w-full flex justify-center lg:justify-end">

          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] 
            h-[380px] sm:h-[460px] md:h-[520px]">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] 
                overflow-hidden shadow-2xl"
            >
              <Image
                src="/travel2.avif"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 sm:bottom-8 -left-6 sm:-left-10
                bg-white px-4 sm:px-6 py-3 sm:py-5 
                rounded-xl sm:rounded-2xl shadow-xl"
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#38BDF8]">
                Since 1998
              </p>
              <p className="text-sm sm:text-base font-bold text-[#0F172A]">
                25+ Years of Travel Stories
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
