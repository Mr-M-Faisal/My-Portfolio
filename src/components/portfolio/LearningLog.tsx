import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

// PLACEHOLDER: replace with my real notes
const entries: { date: string; title: string; summary: string; tags: string[]; url?: string }[] = [
  { date: "Coming soon", title: "Understanding Docker images vs containers", summary: "Notes on the building blocks of containerized applications.", tags: ["Docker", "Basics"] },
  { date: "Coming soon", title: "My first GitHub Actions workflow", summary: "What goes into automating a build and deployment pipeline.", tags: ["CI/CD", "GitHub Actions"] },
  { date: "Coming soon", title: "Why Infrastructure as Code matters", summary: "Exploring repeatable infrastructure and cloud workflows.", tags: ["Terraform", "AWS"] },
];

export function LearningLog() {
  return (
    <section id="log" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="05 — Learning Log" title="What I'm learning, in public" description="Short notes from my DevOps journey: what I tried, what broke, and what I learned." />
        <div className="grid gap-5 md:grid-cols-3">
          {entries.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08} className="h-full">
              <article className="glass-card flex h-full flex-col rounded-lg p-6">
                <span className="font-mono text-xs text-accent">{entry.date}</span>
                <h3 className="mt-3 text-lg font-semibold">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{entry.tags.map((tag) => <li key={tag} className="chip font-mono">{tag}</li>)}</ul>
                {entry.url && <a href={entry.url} className="mt-auto inline-flex items-center gap-1 pt-6 text-sm text-accent hover:underline">Read more <ArrowUpRight className="h-4 w-4" /></a>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}