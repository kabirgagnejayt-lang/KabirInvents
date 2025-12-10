import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Server, Shield, Zap, Globe } from "lucide-react";

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
                src="https://i.postimg.cc/3y3x8gzM/Chat_GPT_Image_Dec_9_2025_02_25_47_PM.png" 
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
              A fast and secure DNS resolver built for personal and high-performance use.
            </p>
            <Button className="w-full" asChild>
              <Link href="https://kabirdns.kabirinvents.com" target="_blank">
                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              Quick Stats
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Throughput</span>
                <span className="font-medium">10 Gbps</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Capacity</span>
                <span className="font-medium">500k QPS</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Network</span>
                <span className="font-medium">Oracle Cloud</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Purpose */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-4">Purpose</h2>
            <p className="text-muted-foreground leading-relaxed">
              KabirDNS is a DNS‑resolver service built by KabirInvents. It’s designed for personal and high‑performance use and runs on Oracle’s enterprise‑grade network. The service provides ultra‑low‑latency DNS resolution with up to 10 Gbps network throughput and can handle 500,000 DNS queries per second.
            </p>
          </section>

          {/* DNS Options */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-6">DNS Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="mb-3 p-2 bg-primary/10 w-fit rounded-lg">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Direct DNS Resolver</h3>
                <code className="text-xs bg-black/20 px-2 py-1 rounded block mb-2 w-fit">dns.kabirinvents.com</code>
                <p className="text-sm text-muted-foreground">
                  Sends queries directly to the KabirDNS server without any intermediate layers.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="mb-3 p-2 bg-primary/10 w-fit rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Private DNS (DoT)</h3>
                <code className="text-xs bg-black/20 px-2 py-1 rounded block mb-2 w-fit">pdns.kabirinvents.com</code>
                <p className="text-sm text-muted-foreground">
                  Offers encrypted DNS‑over‑TLS for enhanced privacy and security.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="glass-panel p-8 rounded-2xl">
            <h2 className="text-2xl font-bold font-headline mb-6">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "10 Gbps network for high bandwidth",
                "Optimized resolver (500k queries/sec)",
                "Smart caching for frequent domains",
                "High-speed encrypted DNS support",
                "Redundant servers & fail-over logic",
                "Enterprise-level statistics"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Setup */}
          <section className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
            <h2 className="text-2xl font-bold font-headline mb-4">Setup Guide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Android Private DNS</h3>
                <p className="text-sm text-muted-foreground mb-2">Use the Private DNS hostname:</p>
                <code className="bg-black/20 px-3 py-2 rounded-lg block w-full sm:w-fit">pdns.kabirinvents.com</code>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <h3 className="font-semibold mb-2">Windows / macOS / Linux</h3>
                <p className="text-sm text-muted-foreground mb-2">Set your DNS server address to:</p>
                <code className="bg-black/20 px-3 py-2 rounded-lg block w-full sm:w-fit">dns.kabirinvents.com</code>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
