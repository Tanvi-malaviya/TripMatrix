"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

const headingWords = [
  "Discover",
  "The",
  "World",
  "In",
  "A",
  "Different",
  "Way",
];

export default function CinematicHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/home1.jpg" 
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Soft Gradient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Animated Heading */}
        <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lacus sed mauris placerat hendrerit. Morbi in tempus eros, non congue metus. 
        </motion.p>

    
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[2px] h-10 bg-white/50 relative overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-full h-4 bg-white"
          />
        </div>
      </motion.div> */}
    </section>
  );
}
