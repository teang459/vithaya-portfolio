"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
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

const AI_TOOLS = ["ChatGPT", "Claude", "Gemini", "Canva AI"] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left — stylized typographic statement card */}
        <motion.div variants={item} className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-10 sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl"
            />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Profile
            </p>
            <p className="mt-6 text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
              Marketing communicator,{" "}
              <span className="text-brand-red">technologist</span>, and global
              storyteller.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Based in Vientiane Capital, Laos, globally minded — turning
              AI-accelerated ideas into measurable brand momentum.
            </p>
          </div>
        </motion.div>

        {/* Right — narrative profile */}
        <div className="order-1 lg:order-2">
          <motion.h2
            id="about-heading"
            variants={item}
            className="text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-lg leading-relaxed text-muted"
          >
            I hold a{" "}
            <span className="font-medium text-foreground">
              Master&apos;s in Management (International Marketing)
            </span>{" "}
            and a{" "}
            <span className="font-medium text-foreground">
              Bachelor&apos;s in Infocommunication Technologies and Communication
              Systems
            </span>
            {" "}— a dual foundation that lets me move fluently between brand
            strategy and the systems that bring it to life.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-lg leading-relaxed text-muted"
          >
            My path runs from an{" "}
            <span className="font-medium text-foreground">
              internship at the Embassy of the Lao PDR in Moscow
            </span>{" "}
            and a grounding in{" "}
            <span className="font-medium text-foreground">customer service</span>{" "}
            at Maxim Laos to my role as{" "}
            <span className="font-medium text-foreground">
              MarCom Officer at Souphattra Hotel in Vientiane
            </span>
            , where I shape campaigns, voice, and guest experience across
            channels.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-lg leading-relaxed text-muted"
          >
            Day to day, I lean on AI platforms like{" "}
            {AI_TOOLS.map((tool, i) => (
              <span key={tool}>
                <span className="font-medium text-foreground">{tool}</span>
                {i < AI_TOOLS.length - 2
                  ? ", "
                  : i === AI_TOOLS.length - 2
                    ? ", and "
                    : ""}
              </span>
            ))}{" "}
            to accelerate marketing workflows — every output paired with careful
            human review.
          </motion.p>

          {/* AI toolkit chips */}
          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-2.5"
            aria-label="AI tools I work with"
          >
            {AI_TOOLS.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand-red/40 hover:text-brand-red"
              >
                {tool}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
