"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scroll";
import { buildBookingMailto } from "@/utils/booking";

const navLinks = [
  "Home",
  "About",
  "Training",
  "Classes",
  "Membership",
  "Testimonials",
  "Contact",
];

const navLinkToId: Record<string, string> = {
  Home: "home",
  About: "about",
  Training: "training",
  Classes: "classes",
  Membership: "membership",
  Testimonials: "testimonials",
  Contact: "contact",
};

const baseLink =
  "relative text-sm md:text-base transition-colors duration-200 font-medium";
const inactive =
  " text-textMuted hover:text-textPrimary focus-visible:outline-none focus-visible:text-textPrimary";
const active = " text-textPrimary";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    
    // Calculate scroll progress
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;
    const progress = scrollableHeight > 0 ? (latest / scrollableHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  });

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "training",
      "classes",
      "membership",
      "testimonials",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-black/40 backdrop-blur-md"
          : "border-white/5 bg-black/20 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      <motion.nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand with premium logo styling */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Enhanced lightning bolt icon with gradient */}
            <motion.span
              className="relative flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(158, 240, 26, 0.3), 0 0 40px rgba(255, 140, 0, 0.2)",
                  "0 0 30px rgba(158, 240, 26, 0.4), 0 0 50px rgba(255, 140, 0, 0.3)",
                  "0 0 20px rgba(158, 240, 26, 0.3), 0 0 40px rgba(255, 140, 0, 0.2)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glowing border gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-orange-500 to-red-500 opacity-60 blur-[2px]" />
              <div className="absolute inset-[1px] rounded-full bg-black/60 backdrop-blur-sm" />
              <span className="relative z-10 text-base sm:text-lg md:text-xl bg-gradient-to-b from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                ⚡
              </span>
            </motion.span>

            {/* Premium LIFT text logo */}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow effect behind text */}
              <span className="absolute inset-0 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary opacity-40 blur-md pointer-events-none">
                LIFT
              </span>
              
              {/* Main text with gradient effect */}
              <span 
                className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #F9FAFB 0%, #9EF01A 50%, #F9FAFB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(158, 240, 26, 0.5))",
                }}
              >
                LIFT
              </span>
              
              {/* Subtle shine animation */}
              <motion.span
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm md:text-base text-textMuted">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => scrollToSection(navLinkToId[link])}
                className={
                  "group " +
                  baseLink +
                  (activeSection === navLinkToId[link] ? active : inactive)
                }
              >
                <span className="inline-block">
                  {link}
                  <span className="block h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full group-focus-visible:w-full" />
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-5 h-[2px] bg-textPrimary rounded-full"
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 6 : 0,
            }}
          />
          <motion.span
            className="w-5 h-[2px] bg-textPrimary rounded-full"
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-5 h-[2px] bg-textPrimary rounded-full"
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? -6 : 0,
            }}
          />
        </button>

        {/* CTA Button */}
        <motion.a
          href={buildBookingMailto()}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm md:text-base font-semibold text-black shadow-lg shadow-primary/40 transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a class
        </motion.a>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === navLinkToId[link];
            return (
              <motion.button
                key={link}
                type="button"
                onClick={() => {
                  scrollToSection(navLinkToId[link]);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-textMuted hover:text-textPrimary hover:bg-white/5"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {link}
              </motion.button>
            );
          })}
          <motion.a
            href={buildBookingMailto()}
            className="block w-full mt-4 text-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/40"
            whileTap={{ scale: 0.95 }}
          >
            Book a class
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}

