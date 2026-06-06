import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/teang459" },
  { label: "Email", href: "mailto:Chanthasymb45@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/79778079184" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-base font-semibold tracking-tight text-foreground">
              Vithaya Chanthasy
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Marketing communications professional · Vientiane Capital, Laos.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted">
              Connect
            </h2>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-brand-red"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            &copy; {year} Vithaya Chanthasy. All rights reserved.
          </p>
          <p className="text-xs text-muted">Designed with restraint.</p>
        </div>
      </div>
    </footer>
  );
}
