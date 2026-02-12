"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPhilosophySection() {
  return (
    <section className="relative py-12 sm:py-10 lg:py-14 bg-[var(--color-background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-6">

        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-foreground">
            Our Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-primary leading-tight">
            Travel Should Feel <br className="hidden sm:block" />
            Like a Story — Not a Schedule
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-[#0F172A]/80 leading-relaxed mb-6 sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[#0F172A]/80 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum. Curabitur 
              pretium tincidunt lacus. Nulla gravida orci a odio. Nullam 
              varius, turpis et commodo pharetra, est eros bibendum elit, 
              nec luctus magna felis sollicitudin mauris.
            </p>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl 
                bg-[#F8FAFC] shadow-lg border-l-4 border-[#FACC15]"
            >
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#0F172A] leading-relaxed">
                “Journeys shape people — and people shape journeys.”
              </p>
              <span className="block mt-3 sm:mt-4 text-[10px] sm:text-sm uppercase tracking-wider text-[#38BDF8]">
                — OceanBreeze Belief
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] 
              h-[360px] sm:h-[440px] md:h-[500px]">

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] 
                  overflow-hidden shadow-2xl"
              >
                <Image
                  src="/travel1.avif"
                  alt="Philosophy"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Tag */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 sm:bottom-10 -left-6 sm:-left-10
                  bg-white px-4 sm:px-6 py-3 sm:py-4 
                  rounded-xl sm:rounded-2xl shadow-xl"
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0E7490]">
                  Designed Slowly
                </p>
                <p className="text-sm sm:text-base font-bold text-[#0F172A]">
                  Crafted With Heart
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
