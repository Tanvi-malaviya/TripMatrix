"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Waves, Coffee } from "lucide-react";

const stays = [
  {
    name: "Ocean Bliss Resort",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    image: "/stay1.avif",
    price: "$420",
  },
  {
    name: "Mountain Mist Retreat",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    image: "/stay2.avif",
    price: "$280",
  },
  {
    name: "Royal Heritage Palace",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    image: "/stay3.webp",
    price: "$350",
  },
  {
    name: "Tropical Villa Haven",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    image: "/stay4.avif",
    price: "$500",
  },
];

export default function AllStaysGrid() {
  return (
    <section className="relative py-24 bg-background">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-sm text-[var(--color-secondary)]">
            Discover
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Explore Our Curated Stays
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {stays.map((stay, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {stay.price} <span className="text-xs text-gray-500">/night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">

                <h3 className="text-xl font-semibold">
                  {stay.name}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {stay.desc}
                </p>

                {/* Amenities */}
                <div className="flex items-center gap-4 mt-6 text-gray-500">
                  <div className="flex items-center gap-1 text-sm">
                    <Wifi size={16} />
                    WiFi
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Waves size={16} />
                    Pool
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Coffee size={16} />
                    Breakfast
                  </div>
                </div>

                {/* Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 w-full bg-[var(--color-secondary)] text-white py-3 rounded-xl font-medium shadow-md"
                >
                  View Details
                </motion.button> */}

                {/* Animated Bottom Border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="h-[3px] bg-[var(--color-secondary)] absolute bottom-0 left-0 rounded-full"
                />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
