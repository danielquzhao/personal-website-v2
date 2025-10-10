import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/danielquzhao", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/danielquzhao",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/danielquzhao", label: "Twitter" },
    { icon: Mail, href: "mailto:daniel@example.com", label: "Email" },
  ];

  return (
    <footer className="mt-20 border-t border-border/50 pt-8">
      <div className="flex items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            variant="ghost"
            size="icon"
            asChild
            className="hover:scale-110 transition-transform"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}

