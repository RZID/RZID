export interface Experience {
  title: string;
  company: string;
  period: string;
  tag: string;
  bullets: string[];
}

export interface Skill {
  label: string;
  level: number;
}

export interface NavLink {
  label: string;
  to: string;
}
