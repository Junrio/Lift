"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "500+", label: "Active Members" },
  { value: "100+", label: "Classes Weekly" },
  { value: "90+", label: "Satisfaction Rate" },
];

const metricVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function MetricsStrip() {
  const metricsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: metricsRef,
    offset: ["start end", "end start"],
  });

  const stripY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <motion.section 
      ref={metricsRef}
      style={{ y: stripY }}
      className="border-y border-muted/30 bg-black/20 py-6 sm:py-8"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={metricVariants}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-textMuted">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

