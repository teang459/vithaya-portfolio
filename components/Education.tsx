"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
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

const DEGREES = [
  {
    degree: "Master of Management (International Marketing)",
    field: "Peoples' Friendship University of Russia (RUDN) · Moscow",
    period: "Sep 2022 – Jun 2024",
    note: "GPA 4.88 / 5.0 · Graduated with Honours",
    detail:
      "Advanced study of global brand strategy, cross-border consumer behaviour, and integrated marketing communications.",
  },
  {
    degree: "Bachelor of Infocommunication Technologies and Communication Systems",
    field:
      "Moscow Technical University of Communications and Informatics (MTUCI)",
    period: "Sep 2018 – Jun 2022",
    note: "Major: Software-Protected Infocommunications",
    detail:
      "Cryptography, information security, and secure system software — the technical literacy behind the marketing work.",
  },
  {
    degree: "Preparatory Faculty",
    field: "Moscow Automobile and Road Construction University (MADI)",
    period: "Oct 2017 – Jun 2018",
    note: "Letter of commendation from the Ambassador Plenipotentiary of the Lao PDR in the Russian Federation",
    detail:
      "Russian-language and foundational studies in preparation for university in Russia.",
  },
] as const;

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
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
          Academics
        </motion.span>
        <motion.h2
          id="education-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Education
        </motion.h2>

        {/* Timeline track */}
        <ol className="mt-14 relative">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          />
          {DEGREES.map((entry) => (
            <motion.li
              key={entry.degree}
              variants={item}
              className="relative pl-10 pb-12 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-brand-red bg-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex items-start gap-2">
                  <GraduationCap
                    size={18}
                    strokeWidth={1.75}
                    className="mt-1 shrink-0 text-brand-red"
                  />
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {entry.degree}
                  </h3>
                </div>
                <span className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-muted sm:pt-1">
                  {entry.period}
                </span>
              </div>
              <p className="mt-2 pl-7 text-sm font-medium text-brand-red">
                {entry.field}
              </p>
              <p className="mt-2 pl-7 text-sm font-medium text-foreground">
                {entry.note}
              </p>
              <p className="mt-3 max-w-2xl pl-7 text-base leading-relaxed text-muted">
                {entry.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
