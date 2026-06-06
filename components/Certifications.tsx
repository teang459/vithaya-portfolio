"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Plus } from "lucide-react";

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
    title: "Digital Marketing",
    note: "Performance & paid social fundamentals",
    status: "In progress",
  },
  {
    title: "AI Tools & Prompting",
    note: "Applied generative AI for content & strategy",
    status: "In progress",
  },
  {
    title: "Content & SEO",
    note: "Search-driven content production",
    status: "Planned",
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
          Credentials
        </motion.span>
        <motion.h2
          id="certifications-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Certifications
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
        >
          A growing set of professional certificates in digital marketing and AI
          tools — completed and upcoming.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-dashed border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/40"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand-red">
                  <Award size={20} strokeWidth={1.75} />
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted">
                  {cert.status}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cert.note}
              </p>
            </motion.div>
          ))}

          {/* Add-more placeholder */}
          <motion.div
            variants={item}
            className="flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-dashed border-border p-8 text-center text-muted"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
              <Plus size={20} strokeWidth={1.75} />
            </span>
            <p className="mt-4 text-sm">More certifications on the way</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
