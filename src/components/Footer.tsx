import Link from "next/link";
import { WhatsAppIcon } from "./icons";
import { Mail, Github, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-lg">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {currentYear} Kabir Gagneja Invents. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.youtube.com/@KabirInvents" target="_blank" rel="noreferrer">
            <Youtube className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://github.com/kabirgagnejayt-lang" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://whatsapp.com/channel/0029VbB4DCr9Gv7Qj7NgCX2t" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">WhatsApp Channel</span>
          </Link>
          <Link href="mailto:kabirgagneja@kabirinvents.com">
            <Mail className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
