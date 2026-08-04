"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Star, FileCheck } from "lucide-react";

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

const CERTS = [
  {
    title: "Vice President — Lao Student Association in Moscow",
    note: "Elected student leadership role coordinating community events and members.",
    status: "Leadership",
    period: "2022 – 2024",
    icon: Star,
  },
  {
    title: "Letter of Commendation",
    note: "Awarded by the Ambassador Plenipotentiary of the Lao PDR in the Russian Federation.",
    status: "Commendation",
    period: "MADI · 2018",
    icon: Award,
  },
  {
    title: "Certificate of Completion",
    note: "Additional general-education program for pre-university training of foreign citizens.",
    status: "Certificate",
    period: "MADI · 2017 – 2018",
    icon: FileCheck,
  },
] as const;

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
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
          Recognition
        </motion.span>
        <motion.h2
          id="certifications-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Achievements & Credentials
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Leadership, recognition, and credentials earned across seven years of
          study and work in Russia and Laos.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={item}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand-red">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted">
                    {cert.status}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cert.note}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {cert.period}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
