<div align="center">

# Muhammad Faisal — Developer Portfolio

**Software Engineering Student · Full-Stack & Cloud Developer**

Building modern, scalable web applications with Next.js, Node.js, and AWS Cloud.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TanStack Start](https://img.shields.io/badge/TanStack_Start-SSR-FF4154)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

</div>

---

## About

This is my personal portfolio website. I'm a Software Engineering (BSSE) student at **NUML University, Faisalabad Campus**, focused on **Full-Stack Web Development** and **Cloud Computing (AWS)**. I'm also learning Android development and always exploring new ideas.

The site presents my skills, projects, education, and my public **DevOps learning journey**, with honest statuses (Completed / In Progress / Planned) instead of inflated claims.

🔗 **Live Demo:** _add your deployed link here_

## Sections

| Section | What it shows |
|---------|---------------|
| **Hero** | Name, role, tagline, "View My Work" and "Download CV" buttons |
| **About** | Short bio and focus areas |
| **Skills** | Tech badges grouped by category (no percentage bars) |
| **Learning** | DevOps roadmap: Linux, Git, Docker, CI/CD, Terraform, Kubernetes, Monitoring |
| **Projects** | Featured projects plus DevOps projects, with live GitHub activity graph |
| **Learning Log** | Short public notes from my learning journey |
| **Education** | BSSE at NUML Faisalabad |
| **Contact** | Email button and GitHub / LinkedIn links |

## Featured Projects

1. **Smart Public Transit Tracking System (FYP)** – Cloud-native Progressive Web App for real-time transit tracking. _Next.js, React, Node.js, Socket.IO, MongoDB Atlas, AWS_
2. **Internet Speed Test Tool** – Desktop & CLI app measuring ping, speed, and ISP details. _Java, C++, Networking Protocols_
3. **Full-Stack E-Commerce Interface** – Responsive web app with database integration and backend Web APIs. _React.js, C#, ADO.NET, SQL Server, REST API_

**DevOps projects in progress / planned:** Dockerized full-stack app, CI/CD with GitHub Actions, Infrastructure as Code with Terraform on AWS, and a Prometheus/Grafana monitoring dashboard.

## Tech Stack

- **Framework:** TanStack Start + TanStack Router (SSR) on React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui (Radix UI), `tw-animate-css`
- **Animation:** Motion
- **Icons:** Lucide React
- **Forms/Validation:** React Hook Form, Zod
- **Tooling:** Vite, ESLint, Prettier, Bun/npm

## Project Structure

```
My-Portfolio/
├── public/                  # favicon, robots.txt, profile image
├── src/
│   ├── components/
│   │   ├── portfolio/       # Hero, About, Skills, Learning, Projects,
│   │   │                    # LearningLog, Education, Contact, Nav, Background
│   │   └── ui/              # shadcn/ui components
│   ├── routes/              # File-based routes (index.tsx, __root.tsx)
│   ├── hooks/
│   ├── lib/
│   └── styles.css
├── vite.config.ts
└── package.json
```

## Getting Started

**Prerequisites:** Node.js 20+ (or Bun)

```bash
# 1. Clone the repository
git clone https://github.com/Mr-M-Faisal/My-Portfolio.git
cd My-Portfolio

# 2. Install dependencies
npm install        # or: bun install

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build
npm run preview
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Customizing

- **Projects:** edit the `projects` array in `src/components/portfolio/Projects.tsx` (add `liveUrl` / `repoUrl`).
- **Roadmap:** edit `src/components/portfolio/Learning.tsx`.
- **Learning notes:** edit `src/components/portfolio/LearningLog.tsx`.
- **Profile image:** replace `public/faisal.png`.

## Roadmap

- [x] Responsive layout for mobile, tablet, and desktop
- [x] DevOps learning roadmap and learning log
- [x] GitHub activity graph
- [ ] Add live demo and repo links for each project
- [ ] Publish real learning-log entries
- [ ] Add Android development projects
- [ ] Deploy CI/CD pipeline for this site

## Contact

- 📧 Email: [mfaisalking68@gmail.com](mailto:mfaisalking68@gmail.com)
- 💼 LinkedIn: [Muhammad Faisal](https://www.linkedin.com/in/muhammad-faisal-715080338/)
- 🐙 GitHub: [@Mr-M-Faisal](https://github.com/Mr-M-Faisal)

---

<div align="center">

© 2026 Muhammad Faisal. All rights reserved.

</div>
