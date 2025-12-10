import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Key, Lock, Code, Zap } from "lucide-react";

export default function FastPassPage() {
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
                src="https://i.postimg.cc/XXqmMpHZ/Chat_GPT_Image_Dec_9_2025_03_20_57_PM.png" 
                alt="FastPass"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-headline mb-2">FastPass</h1>
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20">
                Beta 1.0
              </Badge>
            </div>
            <p className="text-muted-foreground">
              A digital identity service for autofill and single sign-on (SSO). A "quick pass for apps."
            </p>
            <Button className="w-full" asChild>
              <Link href="https://fastpass.kabirinvents.com" target="_blank">
                Try Beta <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Highlights
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                <span className="text-muted-foreground">One-Click Profiles</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                <span className="text-muted-foreground">Instant Login / SSO</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                <span className="text-muted-foreground">Developer Friendly</span>
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                <span className="text-muted-foreground">Privacy Focused</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Concept */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-4">The Concept</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastPass is a beta service intended to simplify account creation and login. It functions as a "quick pass for apps," allowing users to pre‑fill profile information so they can create accounts or log in instantly.
            </p>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
              <p className="text-sm text-primary font-medium">
                FastPass Beta 1.0 is now available! We invite users and developers to try it out and provide feedback.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                <UserIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">One-Click Profiles</h3>
              <p className="text-sm text-muted-foreground">
                Fill out your details once and reuse them across any supported app. No more repetitive forms.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground">
                You control exactly what data is shared with each app through clear permission requests.
              </p>
            </div>
          </section>

          {/* For Developers */}
          <section className="glass-panel p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold font-headline">For Developers</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Integration is designed to be incredibly simple, requiring no complex SDKs. Just a simple script tag sets up the system.
            </p>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">How it works</h3>
              <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                <div className="relative">
                  <div className="absolute -left-8 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</div>
                  <h4 className="font-medium">Launch Popup</h4>
                  <p className="text-sm text-muted-foreground">Your app triggers the FastPass popup.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</div>
                  <h4 className="font-medium">User Approval</h4>
                  <p className="text-sm text-muted-foreground">The user reviews and approves the data request.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">3</div>
                  <h4 className="font-medium">Secure Handoff</h4>
                  <p className="text-sm text-muted-foreground">Approved data is sent back to your client app via a secure message.</p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="text-center pt-8">
             <p className="text-sm text-muted-foreground italic">An invention by Kabir</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
