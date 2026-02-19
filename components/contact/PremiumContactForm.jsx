"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function PremiumContactForm() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-22 bg-[var(--color-background)] overflow-hidden">

      <div className="relative max-w-7xl mx-auto 
        px-4 sm:px-6 lg:px-8 
        grid lg:grid-cols-2 
        gap-12 lg:gap-20 
        items-center"
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[4px] 
            text-xs sm:text-sm 
            text-[var(--color-secondary)]"
          >
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl 
            font-bold mt-4 leading-tight"
          >
            Let’s Design Your <br className="hidden sm:block" /> Dream Journey
          </h2>

          <p className="mt-5 sm:mt-6 text-gray-600 
            max-w-md mx-auto lg:mx-0 
            text-sm sm:text-base"
          >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.

          </p>

          {/* Contact Info */}
          <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">

            {[{
              icon: <Phone size={18} />,
              text: "+91 12345 67890",
            },{
              icon: <Mail size={18} />,
              text: "travel@gmail.com",
            },{
              icon: <MapPin size={18} />,
              text: "Worldwide Destinations",
            }].map((item, i) => (
              <div key={i} className="flex items-center 
                justify-center lg:justify-start 
                gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 
                  rounded-full bg-[var(--color-primary)]/10 
                  flex items-center justify-center 
                  text-[var(--color-primary)]"
                >
                  {item.icon}
                </div>
                <p className="font-medium text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl 
            rounded-2xl sm:rounded-3xl 
            p-6 sm:p-8 md:p-10 lg:p-12 
            shadow-2xl"
        >

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <Input label="Full Name" />
            <Input label="Email Address" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6">
            <Input label="Phone Number" />
            <Input label="Destination" />
          </div>

          <div className="mt-5 sm:mt-6">
            <Textarea label="Tell us about your dream trip" />
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 sm:mt-8 w-full py-3 sm:py-4 
              rounded-full bg-[var(--color-primary)] 
              text-white font-semibold 
              text-sm sm:text-base 
              shadow-xl"
          >
            Send My Request
          </motion.button>

          {/* Trust Line */}
          <p className="mt-3 sm:mt-4 text-center 
            text-xs sm:text-sm text-gray-500"
          >
             Your information is safe & never shared
          </p>

        </motion.form>

      </div>
    </section>
  );
}


/* ===============================
   Floating Input Components
================================ */

function Input({ label }) {
  return (
    <div className="relative">
      <input
        required
        className="peer w-full px-4 sm:px-5 py-3 sm:py-4 
        text-sm sm:text-base
        rounded-xl sm:rounded-2xl 
        bg-white border border-gray-200 
        outline-none focus:border-[var(--color-primary)]"
      />
      <label className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 
        text-gray-400 text-xs sm:text-sm transition-all
        peer-focus:top-2 peer-focus:text-xs 
        peer-focus:text-[var(--color-primary)]
        peer-valid:top-2 peer-valid:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div className="relative">
      <textarea
        rows="5"
        required
        className="peer w-full px-4 sm:px-5 py-3 sm:py-4 
        text-sm sm:text-base
        rounded-xl sm:rounded-2xl 
        bg-white border border-gray-200 
        outline-none focus:border-[var(--color-primary)]"
      />
      <label className="absolute left-4 sm:left-5 top-6 
        text-gray-400 text-xs sm:text-sm transition-all
        peer-focus:top-2 peer-focus:text-xs 
        peer-focus:text-[var(--color-primary)]
        peer-valid:top-2 peer-valid:text-xs"
      >
        {label}
      </label>
    </div>
  );
}
