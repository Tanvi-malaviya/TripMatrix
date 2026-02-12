"use client";

import { motion } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalToursCTA() {
  return (
    <section className="relative py-18 overflow-hidden bg-[var(--color-background)]">

   

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
          bg-white/70 backdrop-blur-md shadow-lg text-sm font-medium"
        >
          <Sparkles size={16} className="text-[var(--color-primary)]" />
          Limited handcrafted journeys
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mt-8 leading-tight"
        >
          Your Next Story <br />
          Starts With One Conversation
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus porttitor dui sit amet tristique.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* Primary CTA */}
          <Link href={"/contacts"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full 
              bg-[var(--color-primary)] text-white font-semibold 
              shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            Plan My Tour
          </motion.button>
          </Link>

          {/* Secondary CTA */}
          <motion.a
            href="tel:+919999999999"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 rounded-full 
              border border-black/10 bg-white/70 backdrop-blur-md 
              font-semibold flex items-center gap-3 justify-center
              hover:bg-black hover:text-white transition"
          >
            <PhoneCall size={18} />
            Talk to Expert
          </motion.a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-gray-500"
        >
          No pressure. No spam. Just honest travel advice.
        </motion.p>
      </div>
    </section>
  );
}
