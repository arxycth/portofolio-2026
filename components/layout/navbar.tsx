"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { NavItem, PersonalInfo, ThemeOption } from "../../types";
// IMPORT buttonVariants DITAMBAHKAN DI SINI
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sun,
  Moon,
  Palette,
  Menu,
  X,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface NavbarProps {
  navItems: NavItem[];
  themeOptions: ThemeOption[];
  personalInfo: PersonalInfo;
}

export function Navbar({ navItems, themeOptions, personalInfo }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeColorTheme, setActiveColorTheme] =
  useState("default");

  // Mencegah hydration mismatch & mendeteksi scroll untuk efek glassmorphism
  useEffect(() => {
    setMounted(true);

    const savedColorTheme =
      localStorage.getItem("color-theme") ||
      "default";

    if (savedColorTheme !== "default") {
      document.documentElement.classList.add(
        savedColorTheme
      );
    }

    setActiveColorTheme(savedColorTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Fungsi DINAMIS untuk mengganti tema warna
  const changeColorTheme = (
    themeValue: string
  ) => {
    themeOptions.forEach((t) => {
      if (t.value !== "default") {
        document.documentElement.classList.remove(
          t.value
        );
      }
    });

    if (themeValue !== "default") {
      document.documentElement.classList.add(
        themeValue
      );
    }

    setActiveColorTheme(themeValue);

    localStorage.setItem(
      "color-theme",
      themeValue
    );
  };

  // Mencegah render interaktif sebelum mounted
  if (!mounted) return <header className="h-16 fixed top-0 w-full z-50 bg-background/80" />;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/0 border-b-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* LOGO */}
        <a 
          href="#home" 
          className="font-bold text-2xl tracking-tighter flex items-center gap-1 hover:opacity-80 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          DAP<span className="text-primary">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-border pl-8">

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground">
              <Palette className="h-3 w-3" />

              <span>
                {
                  themeOptions.find(
                    (t) =>
                      t.value === activeColorTheme
                  )?.label
                }
              </span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className:
                    "rounded-full relative",
                })}
              >
                <Palette className="h-4 w-4" />

                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />

                <span className="sr-only">
                  Ubah Tema Warna
                </span>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-52">
                {themeOptions.map((t) => (
                  <DropdownMenuItem
                    key={t.value}
                    onClick={() =>
                      changeColorTheme(
                        t.value
                      )
                    }
                    className="flex items-center justify-between"
                  >
                    {t.label}

                    {activeColorTheme ===
                      t.value && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() =>
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              }
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}

              <span className="sr-only">
                Toggle theme
              </span>
            </Button>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* MOBILE NAVIGATION MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 space-y-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* TEMA WARNA MOBILE - DINAMIS */}
            <div className="pt-4 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground block mb-3">Ubah Tema Warna:</span>
              <div className="flex flex-wrap gap-2">
                {themeOptions.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      changeColorTheme(t.value);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                      activeColorTheme === t.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border bg-muted/50 hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* SOSIAL MEDIA */}
            <div className="pt-4 flex gap-4">
               <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaGithub className="h-5 w-5" />
               </a>
               <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaLinkedin className="h-5 w-5" />
               </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}