"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, FileText, ArrowUpRight } from "lucide-react";

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

const PROJECTS = [
  {
    title: "Plant Stock Manager",
    stack: ["JavaScript", "TypeScript", "PostgreSQL"],
    summary:
      "Inventory and stock management with database-backed CRUD operations.",
    url: "https://claude-stock-two.vercel.app/",
  },
  {
    title: "Spend-Wise (v2)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary: "Modern React rebuild of the expense tracker.",
    url: "https://spend-wise-phi-tawny.vercel.app/",
  },
  {
    title: "Spendwise Expense Tracker",
    stack: ["Vanilla JS", "HTML5", "CSS3", "LocalStorage"],
    summary: "Full CRUD personal-finance app.",
    url: "https://teang459.github.io/SSpendwise/",
  },
  {
    title: "Souphattra Signage Studio",
    stack: ["HTML5", "CSS3", "JavaScript"],
    summary: "Event direction signage tool for Souphattra Hotel.",
    url: "https://teang459.github.io/souphattra-signage-studio/",
  },
] as const;

const PAPERS = [
  {
    title: "Beerlao: Tourism & Beer Exports in Laos",
    status: "Published",
    summary:
      "How tourism drives Beerlao's exports — correlating tourist inflows with export growth and recommending strategies to strengthen the brand in international markets.",
  },
  {
    title:
      "Environmental Impact & Marketing Communication in the USA Cannabis Market",
    status: "Research",
    summary:
      "Analysing the environmental footprint and marketing communication patterns of the US cannabis market, balancing eco-responsibility with effective outreach.",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.span
          variants={item}
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted"
        >
          Selected Work
        </motion.span>
        <motion.h2
          id="projects-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Projects & Research
        </motion.h2>

        {/* Web Development */}
        <motion.h3
          variants={item}
          className="mt-14 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted"
        >
          <Code2 size={16} strokeWidth={1.75} className="text-brand-red" />
          Web Development · AI-Assisted Builds
        </motion.h3>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/30"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-red/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h4>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  aria-hidden
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-red"
                />
              </div>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-foreground/15 group-hover:text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>

        {/* Research Papers */}
        <motion.h3
          variants={item}
          className="mt-16 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted"
        >
          <FileText size={16} strokeWidth={1.75} className="text-brand-red" />
          Research Papers
        </motion.h3>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PAPERS.map((paper) => (
            <motion.article
              key={paper.title}
              variants={item}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/30"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-brand-red">
                  <FileText size={20} strokeWidth={1.75} />
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted transition-colors group-hover:border-brand-red/40 group-hover:text-brand-red">
                  {paper.status}
                </span>
              </div>
              <h4 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-foreground">
                {paper.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {paper.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
