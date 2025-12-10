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

const clinicNavLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClinicPage = pathname === "/";

  if (isClinicPage) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl font-headline">
              Gagneja Speciality Clinic
            </span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {clinicNavLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">View Appointment</Button>
            <Button size="sm">Book Appointment</Button>
            <Button variant="outline" size="sm">Login</Button>
            <ThemeToggle />
          </div>

          <div className="flex lg:hidden items-center space-x-4">
             <ThemeToggle />
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                  <Link href="/" className="mb-8 font-bold text-xl font-headline" onClick={() => setIsMobileMenuOpen(false)}>
                    Gagneja Speciality Clinic
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {clinicNavLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    ))}
                    <div className="flex flex-col gap-2 mt-4">
                        <Button variant="ghost" className="justify-start">View Appointment</Button>
                        <Button className="justify-start">Book Appointment</Button>
                        <Button variant="outline" className="justify-start">Login</Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
  }

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
