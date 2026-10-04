import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4">
      <nav
         className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
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
              <a href={l.href} className="nav-link px-2.5 py-1.5 text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--glow)_70%,transparent)]"
        >
          Hire me
        </a>
      </nav>
       <div className="w-full max-w-5xl overflow-x-auto rounded-full border border-border/70 bg-background/85 px-2 py-1.5 backdrop-blur-xl lg:hidden">
         <ul className="flex min-w-max items-center justify-center gap-0.5">
           {links.map((l) => (
             <li key={l.href}>
               <a href={l.href} className="nav-link block px-2.5 py-1 text-xs">
                 {l.label}
               </a>
             </li>
           ))}
         </ul>
       </div>
    </header>
  );
}
