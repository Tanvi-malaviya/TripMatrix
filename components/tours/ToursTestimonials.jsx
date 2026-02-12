"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Luxury Europe Tour",
    image: "/user.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
  {
    name: "Ananya Kapoor",
    role: "Bali Escape",
    image: "/user.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
  {
    name: "Kunal Shah",
    role: "Swiss Alps Journey",
    image: "/user.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.",
  },
];

export default function ToursTestimonials() {
  return (
    <section className="relative py-16  bg-[var(--color-background)] overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
            Traveler Stories
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Journeys People <br />
            Still Talk About
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique. Donec faucibus risus sit amet est convallis pharetra. Nam finibus urna nec nisl lobortis sodales. 
          </p>
        </motion.div>

        {/* RIGHT FLOATING TESTIMONIALS */}
        <div className="relative space-y-8">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-black/5"
            >
              <div className="flex items-center gap-5 mb-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                “{item.quote}”
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
