"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function StillHaveQuestions() {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl md:rounded-3xl px-6 sm:px-10 py-12 sm:py-16"
        >

          {/* Tag */}
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-[var(--color-primary)]">
            Need Help?
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 leading-snug">
            Still Have Questions? <br />
            <span className="text-[var(--color-primary)]">
              We’re Here For You.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-primary)] text-white rounded-full font-medium shadow-lg text-sm sm:text-base"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base"
              >
                <PhoneCall size={18} />
                Chat on WhatsApp
              </a>
            </motion.div>

          </div>

          {/* Floating Glow */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-[var(--color-secondary)]/20 rounded-full blur-2xl"
          />

        </motion.div>

      </div>
    </section>
  );
}
