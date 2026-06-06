"use client";

import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Send, MapPin, Check, Phone, MessageCircle, Mail, Code2 } from "lucide-react";

const CONTACTS = [
  {
    label: "Phone",
    value: "+856 20 98783403",
    href: "tel:+8562098783403",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+7 977 807 9184",
    href: "https://wa.me/79778079184",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "Chanthasymb45@gmail.com",
    href: "mailto:Chanthasymb45@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/teang459",
    href: "https://github.com/teang459",
    icon: Code2,
  },
] as const;

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

const FIELD_CLASS =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors duration-200 outline-none hover:border-foreground/30 focus:border-brand-red focus:ring-1 focus:ring-brand-red";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No backend wired yet — surface optimistic confirmation.
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-2xl"
      >
        <motion.span
          variants={item}
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted"
        >
          Get in touch
        </motion.span>
        <motion.h2
          id="contact-heading"
          variants={item}
          className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
        >
          Contact Me
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-4 inline-flex items-center gap-2 text-base text-muted"
        >
          <MapPin size={16} strokeWidth={1.75} className="text-brand-red" />
          Vientiane Capital, Laos — open to global collaboration.
        </motion.p>

        {/* Direct contact channels */}
        <motion.ul
          variants={item}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          aria-label="Direct contact channels"
        >
          {CONTACTS.map((contact) => {
            const Icon = contact.icon;
            return (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-foreground/[0.02] px-4 py-3 transition-colors hover:border-brand-red/30"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-muted">
                      {contact.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground transition-colors group-hover:text-brand-red">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </motion.ul>

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={FIELD_CLASS}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className={FIELD_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Send a message from Laos to anywhere — let's talk."
              className={`${FIELD_CLASS} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-red/90 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red disabled:opacity-80 sm:w-auto"
          >
            {sent ? (
              <>
                <Check size={16} strokeWidth={2} />
                Message sent
              </>
            ) : (
              <>
                Send Message
                <Send
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </>
            )}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
