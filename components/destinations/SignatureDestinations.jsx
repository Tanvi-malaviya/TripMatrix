"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
    {
        title: "Honeymoon Escapes",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/maldives.webp",
        slug: "honeymoon-escapes",
    },
    {
        title: "Adventure Trails",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/swiss.avif",
        slug: "adventure-trails",
    },
    {
        title: "Cultural Luxury",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/travel1.avif",
        slug: "cultural-luxury",
    },
    {
        title: "Island Retreats",
       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/bali.webp",
        slug: "island-retreats",
    },
];


export default function ExploreByExperience() {
    return (
        <section className="relative py-32 bg-[var(--color-background)] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-2xl mb-20">
                    <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
                        Choose Your Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        Explore Destinations <br /> By Experience
                    </h2>
                </div>

                {/* Experience Cards */}
                <div className="space-y-16">

                    {experiences.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className={`relative group flex flex-col md:flex-row 
                ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} 
                gap-12 items-center`}
                        >

                            {/* Image */}
                            <div className="relative w-full md:w-1/2 h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/25" />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--foreground)]/70 max-w-md mb-8">
                                    {item.desc}
                                </p>

                                <Link
                                    href={`/destinations/${item.slug}`}
                                    className="inline-flex items-center gap-2 
             text-[var(--color-primary)] font-medium 
             group-hover:gap-4 transition-all"
                                >
                                    Explore Destinations →
                                </Link>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}
