"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DestinationCTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-[var(--color-background)]">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/home2.avif"
                    alt="Luxury Travel"
                    fill
                    className="object-cover scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Floating Glow */}
            <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/20 blur-[120px] rounded-full"
            />

            {/* Content */}
            <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[5px] text-sm text-white/80"
                >
                    Your Journey Begins Here
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mt-6 leading-tight"
                >
                    Ready To Experience <br />
                    Travel Beyond Destinations?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mt-6 text-white/80"
                >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
                >

                    {/* PRIMARY CTA */}
                    <Link href={"/contact"}>
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.96 }}
                        className="relative overflow-hidden px-10 py-4 rounded-full font-semibold text-white bg-[var(--color-primary)] shadow-2xl group"
                    >
                        {/* Shine animation */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                        />

                        <span className="relative z-10">
                            Plan My Journey
                        </span>
                    </motion.button>
                    </Link>

                    {/* SECONDARY CTA */}
                    <motion.a
                        href="tel:+919876543210"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="relative px-10 py-4 rounded-full border border-white/40 text-white backdrop-blur-md 
      transition-all duration-300 hover:bg-white hover:text-black group"
                    >
                        <span className="block text-sm font-medium">
                            Talk To Expert
                        </span>

                    </motion.a>

                </motion.div>


                {/* Trust Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 text-sm text-white/60"
                >
                    ⭐ Trusted by 5,000+ travelers • Personalized support • No hidden costs
                </motion.p>
            </div>
        </section>
    );
}
