"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/prints", label: "3D Prints" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://i.postimg.cc/7CqZHgdF/Chat-GPT-Image-Dec-9-2025-02-50-22-PM.png"
            alt="Kabir Gagneja Invents Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden font-bold sm:inline-block font-headline">
            Kabir Gagneja Invents
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full py-6">
                <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="https://i.postimg.cc/7CqZHgdF/Chat-GPT-Image-Dec-9-2025-02-50-22-PM.png"
                    alt="Kabir Gagneja Invents Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-bold font-headline">
                    Kabir Gagneja Invents
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg transition-colors hover:text-foreground/80",
                        pathname === href
                          ? "text-foreground font-semibold"
                          : "text-foreground/60"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
