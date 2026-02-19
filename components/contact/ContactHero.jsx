"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/contact.webp"
        alt="Contact Us"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-black/60 
        via-black/40 
        to-black/70 backdrop-blur-[2px]" 
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center 
        min-h-[80vh] md:min-h-[90vh] 
        px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl text-center text-white">

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[4px] sm:tracking-[5px] 
            text-xs sm:text-sm text-white/80"
          >
            Get In Touch
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
            font-bold mt-4 sm:mt-6 leading-tight"
          >
            Let’s Plan Your <br />
            <span className="text-[var(--color-secondary)]">
              Perfect Journey
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 sm:mt-8 
            text-base sm:text-lg md:text-xl 
            text-white/85 
            max-w-xl sm:max-w-2xl 
            mx-auto px-2"
          >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.

          </motion.p>

        </div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute 
        bottom-6 sm:bottom-8 md:bottom-10 
        left-1/2 -translate-x-1/2
        bg-white/90 backdrop-blur-md 
        text-black 
        px-4 sm:px-6 
        py-2 sm:py-3 
        rounded-full 
        shadow-xl 
        text-xs sm:text-sm 
        font-medium 
        text-center
        max-w-[90%]"
      >
        ⭐ Trusted by 5,000+ Travelers Worldwide
      </motion.div>

    </section>
  );
}
