"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryCTA_Light() {
  return (
    <section className="relative py-14 bg-background overflow-hidden">

     

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-2xl p-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A]">
            Let’s Create Your <br />
            <span className="text-primary">
              Next Memory
            </span>
          </h2>

          <p className="mt-8 text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus et netus.
            A journey crafted with care, emotion, and elegance.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12"
          >
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-primary 
              text-white font-semibold shadow-lg shadow-[#38BDF8]/30"
            >
              Start Planning
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
