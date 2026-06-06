"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Staggered fade-in: each child rises and fades in sequence once the
 * parent enters the viewport. Respects reduced-motion via the global CSS reset.
 */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Soft brand glow — premium, restrained backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-red/10 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-[1200px] flex-col items-center px-6 py-28 text-center lg:px-8 lg:py-40"
      >
        {/* Eyebrow */}
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          Marketing Communications · AI-Accelerated
        </motion.span>

        {/* Headline — Apple-style display typography */}
        <motion.h1
          id="hero-heading"
          variants={item}
          className="mt-8 max-w-4xl text-balance text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
        >
          Marketing communications, built on a{" "}
          <span className="text-brand-red">
            technologist&apos;s foundation.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
        >
          I&apos;m Vithaya Chanthasy — a Marketing Communications professional
          with a Master&apos;s in Management (International Marketing) and a
          background in infocommunication systems. I use AI platforms daily to
          accelerate marketing workflows, always paired with human review.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          variants={item}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            View Projects
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/[0.04]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
