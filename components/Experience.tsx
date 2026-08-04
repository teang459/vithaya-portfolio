"use client";

import { motion, type Variants } from "framer-motion";

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

const ROLES = [
  {
    title: "Marcom Officer",
    org: "Souphattra Hotel · Vientiane, Laos",
    period: "April 2025 – Present",
    summary:
      "Driving integrated marketing communication strategies that strengthen brand awareness and grow direct bookings.",
    points: [
      "Develop and execute integrated MarCom strategies grounded in market and competitor research",
      "Plan, create, and manage Facebook content aligned to brand identity and campaign goals",
      "Design and run Mailchimp email campaigns with audience segmentation and performance analytics",
      "Maintain the WordPress website with SEO-optimised pages and seasonal promotional landing pages",
      "Optimise OTA listings, photography, and descriptions across Booking.com, Agoda, and Expedia",
      "Prepare monthly marketing reports and use AI tools (ChatGPT, Claude, Gemini, Canva AI) with human review",
    ],
  },
  {
    title: "Customer Service Executive",
    org: "Maxim Laos Co., Ltd · Vientiane, Laos",
    period: "August 2024 – March 2025",
    summary:
      "Owned customer support and operational quality for a ride-hailing platform.",
    points: [
      "Resolved customer inquiries across phone, chat, and email, handling complex complaints with care",
      "Worked in CRM software to update client records, track inquiries, and streamline support",
      "Monitored app performance and supported drivers directly with troubleshooting",
      "Translated app content and documents from English and Russian into Lao (AI-assisted, human-reviewed)",
      "Prepared regular reports and represented the company at promotional events",
    ],
  },
  {
    title: "Intern",
    org: "Embassy of the Lao PDR · Moscow, Russia",
    period: "February 2024 – May 2024",
    summary:
      "Supported diplomatic communications and economic reporting.",
    points: [
      "Handled official correspondence and worked with diplomatic documents and notes",
      "Translated news into Lao and wrote weekly summaries and reports on the Lao economy",
      "Researched international trade and drafted official correspondence",
      "Participated in the work and events of the embassy",
    ],
  },
] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
          Journey
        </motion.span>
        <motion.h2
          id="experience-heading"
          variants={item}
          className="mt-4 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Experience
        </motion.h2>

        {/* Timeline track */}
        <ol className="mt-14 relative">
          {/* Vertical rail */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          />
          {ROLES.map((role) => (
            <motion.li
              key={role.title}
              variants={item}
              className="relative pl-10 pb-12 last:pb-0"
            >
              {/* Node */}
              <span
                aria-hidden
                className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-brand-red bg-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {role.title}
                </h3>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  {role.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand-red">
                {role.org}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                {role.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-red"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
