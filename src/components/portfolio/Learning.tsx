import { Check, Container, GitBranch, Monitor, Network, Terminal, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const roadmap = [
  { title: "Linux & Command Line", description: "Getting comfortable working in the terminal and on Linux servers.", status: "In progress", icon: Terminal },
  { title: "Git & GitHub Workflows", description: "Version control and collaboration through GitHub.", status: "Done", icon: GitBranch },
  { title: "Docker & Containers", description: "Packaging applications into reproducible environments.", status: "In progress", icon: Container },
  { title: "CI/CD with GitHub Actions", description: "Automating checks and deployments on every change.", status: "Planned", icon: Workflow },
  { title: "Infrastructure as Code (Terraform)", description: "Managing cloud resources as repeatable code.", status: "Planned", icon: Network },
  { title: "Kubernetes Basics", description: "Learning how container orchestration works.", status: "Planned", icon: Container },
  { title: "Monitoring (Prometheus & Grafana)", description: "Observing systems with metrics and dashboards.", status: "Planned", icon: Monitor },
] as const;

export function Learning() {
  const completed = roadmap.filter((step) => step.status === "Done").length;

  return (
    <section id="learning" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="03 — Learning" title="My DevOps roadmap" description="Building real skills step by step. Honest progress, updated as I learn." />
        <p className="mb-6 font-mono text-sm text-accent">{completed} of {roadmap.length} completed</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {roadmap.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} className="h-full">
              <article className="glass-card flex h-full gap-4 rounded-lg p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary"><step.icon className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[11px] ${step.status === "Done" ? "border-accent/50 text-accent" : step.status === "In progress" ? "border-primary/50 text-primary" : "border-border text-muted-foreground"}`}>
                      {step.status === "Done" ? <Check className="h-3 w-3" /> : step.status === "In progress" ? <span className="h-1.5 w-1.5 rounded-full bg-primary motion-safe:animate-pulse" /> : null}
                      {step.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}