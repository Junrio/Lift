"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function ContactSection() {
  const contactRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rightY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <motion.section
      id="contact"
      ref={contactRef}
      className="py-20 sm:py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-[1.1fr_1.2fr] items-start">
          {/* Left info */}
          <motion.div 
            style={{ y: leftY }} 
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase">
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary leading-tight">
                Let's talk about your goals
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-textMuted max-w-md leading-relaxed">
                Have questions about memberships, training plans, or where to start? Reach out to us directly through email or Facebook Messenger.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="mailto:junriolomongo.ph@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <span className="text-lg">✉</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-textMuted uppercase tracking-wide">Email</p>
                  <p className="text-sm md:text-base font-medium text-textPrimary group-hover:text-primary transition-colors">
                    junriolomongo.ph@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+639000000000"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary/20">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-textMuted uppercase tracking-wide">Phone</p>
                  <p className="text-sm md:text-base font-medium text-textPrimary group-hover:text-secondary transition-colors">
                    +63 900 000 0000
                  </p>
                </div>
              </a>
            </div>

            <motion.div 
              style={{ y: imageY }}
              className="mt-6 overflow-hidden rounded-2xl border border-muted/50 bg-card/60 backdrop-blur-sm shadow-lg"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <Image
                  src={getImagePath("/images/contact-gym.jpg")}
                  alt="LIFT front desk and training area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="px-5 py-4 bg-card/80 backdrop-blur-sm">
                <p className="text-sm font-semibold text-textPrimary mb-1">Visit LIFT</p>
                <p className="text-xs text-textMuted leading-relaxed">Drop by the gym to see the space, meet the coaches, and try a session.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right CTA card */}
          <motion.div
            style={{ y: rightY }}
            className="w-full max-w-md rounded-2xl border border-muted/50 bg-card/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.85)] md:ml-auto"
          >
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-textPrimary mb-2 sm:mb-3">
                Get in touch
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-textMuted leading-relaxed">
                Reach us directly through email or Facebook Messenger. A LIFT coach will respond as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:junriolomongo.ph@gmail.com?subject=Inquiry%20from%20LIFT%20website"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm md:text-base font-semibold text-black shadow-lg shadow-primary/40 hover:shadow-primary/70 transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02]"
              >
                <span className="text-lg">✉</span>
                <span>Email us</span>
              </a>

              <a
                href="https://www.facebook.com/share/1CdGzavZBN/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-muted bg-transparent px-6 py-3.5 text-sm md:text-base font-semibold text-textPrimary hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02]"
              >
                <span className="text-lg">💬</span>
                <span>Message us on Facebook</span>
              </a>
            </div>

            <div className="pt-4 border-t border-muted/50">
              <p className="text-xs text-textMuted leading-relaxed">
                <span className="font-semibold text-textPrimary">💡 Tip:</span> You can also visit the gym during staffed hours to talk to a coach in person.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

