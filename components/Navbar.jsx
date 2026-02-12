"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "Beach Tours", href: "/tours" },
  { name: "Island Stays", href: "/stays" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function FloatingWaveNavbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const navY = useTransform(scrollY, [0, 120], [-80, 0]);
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(248,250,252,0)", "rgba(255,255,255,0.95)"]
  );
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(16px)"]);

  return (
    <motion.header
      style={{ y: navY, backgroundColor: background, backdropFilter: blur }}
      className="fixed top-0 left-0 w-full z-50 border-b border-transparent"
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-[#0E7490]"
        >
          OCEAN<span className="text-[#38BDF8]">BREEZE</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition relative
                    ${
                      isActive
                        ? "text-[#0E7490]"
                        : "text-[#0F172A]/80 hover:text-[#0E7490]"
                    }`}
                >
                  {link.name}
                </Link>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-[4px] 
                    rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0E7490]"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            href="/book"
            className="px-6 py-3 rounded-full bg-[#FACC15] 
            text-[#0F172A] text-sm font-semibold 
            shadow-md shadow-[#FACC15]/40"
          >
            ☀️ Plan Trip
          </Link>
        </motion.div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0E7490]"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition
                      ${
                        isActive
                          ? "text-[#0E7490]"
                          : "text-[#0F172A]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex justify-center items-center 
                px-6 py-3 rounded-full bg-[#FACC15] 
                text-[#0F172A] font-semibold"
              >
                ☀️ Plan Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
