// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const seasons = [
//   {
//     title: "Spring",
//     months: "March – May",
//     desc: "Blooming landscapes, pleasant weather and calm journeys.",
//     image: "/desti1.jpg",
//   },
//   {
//     title: "Summer",
//     months: "June – August",
//     desc: "Island escapes, beach life and turquoise waters.",
//     image: "/desti2.jpg",
//   },
//   {
//     title: "Autumn",
//     months: "September – November",
//     desc: "Golden colors, culture trips and soft sunlight.",
//     image: "/desti3.jpg",
//   },
//   {
//     title: "Winter",
//     months: "December – February",
//     desc: "Snow adventures, cozy luxury and festive travel.",
//     image: "/desti4.webp",
//   },
// ];

// export default function BestTimeToVisitRail() {
//   return (
//     <section className="relative py-32 bg-[var(--color-background)] overflow-hidden">

//       {/* Ambient background */}
//       <div className="absolute inset-0 bg-gradient-to-r 
//         from-[var(--color-primary)]/5 
//         via-transparent 
//         to-[var(--color-secondary)]/5" 
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="max-w-3xl mb-20">
//           <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
//             Travel Smart
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             Best Time To Visit
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Seasons define the soul of every destination. Choose when the world
//             feels right for you.
//           </p>
//         </div>

//         {/* Rail */}
//         <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">

//           {seasons.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="relative snap-center min-w-[300px] md:min-w-[420px] 
//                          h-[520px] rounded-[2.5rem] overflow-hidden 
//                          shadow-2xl cursor-pointer group"
//             >
//               {/* Image */}
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
//               />

//               {/* Dark overlay */}
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

//               {/* Content */}
//               <motion.div
//                 initial={{ y: 40, opacity: 0 }}
//                 whileHover={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute bottom-8 left-8 right-8 text-white"
//               >
//                 <p className="uppercase tracking-wide text-sm text-white/70">
//                   {item.months}
//                 </p>

//                 <h3 className="text-3xl font-semibold mt-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm mt-3 text-white/80 leading-relaxed">
//                   {item.desc}
//                 </p>

//                 <span className="inline-block mt-5 text-sm font-medium">
//                   Discover Season →
//                 </span>
//               </motion.div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const seasons = [
    {
        title: "Spring",
        months: "March – May",
         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/desti1.jpg",
    },
    {
        title: "Summer",
        months: "June – August",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/desti2.jpg",
    },
    {
        title: "Autumn",
        months: "September – November",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/desti3.jpg",
    },
    {
        title: "Winter",
        months: "December – February",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        image: "/desti4.webp",
    },
];

export default function BestTimeToVisitLens() {
    const [active, setActive] = useState(0);

    return (
        <section className="relative py-32 bg-[var(--color-background)] overflow-hidden">



            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT – Season Selector */}
                <div>
                    <p className="uppercase tracking-[4px] text-sm text-[var(--color-secondary)]">
                        Plan Smart
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-14">
                        Best Time To Visit
                    </h2>

                    <div className="space-y-10">
                        {seasons.map((season, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                                className="cursor-pointer group"
                                initial={false}
                                animate={{
                                    opacity: active === i ? 1 : 0.4,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center gap-6">
                                    {/* Indicator */}
                                    <motion.span
                                        animate={{
                                            width: active === i ? 32 : 8,
                                            backgroundColor:
                                                active === i
                                                    ? "var(--color-primary)"
                                                    : "#CBD5E1",
                                        }}
                                        className="h-[2px] rounded-full"
                                    />

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-2xl font-semibold">
                                            {season.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {season.months}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                {active === i && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="ml-14 mt-4 text-gray-600 max-w-md"
                                    >
                                        {season.desc}
                                    </motion.p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT – Cinematic Image */}
                <div className="relative h-[520px] rounded-[3rem] overflow-hidden shadow-2xl">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={seasons[active].image}
                                alt={seasons[active].title}
                                fill
                                className="object-cover"
                            />

                            {/* Soft overlay */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Caption */}
                            <div className="absolute bottom-10 left-10 text-white">
                                <p className="uppercase tracking-wide text-sm text-white/80">
                                    {seasons[active].months}
                                </p>
                                <h3 className="text-3xl font-semibold mt-1">
                                    {seasons[active].title}
                                </h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
