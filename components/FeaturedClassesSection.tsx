"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClassCard from "./ClassCard";

const classes = [
  {
    name: "Total Body Burn",
    description:
      "A high-intensity workout targeting every muscle group for maximum calorie burn.",
    duration: "45 min",
    intensity: "High",
    focus: "Full Body",
    imageUrl: "/images/total-body-burn.jpg",
  },
  {
    name: "Endurance Power",
    description:
      "Build cardiovascular strength and stamina with this challenging endurance session.",
    duration: "60 min",
    intensity: "High",
    focus: "Cardio",
    imageUrl: "/images/endurance-power.jpg",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle mass and increase strength with progressive resistance training.",
    duration: "50 min",
    intensity: "Medium-High",
    focus: "Muscle Building",
    imageUrl: "/images/strength-training.jpg",
  },
  {
    name: "Dynamic Workout",
    description:
      "Combine agility, speed, and power in this fast-paced functional training class.",
    duration: "40 min",
    intensity: "Medium",
    focus: "Functional",
    imageUrl: "/images/dynamic-workout.jpg",
  },
  {
    name: "Power Training",
    description:
      "Explosive movements and plyometric exercises to boost your power output.",
    duration: "45 min",
    intensity: "High",
    focus: "Power & Speed",
    imageUrl: "/images/power-training.jpg",
  },
  {
    name: "Cardio Blast",
    description:
      "Get your heart pumping with this intense cardio session designed to torch calories.",
    duration: "30 min",
    intensity: "High",
    focus: "Cardio",
    imageUrl: "/images/cardio-blast.jpg",
  },
  {
    name: "Flex and Flow Yoga",
    description:
      "Improve flexibility, balance, and mental clarity with this calming yoga practice.",
    duration: "60 min",
    intensity: "Low-Medium",
    focus: "Flexibility & Mindfulness",
    imageUrl: "/images/flex-flow-yoga.jpg",
  },
  {
    name: "Endurance Circuit Challenge",
    description:
      "Push your limits with this circuit-based workout combining strength and cardio.",
    duration: "55 min",
    intensity: "High",
    focus: "Circuit Training",
    imageUrl: "/images/endurance-circuit.jpg",
  },
];

export default function FeaturedClassesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const gridY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="classes"
      ref={containerRef}
      className="py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: sectionY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured Classes
          </h2>
          <p className="text-textMuted text-sm sm:text-base md:text-lg">
            Find your perfect workout
          </p>
        </motion.div>

        <motion.div 
          style={{ y: gridY }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {classes.map((classItem, index) => (
            <ClassCard
              key={classItem.name}
              {...classItem}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

