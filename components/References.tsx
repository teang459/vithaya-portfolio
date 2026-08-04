"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
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

const REFERENCES = [
  {
    name: "Vilavanh Yiapoher",
    role: "Ambassador Extraordinary & Plenipotentiary",
    org: "Embassy of the Lao PDR in Moscow",
  },
  {
    name: "Somsuen Sokxay",
    role: "Chief Executive Officer",
    org: "Maxim Laos Co., Ltd",
  },
] as const;

export default function References() {
  return (
    <section
      id="references"
      aria-labelledby="references-heading"
      className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span
          variants={item}
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted"
        >
          Endorsements
        </motion.span>
        <motion.h2
          id="references-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          References
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {REFERENCES.map((ref) => (
            <motion.article
              key={ref.name}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/30"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand-red">
                <Quote size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {ref.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-red">
                {ref.role}
              </p>
              <p className="mt-1 text-sm text-muted">{ref.org}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          variants={item}
          className="mt-8 text-sm text-muted"
        >
          Full reference contact details are available on request.
        </motion.p>
      </motion.div>
    </section>
  );
}
