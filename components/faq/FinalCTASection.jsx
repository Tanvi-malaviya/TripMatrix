"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCTASection() {
    return (
        <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">

            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute inset-0"
            >
                <img
                    src="/desti3.jpg"
                    alt="Travel"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative text-center px-6 max-w-3xl">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold leading-tight"
                >
                    Ready to Book Your <br />
                    Perfect Stay?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-6 text-gray-200"
                >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link
                        href="/stays"
                        className="group relative overflow-hidden px-8 py-4 bg-[var(--color-primary)] rounded-full font-medium shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="relative z-10">Explore Stays</span>

                        {/* Shine Effect */}
                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                    </Link>

                    <Link
                        href="/contact"
                        className="group relative overflow-hidden px-8 py-4 border border-white rounded-full font-medium transition-all duration-500 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl"
                    >
                        <span className="relative z-10">Contact Us</span>

                        {/* Glow background */}
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500"></span>
                    </Link>
                </motion.div>


            </div>
        </section>
    );
}
