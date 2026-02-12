"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Curated Journeys",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    title: "Local Experts",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    title: "Seamless Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    title: "Trusted by Travelers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    title: "Personal & Flexible",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
  {
    title: "Premium Support",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
  },
];

export default function WhyTravelWithUsPremium() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[var(--color-primary)]">
            Our Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-5 sm:mt-6 leading-tight">
            Travel That Feels <br />
            <span className="text-[var(--color-primary)]">
              Personal & Effortless
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base max-w-lg leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. Donec faucibus risus sit amet est convallis pharetra.  
          </p>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[3px] bg-[var(--color-secondary)] mt-8 sm:mt-10 rounded-full"
          />

          {/* Stats */}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-6 sm:gap-10">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl sm:rounded-3xl px-8 sm:px-10 py-5 sm:py-6 text-center sm:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold">500+</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Happy Travelers
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl sm:rounded-3xl px-8 sm:px-10 py-5 sm:py-6 text-center sm:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold">40+</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Destinations
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg transition-all"
            >
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[var(--color-secondary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <h3 className="text-lg sm:text-xl font-semibold relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed relative z-10">
                {item.desc}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="h-[2px] bg-[var(--color-secondary)] mt-5 sm:mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
