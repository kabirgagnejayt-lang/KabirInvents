import Link from "next/link";
import { Mail, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Let's Connect!
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Get in touch or follow my projects below.
        </p>
      </div>

      <Card className="mt-12">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="https://www.youtube.com/@KabirInvents" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full" variant="outline">
                <Youtube className="mr-2 h-5 w-5" />
                YouTube
              </Button>
            </Link>
            <Link href="https://github.com/kabirgagnejayt-lang" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full" variant="outline">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://whatsapp.com/channel/0029VbB4DCr9Gv7Qj7NgCX2t" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full" variant="outline">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </Link>
            <Link href="mailto:kabirgagneja@kabirinvents.com">
              <Button size="lg" className="w-full" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
