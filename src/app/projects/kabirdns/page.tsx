import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Zap, Globe, Shield } from "lucide-react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.kabirgagnejainvents.kabirdns";

export default function KabirDNSPage() {
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
                src="/public/kabirdns-hero.png" 
                alt="KabirDNS"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-headline mb-2">KabirDNS</h1>
              <Badge variant="default" className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">
                Live
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Private, profile-based DNS with encrypted DNS‑over‑TLS, device management, and advanced filtering.
            </p>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link href={PLAY_STORE} target="_blank">
                  Get the Android App <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link href="https://kabirdns.kabirinvents.com" target="_blank">
                  Visit Dashboard <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Quick Stats
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Uptime SLA</span>
                <span className="font-medium">99.99%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Avg Resolution</span>
                <span className="font-medium">&lt;10ms</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Queries / Day</span>
                <span className="font-medium">100K+</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero / Tagline */}
          <section className="glass-panel p-8 rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-headline mb-2">Private DNS for the Modern Internet</h2>
                <p className="text-muted-foreground">
                  Take control of your DNS with enterprise-grade privacy, lightning-fast resolution, and powerful filtering. Protect every device on your network with DNS‑over‑TLS.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href={PLAY_STORE} target="_blank">Start Free Trial</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/projects/kabirdns#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose KabirDNS */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-6">Why Choose KabirDNS?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg"><Shield className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold">Encrypted DNS (DoT)</h4>
                    <p className="text-sm text-muted-foreground">Encrypt DNS queries with TLS 1.3 to stop eavesdropping and tampering.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg"><Zap className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold">Lightning Fast</h4>
                    <p className="text-sm text-muted-foreground">Optimized caching and anycast routing keep typical resolution under 10ms.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg"><Globe className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold">Advanced Filtering</h4>
                    <p className="text-sm text-muted-foreground">Block ads, trackers, malware, and adult content with customizable lists.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg"><Shield className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="font-semibold">Device & Profile Management</h4>
                    <p className="text-sm text-muted-foreground">Assign profiles per-device and manage your network from the mobile app or dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="glass-panel p-8 rounded-2xl" id="setup">
            <h2 className="text-2xl font-bold font-headline mb-4">Setup in Minutes</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
              <li>Sign up and verify your account.</li>
              <li>Add a device to get a unique hostname.</li>
              <li>Set Android Private DNS to your hostname or use our app.</li>
            </ol>
            <p className="mt-4 text-sm">We support Android apps and manual Private DNS configuration. For app install: <Link href={PLAY_STORE} className="underline" target="_blank">Google Play</Link>.</p>
          </section>

          {/* Pricing */}
          <section className="glass-panel p-8 rounded-2xl" id="pricing">
            <h2 className="text-2xl font-bold font-headline mb-4">Pricing</h2>
            <p className="text-sm text-muted-foreground mb-4">Simple, transparent pricing — start free and upgrade as you need more devices and features.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Free", price: "S$0/mo", features: ["1 Device", "1 DNS Zone", "DoT", "Basic Filtering"] },
                { title: "Lite", price: "S$1.99/mo", features: ["3 Devices", "5 DNS Zones", "30-day Logs"] },
                { title: "Pro", price: "S$9.99/mo", features: ["10 Devices", "25 DNS Zones", "Priority Support"] }
              ].map((plan) => (
                <div key={plan.title} className="p-4 rounded-xl border border-white/10 bg-white/3">
                  <h4 className="font-semibold mb-2">{plan.title}</h4>
                  <div className="text-xl font-bold mb-2">{plan.price}</div>
                  <ul className="text-sm text-muted-foreground mb-4">
                    {plan.features.map((f) => <li key={f}>• {f}</li>)}
                  </ul>
                  <Button asChild>
                    <Link href={PLAY_STORE} target="_blank">Get Started</Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Footer / Contact */}
          <section className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-2">Support & Legal</h3>
            <p className="text-sm text-muted-foreground">Email: <a href="mailto:Kabirgagnejayt@gmail.com" className="underline">Kabirgagnejayt@gmail.com</a></p>
            <p className="text-sm text-muted-foreground">Privacy Policy & Terms available on the dashboard site.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
