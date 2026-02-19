"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import GalleryHeroSection from "@/components/gallery/GalleryHeroSection";
import LightboxStorySection from "@/components/gallery/LightboxStorySection";
import GalleryFinalCTA from "@/components/gallery/GalleryFinalCTA";

const categories = ["All", "Beaches", "Islands", "Experiences"];

const images = [
  {
    src: "/travel1.avif",
    category: "Beaches",
    title: "Maldives Silence",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    src: "/travel2.avif",
    category: "Islands",
    title: "Bali Escape",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    src: "/desti4.webp",
    category: "Experiences",
    title: "Sunset Sailing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    src: "/desti1.webp",
    category: "Beaches",
    title: "Hidden Cove",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    src: "/desti2.webp",
    category: "Islands",
    title: "Santorini Glow",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    src: "/desti3.webp",
    category: "Experiences",
    title: "Private Dinner",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
    <GalleryHeroSection />
    <section className="min-h-screen bg-background py-12 px-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#0F172A]"
        >
          Travel Stories in Frames
        </motion.h1>

        <p className="mt-6 text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus. A journey crafted with care, emotion, and elegance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm transition
              ${
                activeCategory === cat
                  ? "bg-[#0E7490] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Style Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mb-6 break-inside-avoid cursor-pointer group relative"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-semibold">{img.title}</h3>
                  <p className="text-sm text-white/80">{img.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
   <AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-lg 
      flex items-center justify-center z-50 p-6"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 60 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative bg-white rounded-3xl shadow-2xl 
        max-w-4xl w-full overflow-hidden"
      >
        {/* CLOSE */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 z-50 
          bg-white/90 p-2 rounded-full shadow hover:scale-110 transition"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          
          {/* IMAGE */}
          <div className="relative h-[260px] md:h-[400px]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT SIDE */}
          <div className="p-8 flex flex-col justify-center">
            
            {/* Small Category Tag */}
            <span className="text-xs tracking-widest uppercase text-[#0E7490] font-medium">
              Travel Experience
            </span>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mt-2">
              {selectedImage.title}
            </h3>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-[#0E7490] my-4 rounded-full" />

            {/* Description */}
            <p className="text-[#0F172A]/70 leading-relaxed">
              {selectedImage.desc}
            </p>

            {/* Subtle Footer Text */}
            <p className="text-sm text-[#0F172A]/40 mt-6 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>




    </section>

  <GalleryFinalCTA />
    </>
  );
}
