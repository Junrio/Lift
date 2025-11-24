"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { buildBookingMailto } from "@/utils/booking";

interface ClassCardProps {
  name: string;
  description: string;
  duration: string;
  intensity: string;
  focus: string;
  index: number;
  imageUrl?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ClassCard({
  name,
  description,
  duration,
  intensity,
  focus,
  index,
  imageUrl,
}: ClassCardProps) {
  return (
    <motion.div
      className="group flex h-full flex-col rounded-2xl border border-muted bg-card/80 shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative mb-3 sm:mb-4 w-full h-32 sm:h-40 overflow-hidden rounded-t-2xl">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 md:p-6">
        <h3 className="mb-2 text-base sm:text-lg font-semibold text-textPrimary group-hover:text-white transition-colors duration-200">
          {name}
        </h3>
        <p className="text-textMuted text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          <li className="flex items-center gap-2 text-xs sm:text-sm text-textMuted">
            <span className="text-primary">•</span>
            <span>
              <span className="font-semibold">Duration:</span> {duration}
            </span>
          </li>
          <li className="flex items-center gap-2 text-sm text-textMuted">
            <span className="text-primary">•</span>
            <span>
              <span className="font-semibold">Intensity:</span> {intensity}
            </span>
          </li>
          <li className="flex items-center gap-2 text-sm text-textMuted">
            <span className="text-primary">•</span>
            <span>
              <span className="font-semibold">Focus:</span> {focus}
            </span>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href={buildBookingMailto(name)}
          className="mt-4 w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-muted px-4 py-2 text-xs font-semibold text-textPrimary transition-all duration-150 group-hover:border-primary group-hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
        >
          Book a class
        </a>
      </div>
    </motion.div>
  );
}

