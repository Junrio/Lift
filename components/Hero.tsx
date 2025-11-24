"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";
import { buildBookingMailto } from "@/utils/booking";
import { getImagePath } from "@/utils/paths";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax transforms for different layers
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 lg:flex-row lg:items-center">
        {/* Left Column - Text Content */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 space-y-6"
        >
          <motion.p
            className="text-sm md:text-base font-semibold tracking-[0.25em] text-secondary uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Fitness for everyone
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-textPrimary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Push Limits.
            <br />
            <span className="text-primary">Achieve Greatness.</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-sm sm:text-base md:text-lg text-textMuted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Transform your body and mind with LIFT's comprehensive fitness
            programs. Join thousands who have already started their journey to
            a healthier, stronger you.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href={buildBookingMailto()}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-semibold text-black shadow-lg shadow-primary/40 transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-body"
              whileTap={{ scale: 0.95 }}
            >
              Book a class
            </motion.a>
            <motion.button
              type="button"
              onClick={() => scrollToSection("classes")}
              className="rounded-full border border-muted bg-transparent px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-semibold text-textPrimary transition-all duration-150 hover:border-primary hover:text-primary hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-body"
              whileTap={{ scale: 0.95 }}
            >
              View classes
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Card with Metrics */}
        <motion.div
          style={{ y: heroImageY }}
          className="relative flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
            <div className="relative mb-4 w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
              <Image
                src={getImagePath("/images/hero.jpg")}
                alt="People training at LIFT gym"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(190,242,100,0.25),_transparent_60%)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

