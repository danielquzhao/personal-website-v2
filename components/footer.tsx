import { Github, Linkedin, Mail } from "lucide-react";

// Custom X (Twitter) icon (commented out)
// const XIcon = ({ className }: { className?: string }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/danielquzhao", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/danielquzhao",
      label: "LinkedIn",
    },
    // { icon: XIcon, href: "https://x.com/danielquzhao", label: "X" },
    { icon: Mail, href: "mailto:danielquzhao@gmail.com", label: "Email" },
  ];

  return (
    <footer>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* CS Webring Widget */}
        <div className="flex items-center gap-6 mr-2">
          <a
            href="https://cs.uwatering.com/#https://www.danielquzhao.com?nav=prev"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous site in CS Webring"
          >
            ←
          </a>
          <a
            href="https://cs.uwatering.com/#https://www.danielquzhao.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CS Webring"
            className="text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100"
          >
            <img
              src="https://cs.uwatering.com/icon.white.svg"
              alt="CS Webring"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://cs.uwatering.com/#https://www.danielquzhao.com?nav=next"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next site in CS Webring"
          >
            →
          </a>
        </div>
      </div>
    </footer>
  );
}

