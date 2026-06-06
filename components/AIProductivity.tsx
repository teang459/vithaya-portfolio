"use client";

import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Brain,
  Bot,
  Palette,
  Video,
  AudioLines,
  Code2,
  Zap,
} from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const TOOLS = [
  { name: "ChatGPT", role: "Ideation & copy", icon: Bot },
  { name: "Claude", role: "Reasoning & builds", icon: Sparkles },
  { name: "Gemini", role: "Multimodal & research", icon: Brain },
  { name: "Canva AI", role: "Design & visuals", icon: Palette },
] as const;

const WORKFLOWS = [
  { label: "Text-to-Video", icon: Video },
  { label: "Text-to-Voice", icon: AudioLines },
  { label: "AI Code Generation", icon: Code2 },
] as const;

export default function AIProductivity() {
  return (
    <section
      id="ai-productivity"
      aria-labelledby="ai-heading"
      className="relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[380px] w-[680px] rounded-full bg-brand-red/10 blur-[130px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted"
        >
          <Sparkles size={14} strokeWidth={1.75} className="text-brand-red" />
          Force Multiplier
        </motion.span>
        <motion.h2
          id="ai-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          AI-Powered Productivity
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
        >
          A coordinated stack of AI platforms I use daily, orchestrated into a
          single workflow to turn ideas into shipped marketing campaigns —
          every output paired with careful human review.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Tool grid */}
          <motion.ul
            variants={item}
            className="grid grid-cols-2 gap-4 lg:col-span-3"
            aria-label="Orchestrated AI tools"
          >
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <li
                  key={tool.name}
                  className="group flex flex-col rounded-2xl border border-border bg-foreground/[0.02] p-5 transition-colors hover:border-brand-red/30"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-brand-red transition-transform group-hover:-translate-y-0.5">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="mt-4 text-sm font-semibold text-foreground">
                    {tool.name}
                  </span>
                  <span className="mt-0.5 text-xs text-muted">{tool.role}</span>
                </li>
              );
            })}
          </motion.ul>

          {/* Metrics / workflow visualization card */}
          <motion.div
            variants={item}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-8 lg:col-span-2"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-red/10 blur-3xl"
            />
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[clamp(3rem,7vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-brand-red">
                  10x
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  <Zap size={15} strokeWidth={2} className="text-brand-red" />
                  faster
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Campaign deliveries accelerated by orchestrating AI across the
                full production pipeline.
              </p>
            </div>

            <ul className="mt-8 space-y-3" aria-label="AI-accelerated workflows">
              {WORKFLOWS.map((flow) => {
                const Icon = flow.icon;
                return (
                  <li
                    key={flow.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {flow.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
