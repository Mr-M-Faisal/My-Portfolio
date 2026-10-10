import { Cloud, Code2, Database, Layers, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  {
    icon: Layers,
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    title: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "C#",
      "ADO.NET",
      "SQL Server",
      "MongoDB Atlas",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS S3", "CloudFront", "EC2", "Lambda", "DynamoDB", "Amplify"],
    learning: ["Linux", "Docker", "GitHub Actions", "Terraform", "Kubernetes", "Prometheus & Grafana", "Android Development"],
  },
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["JavaScript", "C++", "C#", "Python", "Java", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    items: ["Figma (UI/UX)", "Git", "GitHub", "Software Quality Engineering (SQA)"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I build with"
          description="A full-stack toolkit spanning modern frontends, real-time backends and AWS infrastructure."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 0.07}
              className={i === groups.length - 1 ? "sm:col-span-2" : ""}
            >
              <div className="glass-card h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                 {g.learning && <p className="mt-5 font-mono text-xs text-accent">Hands-on</p>}
                 <ul className={`${g.learning ? "mt-3" : "mt-5"} flex flex-wrap gap-2`}>
                  {g.items.map((it) => (
                    <li key={it} className="chip font-mono">
                      {it}
                    </li>
                  ))}
                </ul>
                 {g.learning && (
                   <>
                     <p className="mt-6 font-mono text-xs text-accent">Currently learning</p>
                     <ul className="mt-3 flex flex-wrap gap-2">
                       {g.learning.map((it) => (
                         <li key={it} className="chip border-dashed border-accent/50 text-accent/90 font-mono">
                           {it}
                         </li>
                       ))}
                     </ul>
                   </>
                 )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
