import { PersonalInfo } from "../../types";

import { Mail } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

interface FooterProps {
  personalInfo: PersonalInfo;
  footer: {
    description: string;

    navigation: {
      title: string;
      items: {
        label: string;
        href: string;
      }[];
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
  };
}

export function Footer({
  personalInfo,
  footer,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
  };

  const socialLinks = [
    {
      key: "github",
      href: personalInfo.socialLinks.github,
      label: footer.social.labels.github,
    },
    {
      key: "linkedin",
      href: personalInfo.socialLinks.linkedin,
      label: footer.social.labels.linkedin,
    },
    {
      key: "twitter",
      href: personalInfo.socialLinks.twitter,
      label: footer.social.labels.twitter,
    },
    {
      key: "instagram",
      href: personalInfo.socialLinks.instagram,
      label: footer.social.labels.instagram,
    },
  ] as const;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:text-left text-center">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-2xl tracking-tighter mb-4">
              DAP<span className="text-primary">.</span>
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">
              {footer.navigation.title}
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {footer.navigation.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">
              {footer.social.title}
            </h4>

            <div className="flex gap-4 mb-4">
              {socialLinks.map(
                ({ key, href, label }) => {
                  if (!href || href === "#") {
                    return null;
                  }

                  const Icon = socialIcons[key];

                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="p-2 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Icon className="h-4 w-4" />

                      <span className="sr-only">
                        {label}
                      </span>
                    </a>
                  );
                }
              )}
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Copyright & Credit */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {footer.copyright.text} {currentYear}{" "}
            {personalInfo.name}.{" "}
            {footer.copyright.rights}
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {footer.builtWith.text}{" "}

            {footer.builtWith.technologies.map(
              (technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="inline-flex items-center"
                >
                  {index > 0 && (
                    <span className="mx-1">
                      &
                    </span>
                  )}

                  <span className="text-foreground font-medium">
                    {technology}
                  </span>
                </span>
              )
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}