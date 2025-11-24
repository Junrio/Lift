"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Member since 2023",
    text: "LIFT transformed my fitness journey. The trainers are incredible and the community is so supportive.",
  },
  {
    name: "Marcus Johnson",
    role: "Strength Training",
    text: "Best gym I've ever been to. The programs are structured and the results speak for themselves.",
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga & Mobility",
    text: "I love the variety of classes. From high-intensity to recovery, LIFT has everything I need.",
  },
];

const testimonialVariants = {
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

export default function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: testimonialsRef,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <motion.section
      id="testimonials"
      ref={testimonialsRef}
      className="py-20 sm:py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: sectionY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-3 sm:mb-4">
            What our members say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-textMuted">
            Real stories from the LIFT community
          </p>
        </motion.div>

        <motion.div 
          style={{ y: cardsY }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-muted bg-card/80 p-4 sm:p-5 md:p-6 shadow-sm"
            >
              <p className="text-textMuted mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-textPrimary">{testimonial.name}</p>
                <p className="text-sm text-textMuted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

