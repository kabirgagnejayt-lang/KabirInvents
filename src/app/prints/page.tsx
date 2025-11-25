import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const prints = [
  { id: "print-tinypod", name: "TinyPod Stand", link: "https://makerworld.com/en/models/1705396-fireboltt-dream-fireboltt-202-tinypod" },
  { id: "print-phone-stand", name: "Phone Stand", link: "https://makerworld.com/en/models/1706645-phone-stand" },
  { id: "print-room-sign", name: "Welcome to my room sign", link: "https://makerworld.com/en/models/1706446-welcome-to-my-room-sign" },
];

export default function PrintsPage() {
  const getPrintImage = (id: string) => PlaceHolderImages.find(p => p.id === id)!;

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          3D Prints Gallery
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A selection of my 3D models and prints, available on MakerWorld.
        </p>
         <Link href="https://makerworld.com/en/@user_3754413016" target="_blank" rel="noopener noreferrer">
          <Button>
            View all on MakerWorld <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prints.map((print) => {
          const image = getPrintImage(print.id);
          return (
            <Link key={print.id} href={print.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{print.name}</CardTitle>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-primary group-hover:underline">
                      View on MakerWorld <ArrowUpRight className="inline h-4 w-4" />
                    </p>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
