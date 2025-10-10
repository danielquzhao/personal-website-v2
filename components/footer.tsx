import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/danielquzhao", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/danielquzhao",
      label: "LinkedIn",
    },
    { icon: XIcon, href: "https://x.com/danielquzhao", label: "X" },
    { icon: Mail, href: "mailto:danielquzhao@gmail.com", label: "Email" },
  ];

  return (
    <footer className="mt-12">
      <div className="flex items-center gap-4">
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

