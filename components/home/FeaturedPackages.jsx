"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const packages = [
  {
    title: "Maldives Escape",
    duration: "5 Days / 4 Nights",
    price: "₹75,000",
    image: "/maldives.jpg",
  },
  {
    title: "Swiss Alps Journey",
    duration: "7 Days / 6 Nights",
    price: "₹1,20,000",
    image: "/swiss.avif",
  },
  {
    title: "Bali Luxury Retreat",
    duration: "6 Days / 5 Nights",
    price: "₹65,000",
    image: "/bali.jpg",
  },
  {
    title: "Dubai Premium Tour",
    duration: "4 Days / 3 Nights",
    price: "₹55,000",
    image: "/dubai.avif",
  },
];

export default function FeaturedPackages() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 bg-[var(--color-background)] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
          Featured Tours
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mt-4">
          Explore Our Premium Packages
        </h2>
      </div>

      {/* MOBILE + TABLET GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:hidden gap-6">
        {packages.map((item, index) => (
          <div
            key={index}
            className="relative h-[300px] rounded-3xl overflow-hidden group"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80">{item.duration}</p>
              <p className="mt-2 text-lg font-bold text-[var(--color-accent)]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP EXPAND LAYOUT */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 gap-6 h-[520px]">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActive(index)}
            animate={{ flex: active === index ? 3 : 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
          >
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-8 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">{item.duration}</p>
                <p className="mt-3 text-lg font-bold text-[var(--color-accent)]">
                  {item.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
