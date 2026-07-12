export interface ThemeOption {
  label: string;
  value: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  freelanceStatus: string;
  cvLink: string;
  socialLinks: SocialLinks;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  title: string;
  tagline: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  ai_tools: string[];
  others: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface AboutData {
  biography: string;
  skills: Skills;
  languages: Language[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string;
}

export interface ProjectLinks {
  github?: string;
  deploy?: string; // Opsional jika proyek backend-only / belum dideploy
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  links: ProjectLinks;
  thumbnail: string;
  featured: boolean;
}

export interface CertificationData {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ContactButton {
  label: string;
  url?: string;
  type?: "email";
}

export interface ContactData {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  availability: string;
  primaryButton: ContactButton;
  secondaryButton?: ContactButton;
}

export interface PortfolioData {
  themeOptions: ThemeOption[];
  personalInfo: PersonalInfo;
  navbar: NavItem[];
  hero: HeroData;
  about: AboutData;
  experience: ExperienceData[];
  education: EducationData[];
  projects: ProjectData[];
  certifications: CertificationData[];
  contact: ContactData;
}