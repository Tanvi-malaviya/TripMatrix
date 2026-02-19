"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Star, Compass } from "lucide-react";

const experiences = [
  {
    title: "Honeymoon Escapes",
    desc: "Romantic destinations crafted for unforgettable beginnings.",
    image: "/maldives.webp",
    slug: "honeymoon-escapes",
  },
  {
    title: "Adventure Trails",
    desc: "Mountains, treks and raw experiences for thrill seekers.",
    image: "/swiss.avif",
    slug: "adventure-trails",
  },
  {
    title: "Cultural Luxury",
    desc: "Heritage, architecture and timeless traditions.",
    image: "/travel1.avif",
    slug: "cultural-luxury",
  },
  {
    title: "Island Retreats",
    desc: "Secluded beaches and slow luxury living.",
    image: "/bali.webp",
    slug: "island-retreats",
  },
];

export default async function ExperiencePage({ params }) {
  const { slug } = await params;

  const experience = experiences.find(
    (item) => item.slug === slug
  );

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Experience Not Found
      </div>
    );
  }

  return (
    <section className="relative bg-[var(--color-background)] overflow-hidden">

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[var(--color-primary)]/10 
        via-transparent 
        to-[var(--color-secondary)]/10"
      />

      {/* HERO */}
      <div className="relative h-[80vh] flex items-center justify-center text-center text-white">

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {experience.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            {experience.desc}
          </p>
        </motion.div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">

          {[
            { icon: MapPin, label: "Exotic Locations" },
            { icon: CalendarDays, label: "7-10 Days Tour" },
            { icon: Star, label: "5 Star Rated" },
            { icon: Compass, label: "Guided Exploration" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full 
                  bg-gradient-to-br 
                  from-[var(--color-primary)] 
                  to-[var(--color-secondary)] 
                  flex items-center justify-center text-white"
                >
                  <Icon size={22} />
                </div>
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl font-bold mb-6">
            A Journey Crafted With Intention
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed vitae lorem quis neque interdum fermentum. 
            Suspendisse potenti. Curabitur et dui vel augue 
            facilisis tincidunt. This experience blends comfort,
            exploration and timeless elegance.
          </p>
        </motion.div>

        {/* Itinerary Timeline */}
       {/* Premium Timeline */}
<div className="relative mt-20">

  {/* Vertical Line */}
  <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]" />

  <div className="space-y-24">

    {[1, 2, 3].map((day, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative flex flex-col md:flex-row items-center 
        ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
      >

        {/* Empty Spacer */}
        <div className="hidden md:block md:w-1/2" />

        {/* Center Dot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 
          w-6 h-6 rounded-full 
          bg-gradient-to-br 
          from-[var(--color-primary)] 
          to-[var(--color-secondary)] 
          shadow-lg"
        />

        {/* Card */}
        <div className="w-full md:w-1/2 px-6">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/70 backdrop-blur-xl 
            border border-white/40 
            rounded-3xl p-8 shadow-2xl"
          >

            <h3 className="text-3xl font-bold mb-4 
              text-[var(--color-primary)]">
              Day {day}
            </h3>

            <p className="text-[var(--foreground)]/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Experience curated adventures, guided exploration, 
              luxury stays and unforgettable sunsets. 
              Carefully planned to create meaningful moments.
            </p>

          </motion.div>

        </div>

      </motion.div>
    ))}

  </div>
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full 
            bg-[var(--color-primary)] 
            text-white font-semibold 
            shadow-lg hover:scale-105 transition"
          >
            Book This Experience
          </a>
        </motion.div>

      </div>
    </section>
  );
}
