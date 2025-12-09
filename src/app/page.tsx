import Link from "next/link";
import Image from "next/image";
import { Code, Cpu, Printer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FastPassDemo } from "@/components/FastPassDemo";

export default function Home() {
  const getProjectImage = (id: string) => PlaceHolderImages.find(p => p.id === id)!;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="space-y-6">
            <div className="mx-auto">
              <Image
                src="https://i.postimg.cc/7CqZHgdF/Chat-GPT-Image-Dec-9-2025-02-50-22-PM.png"
                alt="Kabir Gagneja Invents Logo"
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
            </div>
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Invent. Code. Create.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Welcome to Kabir Gagneja Invents — the official showcase of my projects and creations.
            </p>
            <div className="space-x-4">
              <Link href="/projects">
                <Button size="lg">View Projects</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Latest Update</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                KabirDNS Demo is now OUT! Experience a faster, simpler, and more secure DNS.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="https://kabirdns.kabirinvents.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Try KabirDNS</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-secondary/20 dark:bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">FastPass</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My latest project demo.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <FastPassDemo />
          </div>
          <div className="mt-8 text-center">
            <Link href="https://fastpass.kabirinvents.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Try Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What I Do</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I bring ideas to life through software, hardware, and 3D printing.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From mobile apps to full-stack web solutions, I build software that solves real-world problems.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I design and prototype electronics, from IoT devices with ESP32 to Arduino-powered creations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Printer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">3D Prints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using 3D printing, I turn digital models into tangible objects for fun and function.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             I'm currently focusing my efforts on my new project, FastPass, and launching KabirDNS.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm md:max-w-2xl md:grid-cols-2 items-start gap-8 mt-8">
            <ProjectCard
              title="KabirDNS"
              description="A faster, simpler, and more secure DNS resolver powered by Oracle Cloud."
              image={getProjectImage("project-kabirdns")}
              link="https://kabirdns.kabirinvents.com"
              status="Live"
            />
            <ProjectCard
              title="FastPass"
              description="A digital identity service to simplify online interactions with autofill and SSO."
              image={getProjectImage("project-fastpass")}
              link="https://fastpass.kabirinvents.com"
              status="Live"
            />
          </div>
          <div className="mt-12">
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
