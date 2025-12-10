import Link from "next/link";
import Image from "next/image";
import { Code, Cpu, Printer, ArrowRight, AlertCircle, ExternalLink, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FastPassDemo } from "@/components/FastPassDemo";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const getProjectImage = (id: string) => PlaceHolderImages.find(p => p.id === id)!;

  return (
    <div className="flex flex-col min-h-[100dvh] relative overflow-hidden bg-background selection:bg-primary/30">
      
      {/* Liquid Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="liquid-blob bg-blue-500/30 w-[500px] h-[500px] rounded-full top-[-100px] left-[-100px] mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
        <div className="liquid-blob bg-purple-500/30 w-[500px] h-[500px] rounded-full top-[-100px] right-[-100px] mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="liquid-blob bg-pink-500/30 w-[500px] h-[500px] rounded-full bottom-[-100px] left-[20%] mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Maintenance Banner */}
      <div className="relative z-50 bg-yellow-500/10 backdrop-blur-md border-b border-yellow-500/20 p-4 text-center">
        <div className="container flex items-center justify-center gap-2 text-yellow-600 dark:text-yellow-400">
          <AlertCircle className="h-5 w-5" />
          <p className="font-medium">Fastpass and Gagneja Speciality Clinic are currently under maintenance.</p>
        </div>
      </div>

      {/* Hero Section - Spotlight on KabirDNS */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center z-10">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-sm text-foreground/80 mb-4">
              Invent. Code. Create.
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 pb-2 text-glow">
              Kabir Gagneja Invents
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building the future with code and creativity.
            </p>
          </div>

          {/* Spotlight Card */}
          <div className="mt-12 w-full max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl p-1 md:p-2 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-transparent">
              <div className="relative rounded-2xl overflow-hidden bg-background/40 backdrop-blur-xl border border-white/10">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                  <div className="space-y-6 text-left">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 text-white border-0">Featured Project</Badge>
                      <Badge variant="outline" className="border-blue-500/50 text-blue-600 dark:text-blue-400">Live Now</Badge>
                    </div>
                    <h2 className="text-4xl font-bold font-headline">KabirDNS</h2>
                    <p className="text-lg text-muted-foreground">
                      Experience a faster, simpler, and more secure internet. KabirDNS blocks ads, trackers, and malicious sites at the DNS level.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-yellow-500" /> Blazing Fast
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-green-500" /> Secure
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="h-4 w-4 text-blue-500" /> Global
                      </div>
                    </div>
                    <div className="pt-4">
                      <Link href="https://kabirdns.kabirinvents.com" target="_blank">
                        <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25">
                          Try KabirDNS Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-xl overflow-hidden glass-card flex items-center justify-center">
                     <Image
                        src={getProjectImage("project-kabirdns").imageUrl}
                        alt="KabirDNS"
                        fill
                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="w-full py-12 md:py-24 z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">More Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Exploring new ideas in web, mobile, and hardware.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* FastPass Card */}
            <div className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <ProjectCard
                title="FastPass"
                description="A digital identity service to simplify online interactions with autofill and SSO."
                image={getProjectImage("project-fastpass")}
                link="https://fastpass.kabirinvents.com"
                status="Under Maintenance"
              />
            </div>

            {/* Clinic Card */}
            <div className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <ProjectCard
                title="Gagneja Speciality Clinic"
                description="Official website for Gagneja Speciality Clinic."
                image={getProjectImage("project-clinic")}
                link="https://gagnejaspecialityclinic.kabirinvents.com/"
                status="Under Maintenance"
              />
            </div>

            {/* 3D Print Farm */}
             <div className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <ProjectCard
                title="3D Print Farm"
                description="Automated 3D printing farm management system."
                image={getProjectImage("print-tinypod")} // Using a placeholder for now
                link="/projects"
                status="In Development"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="glass-panel border-white/20 hover:bg-white/20">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills / What I Do Section */}
      <section className="w-full py-12 md:py-24 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card border-0 text-center p-6 hover:bg-white/10 transition-colors">
              <div className="mx-auto bg-blue-500/20 p-4 rounded-full w-fit mb-4 backdrop-blur-sm">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Software</h3>
              <p className="text-muted-foreground">Full-stack development with Next.js, React, and Node.js.</p>
            </Card>
            <Card className="glass-card border-0 text-center p-6 hover:bg-white/10 transition-colors">
              <div className="mx-auto bg-purple-500/20 p-4 rounded-full w-fit mb-4 backdrop-blur-sm">
                <Cpu className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hardware</h3>
              <p className="text-muted-foreground">IoT, electronics prototyping, and embedded systems.</p>
            </Card>
            <Card className="glass-card border-0 text-center p-6 hover:bg-white/10 transition-colors">
              <div className="mx-auto bg-pink-500/20 p-4 rounded-full w-fit mb-4 backdrop-blur-sm">
                <Printer className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">3D Printing</h3>
              <p className="text-muted-foreground">Digital modeling and additive manufacturing.</p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
