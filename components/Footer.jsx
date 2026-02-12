"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--color-border)] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              OCEAN
              <span className="text-[var(--color-accent)]">BREEZE</span>
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Discover breathtaking destinations and curated travel
              experiences crafted for unforgettable journeys.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-primary)]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/tours">Beach Tours</Link></li>
              <li><Link href="/stays">Island Stays</Link></li>
              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-primary)]">
              Support
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">Faq</Link></li>
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-[var(--color-glass)] p-6 rounded-2xl border border-[var(--color-border)]">
            <h4 className="font-semibold mb-3 text-[var(--color-primary)]">
              Stay Updated
            </h4>

            <p className="text-gray-600 text-sm mb-4">
              Get travel inspiration and exclusive offers directly in your inbox.
            </p>

            {/* Responsive input */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full border border-[var(--color-border)] outline-none"
              />

              <button className="px-6 py-2 bg-[var(--color-accent)] text-black font-semibold rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © 2026 OceanBreeze. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
