"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a stay or tour?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. Praesent egestas commodo diam, ut imperdiet tellus pharetra et. In urna augue, suscipit id quam sit amet, lacinia eleifend ex. Vestibulum molestie aliquet mi sed condimentum. ",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. Praesent egestas commodo diam, ut imperdiet tellus pharetra et. In urna augue, suscipit id quam sit amet, lacinia eleifend ex. Vestibulum molestie aliquet mi sed condimentum. ",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. Praesent egestas commodo diam, ut imperdiet tellus pharetra et. In urna augue, suscipit id quam sit amet, lacinia eleifend ex. Vestibulum molestie aliquet mi sed condimentum. ",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. Praesent egestas commodo diam, ut imperdiet tellus pharetra et. In urna augue, suscipit id quam sit amet, lacinia eleifend ex. Vestibulum molestie aliquet mi sed condimentum. ",
  },
  {
    question: "Is customer support available during the trip?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. Praesent egestas commodo diam, ut imperdiet tellus pharetra et. In urna augue, suscipit id quam sit amet, lacinia eleifend ex. Vestibulum molestie aliquet mi sed condimentum. ",
  },
];

export default function TravelFAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 bg-background overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-sm text-[var(--color-primary)]">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Frequently Asked <br />
            <span className="text-[var(--color-primary)]">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={22} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
