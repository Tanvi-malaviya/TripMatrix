"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  MapPin,
  Sparkles,
  ConciergeBell,
} from "lucide-react";

const experiences = [
  {
    icon: HeartHandshake,
    title: "Personalized Comfort",
   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    icon: Sparkles,
    title: "Curated Experiences",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    icon: ConciergeBell,
    title: "Seamless Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
];

export default function ExperienceSectionUnique() {
  return (
    <section className="relative py-16 bg-background overflow-hidden">

      {/* Huge Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100 tracking-widest select-none pointer-events-none">
        EXPERIENCE
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Center Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[6px] text-sm text-[var(--color-foreground)]">
            Why Stay With Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-2 leading-tight text-primary">
            More Than <span className="text-[var(--color-primary)]">Just a Room</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.
          </p>
        </motion.div>

        {/* Vertical Glowing Line */}
        <div className="absolute left-1/2 top-60 bottom-20 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-secondary)] to-transparent hidden md:block"></div>

        {/* Cards */}
        <div className="relative grid md:grid-cols-2 gap-16">

          {experiences.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className={`relative bg-white rounded-3xl p-10  border border-gray-100
                ${i % 2 === 0 ? "md:translate-y-10" : "-md:translate-y-10"}`}
              >
                {/* Soft Glow */}
                <div className="absolute inset-0 bg-[var(--color-secondary)]/5 blur-2xl rounded-3xl"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>

    
    </section>
  );
}
