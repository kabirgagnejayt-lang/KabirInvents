import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone, Star, ShieldCheck, Baby, Activity, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Maintenance Banner */}
      <div className="bg-yellow-100 dark:bg-yellow-900/30 border-b border-yellow-200 dark:border-yellow-800 p-4">
        <div className="container flex items-center justify-center gap-2 text-yellow-800 dark:text-yellow-200">
          <AlertCircle className="h-5 w-5" />
          <p className="font-medium">Fastpass and this site is currently under maintenance.</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-muted/20">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your Family’s Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Trusted pediatric and internal medicine care for all ages — serving West Delhi for over 20 years.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Book Appointment</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
               <Image
                src="https://i.postimg.cc/rDvk9Fbm/gagneja-speciality-clinic-delhi-1481544174-584e91eeb87bb-(2).webp"
                alt="Gagneja Speciality Clinic Interior"
                width={600}
                height={400}
                className="rounded-xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Commitment</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A Legacy of Care
              </p>
            </div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg text-left mx-auto">
              Gagneja Speciality Clinic offers high-quality, specialized care for all ages, from newborns to seniors. We are dedicated to providing expert evaluation and treatment for a wide range of medical conditions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  Adult Internal Medicine & Rheumatology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our premier service, offering a dedicated rheumatology clinic for comprehensive care of chronic conditions and complex autoimmune diseases.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-6 w-6 text-primary" />
                  Pediatric Medicine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expert care for emergencies, newborn issues, growth, development, and infections.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Schedule</h2>
              <p className="text-muted-foreground md:text-xl">
                We're Here When You Need Us. We are open 6 days a week with convenient morning and evening hours to serve you and your family.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>Monday - Saturday</span>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Clinic Hours</CardTitle>
                <CardDescription>Our clinic is open Monday through Saturday. Closed on Sundays.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Morning</span>
                  <span>08:30 AM – 01:30 PM</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Evening</span>
                  <span>05:00 PM – 09:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Appointments are recommended. Walk-ins are welcome but subject to availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Comprehensive Care for Every Stage of Life
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Rheumatology & Autoimmune</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Specialized diagnosis and management of arthritis, lupus, and other complex autoimmune and musculoskeletal conditions.
                </p>
                <Button variant="link" className="p-0 h-auto">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Pediatric Care</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Comprehensive care for children, from newborns to adolescents, ensuring their healthy growth and development.
                </p>
                <Button variant="link" className="p-0 h-auto">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Vaccination & Preventive Care</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">
                  Stay protected with our wide range of immunizations and preventive health consultations for all ages.
                </p>
                <Button variant="link" className="p-0 h-auto">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Meet Our Expert Doctors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Compassionate and experienced professionals dedicated to your family's well-being.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                   <span className="font-bold text-primary">SB</span>
                </div>
                <CardTitle>Dr. Shaloo Bhasin Gagneja</CardTitle>
                <CardDescription>Internal Medicine & Rheumatology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">20+ years Experience</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Joint Pain & Arthritis (Rheumatoid, Psoriatic)</li>
                  <li>Ankylosing Spondylitis</li>
                  <li>Autoimmune Disorders (Lupus, Vasculitis)</li>
                  <li>Systemic Sclerosis (Scleroderma)</li>
                  <li>Fibromyalgia & Myositis</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                   <span className="font-bold text-primary">VG</span>
                </div>
                <CardTitle>Dr. Vikram Gagneja</CardTitle>
                <CardDescription>Pediatrician & Paediatric Intensivist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">22+ years Experience</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Growth & Development Evaluation</li>
                  <li>Newborn Care</li>
                  <li>Childhood Infections</li>
                  <li>Pediatric Critical Care</li>
                  <li>Minimal medication approach</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Patients Say</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Minimal medicines, honest guidance, and absolutely no unnecessary antibiotics. Dr. Gagneja is trustworthy and highly professional.",
                author: "A. Kumar",
                initials: "AK"
              },
              {
                quote: "Excellent with children. Dr. Vikram is very patient, calm, and experienced. We trust the clinic completely with our little one.",
                author: "S. Sharma",
                initials: "SS"
              },
              {
                quote: "My mother recovered from severe joint pain under Dr. Shaloo's treatment. Her explanations are clear and she gives great long-term prevention guidance.",
                author: "R. Singh",
                initials: "RS"
              },
              {
                quote: "Hands down the best pediatrician in West Delhi. Very gentle with newborns and explains everything clearly to new parents.",
                author: "P. Gupta",
                initials: "PG"
              },
              {
                quote: "A friendly, knowledgeable, and truly caring team. We have had a great experience every single time we've visited.",
                author: "M. Jain",
                initials: "MJ"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-muted/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-primary text-xs">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground italic mb-2">"{testimonial.quote}"</p>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Visit Us</h2>
              <p className="text-muted-foreground md:text-xl">
                We are conveniently located in Janakpuri and ready to welcome you.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <p>D1-A/A10 Basement (Below HDFC Bank), Janakpuri D Block, Delhi - 110058</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+91 98111 31951</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">Get Directions</Button>
            </div>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border">
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Prioritize Your Health?
          </h2>
          <p className="max-w-[600px] mx-auto text-primary-foreground/80 md:text-xl mb-8">
            Booking an appointment is quick and easy. Get the care you need without the wait.
          </p>
          <Button size="lg" variant="secondary">Book Appointment</Button>
        </div>
      </section>
    </div>
  );
}
