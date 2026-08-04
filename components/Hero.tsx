"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import portrait from "@/public/vithaya.png";

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
  const reduceMotion = useReducedMotion();

  // Continuous, weightless float for the portrait — disabled when the user
  // prefers reduced motion.
  const float = reduceMotion
    ? {}
    : {
        y: [0, -14, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Soft brand glow — premium, restrained backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-red/10 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-8 lg:py-28"
      >
        {/* ── Text column ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
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
            className="mt-8 max-w-4xl text-balance text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
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
        </div>

        {/* ── Portrait column ───────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="relative mx-auto flex min-h-[480px] w-full max-w-[760px] items-end justify-center self-stretch lg:min-h-0 lg:max-w-none"
        >
          {/* Animated glow disc behind the figure */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-red/25 via-brand-red/10 to-transparent blur-3xl"
            animate={
              reduceMotion
                ? {}
                : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Soft rotating ring for subtle depth */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-brand-red/15"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* The portrait — gently floating, sized to match the text block */}
          <motion.div
            animate={float}
            className="absolute inset-0 flex items-end justify-center"
          >
            <Image
              src={portrait}
              alt="Vithaya Chanthasy holding his diploma"
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 95vw, 600px"
              className="h-full w-auto max-w-full select-none object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating accent badge — Master's */}
          <motion.div
            className="absolute left-2 top-12 hidden rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-left shadow-lg backdrop-blur-md sm:block lg:left-0"
            animate={reduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs font-semibold text-foreground">
              Master&apos;s in Management
            </p>
            <p className="text-[11px] text-muted">International Marketing</p>
          </motion.div>

          {/* Floating accent badge — AI */}
          <motion.div
            className="absolute bottom-24 right-0 hidden rounded-2xl border border-border bg-background/70 px-4 py-2.5 text-left shadow-lg backdrop-blur-md sm:block"
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <p className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              AI-Accelerated
            </p>
            <p className="text-[11px] text-muted">Human-reviewed workflows</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
