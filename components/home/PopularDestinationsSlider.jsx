"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    title: "Paris",
    image: "/home1.webp",
  },
  {
    title: "Santorini",
    image: "/home2.avif",
  },
  {
    title: "Tokyo",
    image: "/home3.avif",
  },
  {
    title: "New York",
    image: "/home4.avif",
  },
];

export default function PopularDestinationsSplit() {
  return (
    <section className="relative py-14 bg-[var(--color-background)] overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="uppercase tracking-[4px] text-sm text-gray-500">
          Discover
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Popular Destinations
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – Featured Big Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src={destinations[0].image}
            alt={destinations[0].title}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-8 text-white">
            <h3 className="text-4xl font-bold">
              {destinations[0].title}
            </h3>
            <p className="text-sm mt-2 opacity-80">
              Explore the romance & culture
            </p>
          </div>
        </motion.div>

        {/* RIGHT – Vertical Stacked Cards */}
        <div className="space-y-8">
          {destinations.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative h-40 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h4 className="text-white text-xl font-semibold">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
