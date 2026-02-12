"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, ShieldCheck, Map, Sparkles } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Exclusive Trips",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: ShieldCheck,
    title: "Safety First Always",
   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: Map,
    title: "Expert Local Guides",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export default function TravelOpportunitySection() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-background)] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">

        {/* LEFT SIDE - Floating Images */}
        <div className="relative h-[420px] sm:h-[460px] md:h-[500px]">

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute 
              w-[240px] h-[320px] 
              sm:w-[280px] sm:h-[360px] 
              md:w-[320px] md:h-[400px] 
              rounded-3xl overflow-hidden shadow-2xl 
              rotate-[-6deg]"
          >
            <Image
              src="/travel1.avif"
              alt="Travel"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute 
              left-24 top-24 
              sm:left-32 sm:top-28 
              md:left-40 md:top-32
              w-[220px] h-[300px] 
              sm:w-[250px] sm:h-[330px] 
              md:w-[280px] md:h-[350px] 
              rounded-3xl overflow-hidden shadow-xl 
              rotate-[6deg]"
          >
            <Image
              src="/travel2.avif"
              alt="Luxury"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute 
              bottom-4 left-16 
              sm:bottom-6 sm:left-24 
              md:bottom-10 md:left-32 
              bg-[var(--color-primary)] 
              text-white px-5 py-3 md:px-6 md:py-4 
              rounded-2xl shadow-lg"
          >
            <p className="text-xs md:text-sm">Premium Tours</p>
            <p className="font-bold text-sm md:text-base">
              25+ Years Experience
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="text-center md:text-left">
          <p className="text-[var(--color-secondary)] uppercase tracking-[3px] text-xs md:text-sm">
            Let’s Go Together
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-[var(--foreground)] leading-tight">
            Discover New Horizons <br className="hidden sm:block" />
            With OceanBreeze
          </h2>

          <div className="mt-10 md:mt-12 space-y-8 md:space-y-10">

            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-5 md:gap-6 items-start group text-left"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full 
                    flex items-center justify-center
                    bg-gradient-to-br 
                    from-[var(--color-primary)] 
                    to-[var(--color-secondary)] 
                    text-white shadow-lg 
                    group-hover:scale-110 transition"
                  >
                    <Icon size={20} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
