"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderStorySection() {
  return (
    <section className="relative py-12 sm:py-10 lg:py-14 bg-[var(--color-background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT — Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full rounded-2xl sm:rounded-[3rem] 
          overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
        >
          <Image
            src="/founder.webp"
            alt="Founder"
            fill
            className="object-contain sm:object-cover"
          />

          {/* Image overlay quote */}
          <div
            className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8
            bg-white/80 backdrop-blur-md 
            rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
          >
            <p className="text-xs sm:text-sm text-[#0F172A]/80 italic leading-relaxed">
              “I never wanted to sell destinations.  
              I wanted people to feel them.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT — Story */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-foreground">
            The Story Behind OceanBreeze
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 sm:mt-6 leading-tight text-primary">
            It Started  
            <br /> With a Camera & Curiosity
          </h2>

          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-[#0F172A]/75 leading-relaxed text-sm sm:text-base lg:text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>

            <p>
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 
              Nullam varius, turpis et commodo pharetra, est eros bibendum 
              elit, nec luctus magna felis sollicitudin mauris.
            </p>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12"
          >
            <p className="text-xs sm:text-sm text-[#0F172A]/60">
              Founder & Creative Director
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#0F172A] mt-1">
              abc
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
