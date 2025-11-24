"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { scrollToSection } from "@/utils/scroll";

const trainingSectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const trainingGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const trainingCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TrainingSection() {
  const trainingRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trainingRef,
    offset: ["start bottom", "end top"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const gridY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.section
      id="training"
      ref={trainingRef}
      className="py-20 sm:py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={trainingSectionVariants}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: titleY }}
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
              Training
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
              Training that fits your goals
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm md:text-base text-textMuted">
              LIFT offers structured programs for strength, fat loss, endurance, and mobility so
              you can train with purpose, not guesswork. Choose the track that matches your
              goals and experience level.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          variants={trainingGridVariants}
        >
          {/* Card 1 */}
          <motion.div
            variants={trainingCardVariants}
            className="flex h-full flex-col rounded-2xl border border-muted bg-card/80 p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
          >
            <span className="mb-3 sm:mb-4 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-lg sm:text-xl">
              💪
            </span>
            <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-textPrimary">
              Strength & Hypertrophy
            </h3>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-textMuted">
              Build muscle, get stronger, and improve your overall physique with progressive strength training blocks.
            </p>
            <ul className="mt-auto space-y-1.5 text-xs text-textMuted">
              <li>• 3–5 sessions per week</li>
              <li>• Perfect for lifters of all levels</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={trainingCardVariants}
            className="flex h-full flex-col rounded-2xl border border-muted bg-card/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
              🔥
            </span>
            <h3 className="mb-3 text-lg font-semibold text-textPrimary">
              Fat Loss & Conditioning
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-textMuted">
              High-energy workouts that combine cardio and strength to burn calories and improve work capacity.
            </p>
            <ul className="mt-auto space-y-1.5 text-xs text-textMuted">
              <li>• Intervals & circuits</li>
              <li>• Great for body recomposition</li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={trainingCardVariants}
            className="flex h-full flex-col rounded-2xl border border-muted bg-card/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
              🏃
            </span>
            <h3 className="mb-3 text-lg font-semibold text-textPrimary">
              Endurance & Performance
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-textMuted">
              Improve stamina, speed, and overall conditioning with structured endurance-focused sessions.
            </p>
            <ul className="mt-auto space-y-1.5 text-xs text-textMuted">
              <li>• Runners & athletes welcome</li>
              <li>• Mix of steady-state & intervals</li>
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={trainingCardVariants}
            className="flex h-full flex-col rounded-2xl border border-muted bg-card/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl">
              🧘
            </span>
            <h3 className="mb-3 text-lg font-semibold text-textPrimary">
              Mobility & Recovery
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-textMuted">
              Restore movement quality, reduce stiffness, and support long-term training with targeted mobility work.
            </p>
            <ul className="mt-auto space-y-1.5 text-xs text-textMuted">
              <li>• Ideal rest-day add-on</li>
              <li>• Great for desk workers</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 md:mt-16 flex flex-col gap-4 rounded-2xl border border-muted/60 bg-card/60 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-5 md:flex-row md:items-center md:justify-between md:gap-6"
        >
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-textMuted max-w-2xl">
            Not sure which training track is right for you? Let a coach help you choose the best starting point.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-150 hover:bg-primary hover:text-black hover:shadow-lg hover:shadow-primary/30"
          >
            Talk to a coach
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

