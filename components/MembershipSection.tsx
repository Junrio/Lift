"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { scrollToSection } from "@/utils/scroll";

export default function MembershipSection() {
  const membershipRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: membershipRef,
    offset: ["start bottom", "end top"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const headingY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const textY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.section
      id="membership"
      ref={membershipRef}
      className="py-20 sm:py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        style={{ y: sectionY }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-3 sm:mb-4"
          style={{ y: headingY }}
        >
          Ready to start your journey?
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-textMuted mb-6 sm:mb-8 max-w-2xl mx-auto"
          style={{ y: textY }}
        >
          Join LIFT today and get access to all classes, training programs, and expert coaching.
        </motion.p>
        <motion.button
          type="button"
          onClick={() => scrollToSection("contact")}
          style={{ y: buttonY }}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-semibold text-black shadow-lg shadow-primary/40 hover:shadow-primary/70 transition-transform duration-150 hover:-translate-y-[1px]"
        >
          View membership plans
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

