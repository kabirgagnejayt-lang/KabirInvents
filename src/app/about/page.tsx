import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Rocket, Palette, ToyBrick, Milestone } from "lucide-react";

const aboutSections = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "The Spark",
    text: "From his first lines of code to launching entire ecosystems, Kabir has always been driven by a fascination with how technology can connect, inspire, and empower. He doesn’t just create software; he builds experiences.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "A Young Coder",
    text: "Born in 2013, Kabir discovered his love for coding at an early age, teaching himself to bring ideas to life. What started as simple exercises soon evolved into complete apps, web systems, and even hardware projects.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Major Creations",
    text: "His journey began with Qsolve, an AI-powered homework helper. From there, he envisioned the Pulse Ecosystem—a connected network of platforms showing his relentless creativity and drive to build integrated systems.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Design Philosophy",
    text: "Kabir’s projects are guided by his signature style: clean, futuristic interfaces with soft gradients and fluid motion. His philosophy is all about merging simplicity with energy and functionality with feeling.",
  },
  {
    icon: <ToyBrick className="h-8 w-8 text-primary" />,
    title: "Beyond Software",
    text: "Beyond software, Kabir explores everything from 3D printing to electronics. He treats every idea as an opportunity to learn, turning curiosity into hands-on engineering, from smartwatch accessories to servo-powered cable cars.",
  },
  {
    icon: <Milestone className="h-8 w-8 text-primary" />,
    title: "The Brand",
    text: "In 2025, he launched kabirinvents.com as the official home for his projects, updates, and experiments. It’s where his ideas come alive, reflecting his journey as a builder who sees technology not just as a tool, but as art.",
  },
];

export default function AboutPage() {
  return (
    <div className="container max-w-5xl py-12 md:py-24 lg:py-32">
      <div className="flex flex-col justify-center space-y-8">
        <div className="text-center">
          <div className="inline-block">
            <Image
              src="https://i.postimg.cc/MZRx6jJd/Screenshot-2025-11-07-233154.png"
              alt="Kabir Gagneja"
              width={150}
              height={150}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl mt-6">
            About Kabir Gagneja
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Inventor, Developer, and Creator
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {section.icon}
                </div>
                <CardTitle className="font-headline mt-4">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{section.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-8">
            <p className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
             “In his own quiet way, Kabir represents the new generation of inventors — creators who don’t wait to grow up to change the world. He’s already doing it, one project at a time.”
            </p>
        </div>

      </div>
    </div>
  );
}
