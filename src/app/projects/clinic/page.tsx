import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Clock, MapPin, Phone, Stethoscope, Heart, Baby } from "lucide-react";

export default function ClinicPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 container mx-auto px-4">
      <div className="mb-8">
        <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Sidebar / Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-2xl space-y-6">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-muted">
               <Image 
                src="https://i.postimg.cc/rDvk9Fbm/gagneja-speciality-clinic-delhi-1481544174-584e91eeb87bb-(2).webp" 
                alt="Gagneja Speciality Clinic"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-headline mb-2">Gagneja Speciality Clinic</h1>
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">
                Under Maintenance
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Trusted pediatric and internal medicine care for people of all ages in Janakpuri, West Delhi.
            </p>
            <Button className="w-full" asChild>
              <Link href="https://gagnejaspecialityclinic.kabirinvents.com/" target="_blank">
                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium mb-1">Monday - Saturday</p>
                <div className="flex justify-between text-muted-foreground">
                  <span>Morning</span>
                  <span>08:30 AM – 01:30 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Evening</span>
                  <span>05:00 PM – 09:00 PM</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-1 text-destructive">Sunday</p>
                <p className="text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Location
            </h3>
            <address className="not-italic text-sm text-muted-foreground mb-4">
              D1‑A/A10 Basement (Below HDFC Bank)<br />
              Janakpuri D Block<br />
              Delhi - 110058
            </address>
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              <a href="tel:+919811131951" className="hover:text-primary transition-colors">+91 98111 31951</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-4">A Legacy of Care</h2>
            <p className="text-muted-foreground leading-relaxed">
              Serving the area for over 20 years, Gagneja Speciality Clinic provides comprehensive medical care ranging from newborns to seniors. The clinic emphasizes compassionate care for every life stage, ensuring that every patient receives the attention and treatment they deserve.
            </p>
          </section>

          {/* Services */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-6">Our Services</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Internal Medicine & Rheumatology</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive care for chronic conditions, autoimmune diseases, joint pain, arthritis, ankylosing spondylitis, systemic sclerosis, and fibromyalgia.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                  <Baby className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Pediatric Medicine</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized care including newborn issues, growth and development evaluation, childhood infections, vaccination, and pediatric critical care.
                </p>
              </div>
            </div>
          </section>

          {/* Medical Team */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-6">Meet Our Doctors</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Shaloo Bhasin Gagneja</h3>
                  <p className="text-sm text-primary mb-2">Internal Medicine & Rheumatology • 20+ Years Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Specializes in managing complex autoimmune disorders and chronic pain conditions with a focus on improving quality of life.
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Vikram Gagneja</h3>
                  <p className="text-sm text-primary mb-2">Pediatrician & Pediatric Intensivist • 22+ Years Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Focuses on holistic child development and follows a minimal‑medication approach for treating common childhood ailments.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
