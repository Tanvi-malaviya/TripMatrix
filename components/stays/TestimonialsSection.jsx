"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
  {
    name: "Rohan Mehta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
  {
    name: "Priya Desai",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-background to-gray-50 overflow-hidden">

      {/* Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100 tracking-widest select-none pointer-events-none">
        REVIEWS
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-sm text-[var(--color-secondary)]"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-6"
        >
          What Our Guests Say
        </motion.h2>

        {/* Floating Cards */}
        <div className="relative mt-20 grid md:grid-cols-3 gap-10">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
             
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-100"
            >
              <p className="text-gray-600 italic leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6 font-semibold">
                {item.name}
              </div>
            </motion.div>
          ))}

        </div>
      </div>

    
    </section>
  );
}
