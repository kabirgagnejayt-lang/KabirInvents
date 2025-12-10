"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./icons";
import { Mail, Github, Youtube } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isClinicPage = pathname === "/";

  if (isClinicPage) {
    return (
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Gagneja Speciality Clinic</h3>
              <p className="text-sm text-muted-foreground">
                Trusted pediatric and internal medicine care for all ages.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Facebook
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Practo
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#doctors" className="text-muted-foreground hover:text-primary">Doctors</Link></li>
                <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link href="#location" className="text-muted-foreground hover:text-primary">Location</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Credits</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>D1-A/A10 Basement (Below HDFC Bank),</p>
                <p>Janakpuri D Block, Delhi - 110058</p>
                <p className="font-semibold text-foreground">+91 98111 31951</p>
              </address>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Gagneja Speciality Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t">
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
