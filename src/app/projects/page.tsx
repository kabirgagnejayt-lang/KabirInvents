import { ProjectCard } from "@/components/ProjectCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "project-clinic",
    title: "Gagneja Speciality Clinic",
    description: "Official website for Gagneja Speciality Clinic. Note: Fastpass and this site is currently under maintenance.",
    link: "https://gagnejaspecialityclinic.kabirinvents.com/",
    status: "Live"
  },
  {
    id: "project-kabirdns",
    title: "KabirDNS",
    description: "A faster, simpler, and more secure DNS resolver powered by Oracle Cloud.",
    link: "https://kabirdns.kabirinvents.com",
    status: "Live",
    customImage: "https://i.postimg.cc/3y3x8gzM/Chat_GPT_Image_Dec_9_2025_02_25_47_PM.png"
  },
  {
    id: "project-fastpass",
    title: "FastPass",
    description: "A digital identity service for autofill and single sign-on (SSO). Currently in Beta.",
    link: "https://fastpass.kabirinvents.com",
    status: "Live",
    customImage: "https://i.postimg.cc/XXqmMpHZ/Chat_GPT_Image_Dec_9_2025_03_20_57_PM.png"
  },
  {
    id: "project-qsolve",
    title: "Qsolve",
    description: "An AI homework solver. Removed from Play Store and website is offline. The app will show an error.",
    link: "https://qsolve.kabirinvents.com",
    status: "Discontinued"
  }
];

export default function ProjectsPage() {
  const getProjectImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

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
        {projects.map((project) => {
          const placeholder = getProjectImage(project.id);
          const image = project.customImage 
            ? { id: project.id, description: project.title, imageUrl: project.customImage, imageHint: project.title }
            : placeholder!;

          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={image}
              link={project.link}
              // storeLink={project.storeLink} // Removed as per request
              status={project.status as any}
            />
          );
        })}
      </div>
    </div>
  );
}

    