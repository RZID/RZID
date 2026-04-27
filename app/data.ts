import type { Experience, Skill, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export const SKILLS: Skill[] = [
  { label: "JavaScript & TypeScript", level: 95 },
  { label: "NestJS / ExpressJS / Node.js", level: 95 },
  { label: "Next.js / React / RN", level: 92 },
  { label: "REST API / Microservices", level: 90 },
  { label: "Linux / SysAdmin", level: 85 },
  { label: "SQL Databases", level: 85 },
  { label: "RabbitMQ / Redis", level: 82 },
  { label: "AWS / Docker", level: 80 },
];

export const SKILL_TAGS: string[] = [
  "Node.js",
  "TypeScript",
  "NestJS",
  "React",
  "React Native",
  "Next.js",
  "Redis",
  "RabbitMQ",
  "Docker",
  "AWS",
  "Linux",
  "PostgreSQL",
  "MySQL",
  "REST API",
  "Microservices",
  "Expo",
  "Git",
  "CI/CD",
  "Nginx",
  "PM2",
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    company: "Embreo PTE Ltd",
    period: "Sep 2021 – Present",
    tag: "Full-Time",
    bullets: [
      "Architected scalable microservices using Next.js, NestJS, TypeScript, and Node.js",
      "Developed cross-platform apps with React.js and React Native (Expo)",
      "Optimized system performance via RabbitMQ (messaging) and Redis (caching)",
      "Managed AWS and Linux-based deployments for 24/7 infrastructure uptime",
    ],
  },
  {
    title: "Technical Mentor & Systems Consultant",
    company: "SMK Negeri 12 Jakarta",
    period: "Jun 2021 – Present",
    tag: "Consulting",
    bullets: [
      "Mentored students in modern web/mobile development for national certifications",
      "Managed school servers and optimized network availability for 24/7 uptime",
      "Provided hands-on guidance on server configuration and production-standard maintenance",
    ],
  },
  {
    title: "Software Engineer",
    company: "Freelance",
    period: "Aug 2019 – Feb 2020",
    tag: "Freelance",
    bullets: [
      "Developed and deployed customized web apps using PHP (CodeIgniter) and MySQL",
      "Managed end-to-end delivery from database design to frontend implementation",
      "Collaborated directly with clients to translate requirements into production-ready websites",
    ],
  },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "rdhanurzid@gmail.com",
    href: "mailto:rdhanurzid@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/RZID",
    href: "https://github.com/RZID",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rama-ramadhanu",
    href: "https://www.linkedin.com/in/rama-ramadhanu/",
  },
  { label: "Website", value: "rzidinc.com", href: "https://www.rzidinc.com" },
];
