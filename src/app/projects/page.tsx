import { ProjectCard } from "@/components/ProjectCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-kabirdns",
    title: "KabirDNS",
    description: "A faster, simpler, and more secure DNS resolver powered by Oracle Cloud.",
    link: "https://kabirdns.kabirinvents.com",
    status: "Live"
  },
  {
    id: "project-fastpass",
    title: "FastPass",
    description: "A digital identity service for autofill and single sign-on (SSO). Currently in Beta.",
    link: "https://fastpass.kabirinvents.com",
    status: "Live"
  },
  {
    id: "project-qsolve",
    title: "Qsolve",
    description: "An AI homework solver (links to qsolve.kabirinvents.com)",
    link: "https://qsolve.kabirinvents.com",
    storeLink: "https://play.google.com/store/apps/details?id=appinventor.ai_kabirgagnejayt.GradeWithAI&hl=en",
    status: "Discontinued"
  },
  {
    id: "project-pulse-circle",
    title: "Pulse Circle",
    description: "A social networking platform concept.",
    status: "Discontinued"
  },
  {
    id: "project-store",
    title: "Kabir Gagneja Invents Store",
    description: "An online store for my creations & retro finds, now in an archived state.",
    link: "https://kabirinvents.store",
    status: "Archived"
  },
  {
    id: "project-cablecar",
    title: "Arduino Cable Car",
    description: "A hardware project featuring a miniature cable car system.",
    status: "Discontinued"
  },
  {
    id: "project-kardz",
    title: "Kardz",
    description: "A future idea for a digital identity platform.",
    status: "Discontinued"
  },
  {
    id: "project-makemyapp",
    title: "MakeMyApp",
    description: "A future idea for an intuitive app builder platform.",
    status: "Discontinued"
  },
  {
    id: "project-androwatch",
    title: "AndroWatch",
    description: "A future idea for a versatile Android watch launcher.",
    status: "Discontinued"
  },
  {
    id: "project-syncband",
    title: "SyncBand",
    description: "A future idea for a watch-phone integration app.",
    status: "Discontinued"
  },
];

export default function ProjectsPage() {
  const getProjectImage = (id: string) => PlaceHolderImages.find(p => p.id === id)!;

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          My Projects
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          My focus has shifted to a new venture, but here is an archive of my past work and ideas.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={getProjectImage(project.id)}
            link={project.link}
            storeLink={project.storeLink}
            status={project.status as any}
          />
        ))}
      </div>
    </div>
  );
}

    