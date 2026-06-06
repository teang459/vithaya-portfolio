"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

const LANGUAGES = [
  { name: "Lao", level: "Native", value: 100 },
  { name: "Thai", level: "Fluent", value: 92 },
  { name: "English", level: "Intermediate", value: 65 },
  { name: "Russian", level: "Intermediate", value: 60 },
] as const;

export default function Languages() {
  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
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
          Communication
        </motion.span>
        <motion.h2
          id="languages-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Languages
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {LANGUAGES.map((lang) => (
            <motion.div
              key={lang.name}
              variants={item}
              className="group rounded-3xl border border-border bg-foreground/[0.02] p-7 transition-colors hover:border-brand-red/30"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {lang.name}
                </h3>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-brand-red/40 group-hover:text-brand-red">
                  {lang.level}
                </span>
              </div>
              {/* Proficiency rail */}
              <div
                className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-border"
                role="meter"
                aria-valuenow={lang.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${lang.name} proficiency: ${lang.level}`}
              >
                <motion.span
                  className="block h-full rounded-full bg-brand-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.value}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
