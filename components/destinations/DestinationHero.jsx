"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DestinationHeroEditorial() {
    return (
        <section className="relative min-h-screen bg-background overflow-hidden flex items-center">

            {/* Decorative Vertical Line */}
            <div className="absolute left-10 top-0 h-full w-[1px] bg-black/10" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 px-6 py-10 items-center">

                {/* ===== LEFT CONTENT ===== */}
                <div className="relative z-10">

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="uppercase tracking-[6px] text-sm text-foreground"
                    >
                        Destination Collection
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-6 text-6xl md:text-8xl font-extrabold leading-tight text-primary"
                    >
                        SWISS
                        <span className="block italic font-light">
                            Alps
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-lg text-gray-600 max-w-lg"
                    >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-10 flex flex-wrap gap-6"
                    >
                        {/* Explore Gallery Button */}
                        <motion.button
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-9 py-3 rounded-full overflow-hidden 
               bg-primary text-white font-medium tracking-wide
               shadow-lg group"
                        >
                            {/* Shimmer sweep */}
                            <span className="absolute inset-0 bg-gradient-to-r 
      from-transparent via-white/30 to-transparent 
      translate-x-[-120%] group-hover:translate-x-[120%]
      transition-transform duration-700" />

                            <span className="relative z-10">
                                Explore Gallery
                            </span>
                        </motion.button>

                        {/* Book Shoot Button */}
                        <motion.button
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-9 py-3 rounded-full overflow-hidden
               border border-primary text-primary font-medium tracking-wide
               group"
                        >
                            {/* Fill animation */}
                            <span className="absolute inset-0 bg-primary 
      scale-x-0 origin-left group-hover:scale-x-100
      transition-transform duration-500" />

                            <span className="relative z-10 group-hover:text-white transition-colors">
                                Book Shoot
                            </span>
                        </motion.button>
                    </motion.div>

                </div>

                {/* ===== RIGHT COLLAGE IMAGES ===== */}
                <div className="relative h-[600px] hidden md:block">

                    {/* Image 1 */}
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-0 left-10 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/swiss.avif"
                            alt="Alps"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-32 right-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/travel1.avif"
                            alt="Alps"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Image 3 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-0 left-24 w-60 h-72 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/travel2.avif"
                            alt="Alps"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

            </div>

            {/* Background Big Text Decoration */}
            <div className="absolute bottom-10 right-10 text-[150px] font-extrabold text-black/5 select-none">
                ALPS
            </div>

        </section>
    );
}
