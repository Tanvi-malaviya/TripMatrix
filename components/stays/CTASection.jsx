"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/stay1.avif" 
          alt="Luxury Stay"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-sm text-[var(--color-secondary)]">
            Your Escape Awaits
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            The Perfect Stay <br />
            Is Just One Step Away
          </h2>

          <p className="mt-8 text-gray-200 max-w-lg text-lg leading-relaxed">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.
          </p>
        </motion.div>

        {/* RIGHT FLOATING GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Ready to Begin?
          </h3>

          <div className="space-y-4 text-gray-200 text-sm">
            <div className="flex justify-between">
              <span>Luxury Villas</span>
              <span>✓</span>
            </div>
            <div className="flex justify-between">
              <span>Beachfront Resorts</span>
              <span>✓</span>
            </div>
            <div className="flex justify-between">
              <span>Mountain Retreats</span>
              <span>✓</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full py-4 bg-[var(--color-secondary)] rounded-xl font-medium shadow-lg"
            >
              Book Your Stay
            </motion.button>
            </Link>
          
          </div>
        </motion.div>

      </div>

      {/* Animated Light Sweep */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

    </section>
  );
}
