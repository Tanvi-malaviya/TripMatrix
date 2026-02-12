"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[var(--color-background)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] 
            text-xs sm:text-sm text-[var(--color-secondary)]">
            Visit Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl 
            font-bold mt-4 leading-tight">
            Find Us On The Map
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 
            text-sm sm:text-base">
            Whether you prefer meeting in person or planning remotely —
            we’re always close by.
          </p>
        </div>

        {/* Map + Info */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl 
              overflow-hidden shadow-2xl 
              h-[280px] sm:h-[350px] md:h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Goa%20India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl 
              p-6 sm:p-8 md:p-10 
              shadow-xl"
          >

            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              OceanBreeze Studio
            </h3>

            <div className="space-y-5 sm:space-y-6 text-gray-600 
              text-sm sm:text-base">

              <div className="flex gap-4 items-start">
                <MapPin className="text-[var(--color-primary)] mt-1" size={20} />
                <p>
                  Panaji, Goa <br />
                  India
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-[var(--color-primary)]" size={20} />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-[var(--color-primary)]" size={20} />
                <p>hello@oceanbreeze.com</p>
              </div>

            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-8 sm:mt-10 
                px-6 sm:px-8 py-3 sm:py-4 
                text-sm sm:text-base
                rounded-full bg-[var(--color-primary)] 
                text-white font-semibold shadow-lg"
            >
              Get Directions
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
