import { PersonalInfo } from "../../types";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:text-left text-center">
          
          {/* Bagian Brand & Ringkasan */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-2xl tracking-tighter mb-4">
              DAP<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Membangun aplikasi web yang scalable dan mengintegrasikan kecerdasan buatan untuk masa depan.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Tentang Saya</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Pengalaman</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Proyek</a></li>
            </ul>
          </div>

          {/* Kontak & Sosial Media */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-4">Mari Terhubung</h4>
            <div className="flex gap-4 mb-4">
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="p-2 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <FaGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <FaLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {personalInfo.socialLinks.twitter && (
                <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <FaTwitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
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

        {/* Hak Cipta & Credit */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <span className="text-foreground font-medium">Next.js</span> & <span className="text-foreground font-medium">shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
}