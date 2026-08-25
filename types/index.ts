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

export interface HeroActions {
  projects: string;
  cv: string;
  contact: string;
}

export interface HeroData {
  greeting: string;
  title: string;
  tagline: string;
  actions: HeroActions;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  web3_blockchain: string[];
  others: string[];
}

export interface SkillCategories {
  frontend: string;
  backend: string;
  web3_blockchain: string;
  others: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface AboutData {
  sectionTitle: string;
  profileTitle: string;
  languagesTitle: string;
  skillsTitle: string;
  skillCategories: SkillCategories;
  biography: string;
  skills: Skills;
  languages: Language[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ExperienceData {
  title: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string;
}

export interface EducationData {
  title: string;
  gradeLabel: string;
  items: EducationItem[];
}

export interface ProjectLinks {
  github?: string;
  deploy?: string;
}

export interface ProjectsData {
  title: string;
  description: string;

  statistics: {
    total: string;
    featured: string;
    categories: string;
  };

  search: {
    placeholder: string;
  };

  filters: {
    all: string;
  };

  labels: {
    featured: string;
  };

  list: {
    title: string;
    resultLabel: string;
  };

  emptyState: {
    title: string;
    description: string;
  };

  loadMoreLabel: string;
  itemsPerLoad: number;

  items: {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    category: string;
    links: ProjectLinks;
    thumbnail: string;
    featured: boolean;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface CertificationsData {
  title: string;
  items: CertificationItem[];
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

export interface FooterNavigationItem {
  label: string;
  href: string;
}

export interface FooterData {
  description: string;

  navigation: {
    title: string;
    items: FooterNavigationItem[];
  };

  social: {
    title: string;
    labels: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
    };
  };

  copyright: {
    text: string;
    rights: string;
  };

  builtWith: {
    text: string;
    technologies: string[];
  };
}


export interface MetadataData {
  title: string;
  description: string;
  keywords: string[];
  locale: string;
  openGraphTitle: string;
}

export interface PortfolioData {
  themeOptions: ThemeOption[];
  personalInfo: PersonalInfo;
  navbar: NavItem[];

  metadata: MetadataData;

  hero: HeroData;
  about: AboutData;
  experience: ExperienceData;
  education: EducationData;
  projects: ProjectsData;
  certifications: CertificationsData;
  contact: ContactData;
  footer: FooterData;
}
