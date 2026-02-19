"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Beach Escapes",
    subtitle: "Sun • Sand • Serenity",
    image: "/desti1.webp",
  },
  {
    title: "Adventure Trails",
    subtitle: "Thrill • Nature • Challenge",
    image: "/desti2.webp",
  },
  {
    title: "Cultural Wonders",
    subtitle: "Heritage • Stories • Traditions",
    image: "/desti3.webp",
  },
  {
    title: "Honeymoon Specials",
    subtitle: "Romance • Privacy • Luxury",
    image: "/desti4.webp",
  },
  {
    title: "Luxury Retreats",
    subtitle: "Comfort • Elegance • Peace",
    image: "/bali.webp",
  },
  {
    title: "Wildlife Journeys",
    subtitle: "Safari • Nature • Discovery",
    image: "/beachhero.webp",
  },
];

export default function TourCategories() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[var(--color-background)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <p className="uppercase tracking-[3px] text-xs sm:text-sm text-[var(--color-secondary)]">
            Choose Your Style
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            Explore Tours By Experience
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. 
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative
                h-[300px] sm:h-[360px] lg:h-[420px]
                rounded-3xl overflow-hidden
                cursor-pointer shadow-xl
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-white">
                <p className="text-xs sm:text-sm tracking-wide text-white/80">
                  {item.subtitle}
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  {item.title}
                </h3>

                {/* CTA */}
                {/* <span className="
                  inline-block mt-3 sm:mt-4
                  text-sm font-medium
                  opacity-100 sm:opacity-0
                  sm:group-hover:opacity-100
                  transition
                ">
                  Explore Tours →
                </span> */}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
