"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  {
    src: "/travel1.avif",
    title: "Maldives, 2024",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    src: "/travel2.avif",
    title: "Bali, Sunset Escape",
    story:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    src: "/travel3.avif",
    title: "Santorini, Golden Hour",
    story:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];

export default function LightboxStorySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-primary">
            Stories Behind The Moments
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Every photograph carries a memory waiting to be felt.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-black"
              >
                <X size={28} />
              </button>

              <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="relative h-[300px] md:h-auto">
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Story */}
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {selected.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selected.story}
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
