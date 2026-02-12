"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/travel1.avif", title: "Santorini" },
  { src: "/maldives.jpg", title: "Maldives" },
  { src: "/swiss.avif", title: "Swiss Alps" },
  { src: "/bali.jpg", title: "Bali" },
  { src: "/home1.jpg", title: "Paris" },
  { src: "/bali.jpg", title: "Tokyo" },
];

export default function LuxuryTravelGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-10 bg-[var(--color-background)] overflow-hidden">

    
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-sm text-[var(--color-secondary)]">
            Capture The Journey
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Moments in Motion
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {images.map((item, i) => (
            <ShimmerCard
              key={i}
              item={item}
              onClick={() => setActive(item)}
            />
          ))}
        </div>

        {/* Mobile Swipe Stack */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {images.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(item)}
              whileTap={{ scale: 0.96 }}
              className="relative min-w-[80%] h-[420px] snap-center rounded-3xl overflow-hidden shadow-xl"
            >
              <Image src={item.src} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden"
            >
              <Image
                src={active.src}
                alt={active.title}
                fill
                className="object-cover"
              />
              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {active.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ===============================
   SIMPLE CARD + SHIMMER ONLY
   =============================== */

function ShimmerCard({ item, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover"
      />

      {/* Shimmer Effect */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r 
          from-transparent 
          via-white/25 
          to-transparent"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
        {item.title}
      </h3>
    </motion.div>
  );
}
