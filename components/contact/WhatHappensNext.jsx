"use client";

import { motion } from "framer-motion";
import { MailOpen, PhoneCall, MapPinned } from "lucide-react";

const steps = [
  {
    icon: MailOpen,
    title: "We Review Your Request",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit..",
  },
  {
    icon: PhoneCall,
    title: "Personal Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.",
  },
  {
    icon: MapPinned,
    title: "Your Journey Begins",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="relative py-14 bg-[var(--color-background)] overflow-hidden">

     

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
            Peace of Mind
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Happens Next?
          </h2>
          <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-10 
                shadow-xl hover:shadow-2xl transition"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center 
                bg-gradient-to-br 
                from-[var(--color-primary)] 
                to-[var(--color-secondary)] 
                text-white shadow-lg mb-6
                group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                {/* Step Number */}
                <span className="absolute top-6 right-8 text-6xl font-bold 
                text-black/5">
                  0{i + 1}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm text-gray-500"
        >
           Most travelers hear back within <strong>24 hours</strong>
        </motion.p>

      </div>
    </section>
  );
}
