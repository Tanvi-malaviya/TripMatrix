"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Camera, Leaf } from "lucide-react";

const promises = [
  {
    icon: Compass,
    title: "Journeys With Direction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. ",
  },
  {
    icon: Heart,
    title: "Human Over Hype",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. ",
  },
  {
    icon: Camera,
    title: "See Beyond The Frame",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. ",
  },
  {
    icon: Leaf,
    title: "Respect The Places We Visit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. ",
  },
];

export default function AboutPromiseSection() {
  return (
    <section className="relative py-16 bg-[var(--color-background)] overflow-hidden">

    

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-sm text-[var(--color-foreground)]">
            Our Promise
          </p>

          <h2
            className="text-4xl md:text-6xl font-bold mt-6 leading-tight text-primary"
            // style={{ fontFamily: "var(--font-stardos)" }}
          >
            What We Stand For <br /> Every Single Journey
          </h2>
        </div>

        {/* Promise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl
                           hover:shadow-2xl transition-all"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center
                  bg-gradient-to-br 
                  from-[var(--color-primary)] 
                  to-[var(--color-secondary)] 
                  text-white shadow-lg mb-6
                  group-hover:scale-110 transition"
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-[var(--foreground)]/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
