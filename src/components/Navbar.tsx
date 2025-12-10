"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderKanban, Printer, LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/prints", label: "3D Prints", icon: Printer },
  { href: "/support", label: "Support", icon: LifeBuoy },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]">
      <nav className="glass-panel rounded-full px-4 py-2 flex items-center gap-1 sm:gap-2 shadow-2xl border-white/20">
        <TooltipProvider delayDuration={0}>
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className={cn(
                    "p-3 rounded-full transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 relative group",
                    pathname === href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300", pathname === href && "scale-110")} />
                  {pathname === href && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                  <span className="sr-only">{label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="mb-2">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <div className="w-px h-6 bg-border mx-1" />
          <div className="p-1">
            <ThemeToggle />
          </div>
        </TooltipProvider>
      </nav>
    </div>
  );
}
