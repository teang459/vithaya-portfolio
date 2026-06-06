"use client";

import { motion, type Variants } from "framer-motion";
import { Megaphone, Palette, Users } from "lucide-react";

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

const GROUPS = [
  {
    title: "Marketing & Web",
    icon: Megaphone,
    skills: [
      "WordPress",
      "Mailchimp",
      "SEO",
      "OTA Management",
      "Social Media",
      "CRM",
      "Email Marketing",
    ],
  },
  {
    title: "Design & Office",
    icon: Palette,
    skills: ["Canva", "Photoshop", "MS Office", "Google Workspace"],
  },
  {
    title: "Leadership",
    icon: Users,
    skills: ["Vice President, Lao Student Association in Moscow (2022–2024)"],
  },
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
          Capabilities
        </motion.span>
        <motion.h2
          id="skills-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          A toolkit spanning strategy, systems, and code.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-8 transition-colors hover:border-brand-red/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-red/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-brand-red">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors group-hover:border-foreground/15 group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
