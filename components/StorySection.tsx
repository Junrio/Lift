"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";
import { getImagePath } from "@/utils/paths";

export default function StorySection() {
  const storyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.section
      id="about"
      ref={storyRef}
      className="py-20 sm:py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 md:items-center">
          <motion.div 
            style={{ y: textY }} 
            className="space-y-6"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary">
              When we embrace fitness, we build a brighter future.
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-textMuted">
              At LIFT, we believe fitness is more than just physical transformation. It's about
              building confidence, creating community, and unlocking your potential. Every workout
              is a step toward a stronger, healthier you.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Learn more
              <span>→</span>
            </button>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] w-full overflow-hidden rounded-2xl border border-muted bg-card/80"
          >
            <Image
              src={getImagePath("/images/story.jpg")}
              alt="LIFT gym community and fitness journey"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(190,242,100,0.15),_transparent_60%)]" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

