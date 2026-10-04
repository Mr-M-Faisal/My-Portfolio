import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Learning" },
  { href: "#projects", label: "Projects" },
  { href: "#log", label: "Log" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the active section while scrolling
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape to close + lock background scroll while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close when tapping outside the menu
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const linkClass = (href: string, base: string) =>
    `${base} ${active === href ? "!text-foreground bg-white/8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent)]" : ""}`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4"
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      <div ref={menuRef} className="relative w-full max-w-5xl">
        <nav
          aria-label="Main navigation"
          className={`flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled || open
              ? "border border-border/70 bg-background/70 shadow-[var(--shadow-card)] backdrop-blur-xl"
              : "border border-transparent"
          }`}
        >
          <a href="#top" className="font-display text-sm font-bold tracking-tight">
            MF<span className="text-primary">.</span>
          </a>
          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  className={linkClass(l.href, "nav-link px-2.5 py-1.5 text-sm")}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--glow)_70%,transparent)] sm:inline-flex lg:inline-flex"
            >
              Hire me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile / tablet menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-border/70 bg-background/90 p-3 shadow-[var(--shadow-card)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={linkClass(
                    l.href,
                    "nav-link flex min-h-11 items-center px-4 py-2.5 text-sm",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
