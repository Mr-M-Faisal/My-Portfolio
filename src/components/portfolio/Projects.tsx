import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

type Project = { title: string; description: string; tech: string[]; status: "Completed" | "In Progress" | "Planned"; category: "featured" | "devops"; liveUrl?: string; repoUrl?: string };

const projects: Project[] = [
  {
    title: "Smart Public Transit Tracking System (FYP)",
    description:
      "Cloud-native Progressive Web Application for real-time transit tracking and updates.",
    tech: ["Next.js", "React", "Node.js", "Socket.IO", "MongoDB Atlas", "AWS Cloud"],
    status: "Completed", category: "featured", repoUrl: "https://github.com/Mr-M-Faisal",
  },
  {
    title: "Internet Speed Test Tool",
    description:
      "Desktop & CLI application for measuring ping, network speed, and ISP details.",
    tech: ["Java", "C++", "Networking Protocols"],
    status: "Completed", category: "featured", repoUrl: "https://github.com/Mr-M-Faisal",
  },
  {
    title: "Full-Stack E-Commerce Interface",
    description:
      "Responsive web app featuring database integration, custom UI design, and backend Web APIs.",
    tech: ["React.js", "C#", "ADO.NET", "SQL Server", "REST API"],
    status: "Completed", category: "featured", repoUrl: "https://github.com/Mr-M-Faisal",
  },
  // PLACEHOLDER: replace with real project details when completed
  { title: "Dockerized Full-Stack App", description: "Containerizing my React + Node.js + MongoDB app with Docker and docker-compose for consistent local and cloud environments.", tech: ["Docker", "docker-compose", "Node.js", "MongoDB"], status: "In Progress", category: "devops" },
  { title: "CI/CD Pipeline with GitHub Actions", description: "Automated test, build, and deploy pipeline pushing every commit to AWS.", tech: ["GitHub Actions", "AWS S3", "CloudFront", "EC2"], status: "Planned", category: "devops" },
  { title: "Infrastructure as Code on AWS", description: "Provisioning a VPC, EC2, and S3 environment with Terraform, reproducible with a single command.", tech: ["Terraform", "AWS", "VPC", "EC2"], status: "Planned", category: "devops" },
  { title: "Monitoring & Alerting Dashboard", description: "Monitoring a deployed app with metrics dashboards and automated alerts.", tech: ["Prometheus", "Grafana", "CloudWatch"], status: "Planned", category: "devops" },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
        <span className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${p.status === "Completed" ? "border-accent/50 text-accent" : p.status === "In Progress" ? "border-primary/50 text-primary" : "border-border text-muted-foreground"}`}>{p.status}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold transition-colors duration-300 group-hover:text-accent">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip font-mono !text-xs">{t}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105">Live Demo <ArrowUpRight className="h-3.5 w-3.5" /></a>}
          {p.repoUrl ? <a href={p.repoUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"><Github className="h-3.5 w-3.5" /> GitHub</a> : <span aria-disabled="true" className="inline-flex flex-1 cursor-not-allowed items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground opacity-60">Coming soon</span>}
        </div>
      </article>
    </Reveal>
  );
}

function GithubActivity() {
  const [failed, setFailed] = useState(false);
  return (
    <Reveal className="mt-12">
      <a href="https://github.com/Mr-M-Faisal" target="_blank" rel="noreferrer" className="glass-card block rounded-lg p-6">
        <div className="flex items-center gap-2 text-lg font-semibold"><Github className="h-5 w-5 text-accent" /> GitHub Activity <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" /></div>
        {!failed && <img src="https://ghchart.rshah.org/Mr-M-Faisal" alt="Muhammad Faisal's GitHub contribution graph" loading="lazy" onError={() => setFailed(true)} className="mt-5 max-w-full" />}
        {failed && <p className="mt-3 text-sm text-muted-foreground">View activity on GitHub</p>}
      </a>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Featured work"
          description="Selected builds that combine real-time systems, clean interfaces and cloud infrastructure."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.filter((p) => p.category === "featured").map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
        <h3 className="mt-16 mb-6 text-2xl font-semibold">DevOps Projects (In Progress)</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.filter((p) => p.category === "devops").map((p, i) => <ProjectCard key={p.title} p={p} i={i + 3} />)}
        </div>
        <GithubActivity />
      </div>
    </section>
  );
}
