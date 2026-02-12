"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is the ideal duration for this destination?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Is this destination suitable for couples or families?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Do you customize itineraries?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What kind of accommodations are available?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Is this destination travel-friendly year-round?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function DestinationFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-16 bg-background overflow-hidden">



      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[4px] text-sm text-foreground">
            Need To Know
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-primary">
            Destination FAQs
          </h2>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                className={`relative rounded-3xl px-10 py-8 cursor-pointer transition
                ${isOpen
                    ? "bg-neutral-100 shadow-xl"
                    : "bg-neutral-50 hover:bg-neutral-100"
                  }`}
                onClick={() => setActive(isOpen ? null : index)}
              >
                {/* Glow when active */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                    from-[var(--color-primary)]/10 
                    to-transparent blur-2xl -z-10"
                  />
                )}

                {/* Question */}
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl md:text-2xl font-medium">
                    {faq.question}
                  </h3>

                  {/* Minimal Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light text-gray-400"
                  >
                    +
                  </motion.span>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 text-gray-600 leading-relaxed max-w-3xl"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
