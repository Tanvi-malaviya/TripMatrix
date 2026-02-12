"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Riya Sharma",
    location: "Maldives",
    image: "/user1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    name: "Amit Patel",
    location: "Swiss Alps",
    image: "/user2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    name: "Neha Kapoor",
    location: "Bali",
    image: "/user3.jpg",
   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    name: "ABC Kapoor",
    location: "Bali",
    image: "/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export default function FloatingStories() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="uppercase tracking-[4px] text-xs md:text-sm text-[var(--color-secondary)]">
            Traveler Voices
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4">
            Memories That Travel Back
          </h2>
        </div>

        {/* Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">

          {/* LEFT STORIES (desktop) */}
          <div className="absolute left-0 space-y-20 hidden lg:block">
            {testimonials.slice(0, 2).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                className="w-[300px] bg-white rounded-3xl p-6 shadow-xl"
              >
                <p className="text-xs text-[var(--color-secondary)] mb-2">
                  {item.location}
                </p>
                <h4 className="font-semibold mb-3">{item.name}</h4>
                <p className="text-sm text-[var(--foreground)]/80">
                  “{item.text}”
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 
              w-[260px] h-[360px] 
              sm:w-[300px] sm:h-[420px] 
              md:w-[320px] md:h-[440px] 
              rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/travel2.avif"
              alt="Journey"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT STORIES (desktop) */}
          <div className="absolute right-0 space-y-20 hidden lg:block">
            {testimonials.slice(2).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                animate={{ y: [0, 12, 0] }}
                className="w-[300px] bg-white rounded-3xl p-6 shadow-xl"
              >
                <p className="text-xs text-[var(--color-secondary)] mb-2">
                  {item.location}
                </p>
                <h4 className="font-semibold mb-3">{item.name}</h4>
                <p className="text-sm text-[var(--foreground)]/80">
                  “{item.text}”
                </p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE & TABLET STACK */}
          <div className="flex flex-col gap-6 lg:hidden w-full max-w-xl mt-10">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <p className="text-xs text-[var(--color-secondary)] mb-1">
                  {item.location}
                </p>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-[var(--foreground)]/80">
                  “{item.text}”
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
