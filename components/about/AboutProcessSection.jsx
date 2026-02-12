"use client";

import { motion } from "framer-motion";
import { Compass, Palette, MapPin, Camera } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "We Listen First",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    icon: Palette,
    title: "We Design Emotion",
    desc: `Duis aute irure dolor in reprehenderit in voluptate velit esse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.`,
  },
  {
    icon: MapPin,
    title: "You Experience Freely",
    desc: `Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 
    Nullam varius, turpis et commodo pharetra, est eros bibendum elit, 
    nec luctus magna felis sollicitudin mauris.`,
  },
  {
    icon: Camera,
    title: "Memories Stay Forever",
    desc: `Fusce pellentesque suscipit nibh. Integer vitae libero ac risus 
    egestas placerat. Vestibulum commodo felis quis tortor. Ut aliquam 
    sollicitudin leo.`,
  },
];

export default function AboutProcessSection() {
  return (
    <section className="relative py-12 sm:py-10 lg:py-14 bg-[var(--color-background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-foreground">
            How It Works
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-primary leading-tight">
            A Journey — Not a Process
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl sm:rounded-3xl 
                  p-6 sm:p-8 lg:p-10 shadow-lg group transition"
              >
                {/* Floating Icon */}
                <div
                  className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 
                  w-12 h-12 sm:w-14 sm:h-14 
                  rounded-full flex items-center justify-center 
                  bg-gradient-to-br from-[#0E7490] to-[#38BDF8] 
                  text-white shadow-md group-hover:scale-110 transition"
                >
                  <Icon size={20} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0F172A] mb-3 sm:mb-4">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#0F172A]/70 leading-relaxed">
                  {step.desc}
                </p>

                {/* Underline Motion */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-6 sm:mt-8 h-[2px] bg-[#FACC15]"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
