"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    place: "Maldives",
    image: "/user.jpg",
    quote:
      "For the first time, travel didn’t feel rushed. It felt intentional, calm, and deeply personal.",
  },
  {
    name: "Amit Patel",
    place: "Swiss Alps",
    image: "/user.jpg",
    quote:
      "OceanBreeze didn’t show us places — they changed how we experience them.",
  },
  {
    name: "Neha Kapoor",
    place: "Bali",
    image: "/user.jpg",
    quote:
      "This journey stayed with me long after I returned home.",
  },
];

export default function GlassTestimonialsSection() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="relative pt-14 pb-20 bg-[var(--color-background)]">

     

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
            Client Experiences
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 text-[var(--foreground)]">
            What Travelers Say
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden py-12"
        >
          <motion.div
            animate={controls}
            className="flex gap-8 md:gap-12 w-max items-stretch will-change-transform"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  relative
                  w-[280px] sm:w-[320px] md:w-[380px]
                  min-h-[260px]
                  p-8
                  rounded-3xl
                  backdrop-blur-xl
                  bg-white/40
                  border border-white/30
                  shadow-sm
                  flex flex-col justify-between
                  cursor-pointer
                "
              >
                {/* Decorative Quote */}
                <div className="absolute top-6 right-6 text-6xl opacity-10 font-bold">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-lg leading-relaxed text-[var(--foreground)]/80">
                  {item.quote}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm text-[var(--color-secondary)]">
                      {item.place}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
