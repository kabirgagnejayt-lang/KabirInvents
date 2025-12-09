import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const journeySections = [
  {
    icon: "🌐",
    title: "Introducing the New KabirDNS — Faster, Simpler, and More Secure",
    date: "December 9, 2025 (Age 12)",
    description: "Today marks the official launch of the fully redesigned KabirDNS, now available at kabirdns.kabirinvents.com. This new version gives users a faster resolver, a modern interface, and a more secure DNS experience powered by Oracle Cloud. Built from the ground up with more speed, reliability, a cleaner UI, better privacy, and a complete rewrite of the core DNS engine.",
    details: [
      "🔹 Direct DNS: Fast, clean, and stable DNS resolver at dns.kabirinvents.com",
      "🔹 Private DNS (DoT): Fully encrypted DNS for Android devices at pdns.kabirinvents.com",
      "🔹 Oracle Cloud Network: Up to 10 Gbps bandwidth, 500,000 QPS capability, stronger uptime",
      "🔹 New Website: Dashboard + documentation at kabirdns.kabirinvents.com",
      "🔹 Brand New Logo: Fresh identity for the next stage of networking technology"
    ],
    outro: (
      <>
        <p className="mt-4 font-semibold">How to Start Using KabirDNS:</p>
        <ul className="mt-2 space-y-1 list-none pl-0">
          <li><strong>Android Private DNS:</strong> Settings → Network & Internet → Private DNS → Enter: pdns.kabirinvents.com</li>
          <li><strong>Windows, Mac, Linux:</strong> Set DNS resolver to: dns.kabirinvents.com</li>
        </ul>
        <Link href="https://kabirdns.kabirinvents.com" target="_blank" rel="noopener noreferrer">
          <Button className="mt-4">Try KabirDNS Today</Button>
        </Link>
      </>
    )
  },
  {
    icon: "📢",
    title: "Important Announcement: Qsolve Is Permanently Discontinued",
    date: "December 9, 2025 (Age 12)",
    description: "This update also marks the end of an older project. Qsolve successfully ran for 3 to 4 months and may still appear on the Google Play Store, but development, support, and updates have fully ended. It will no longer receive fixes or improvements. Users are encouraged to switch to KabirDNS for the latest technology.",
    outro: (
      <p className="mt-4 italic">KabirDNS represents the next stage of our networking technology. Thank you to everyone who supported Qsolve during its 3–4 month journey — it was an amazing experimental project, but it's time to move forward. KabirDNS will now be our main focus, with new features, performance upgrades, and more services coming soon. — KabirInvents</p>
    )
  },
  {
    icon: "🚀",
    title: "FastPass Beta 1.0 is Here!",
    date: "November 24, 2025 (Age 12)",
    description: "After a long time of fixing and debugging, the first public beta of FastPass is officially OUT! We're so excited for you to try it out. Whether you're a user tired of filling out forms or a developer looking for a simple login solution, FastPass is for you. It acts as a centralized 'passport' for your personal information, allowing you to instantly pre-fill forms or sign into third-party applications with a single click.",
    outro: (
      <Link href="https://fastpass.kabirinvents.com" target="_blank" rel="noopener noreferrer">
        <Button className="mt-4">Try FastPass Beta</Button>
      </Link>
    )
  },
  {
    icon: "🤝",
    title: "A New Direction: Focusing on a New Venture",
    date: "November 17, 2025 (Age 12)",
    description: "Today marks a major shift. I've decided to pause all my existing projects, including the Pulse ecosystem and my hardware experiments. I'm now channeling all my energy into a new, more ambitious venture with a partner. This is a step towards building something bigger and more useful than ever before. While my previous projects taught me invaluable lessons, I'm excited to fully dedicate myself to this next chapter.",
    outro: "Stay tuned for what's to come. The journey is just getting started."
  },
  {
    icon: "🏗️",
    title: "My Official Brand Launch",
    date: "November 2025 (Age 12)",
    description: "kabirinvents.com went live — a digital home that connects everything I’ve ever built: Qsolve, Pulse apps, 3D designs, and my maker projects. From 3D prints to AI web apps, everything now lives under one brand — Kabir Gagneja Invents.",
  },
  {
    icon: "🧭",
    title: "Rebirth of Publishing — New Google Play Console",
    date: "September 4, 2025 (Age 12)",
    description: "After losing my first one, I opened a new Play Console account. This time, I built it more carefully, adding new apps, structured testing, and verified builds. The road to relaunching my creations on Android officially began here.",
  },
  {
    icon: "🌐",
    title: "A New Chapter — My Own Domain (.com Launch)",
    date: "November 2025 (Age 12 — Today)",
    description: "Today marks a new beginning. I officially own kabirinvents.com and its subdomains, hosted on Firebase and protected by Cloudflare SSL. This is my online home — where all my projects, apps, and creations connect under one identity.",
    details: [
      "kabirinvents.com → Official website",
      "qsolve.kabirinvents.com → Live AI app",
      "store.kabirinvents.store → My Carousell listings & 3D prints"
    ],
    outro: "This domain isn’t just a website — it’s the foundation of my future."
  },
  {
    icon: "📚",
    title: "Qsolve — AI for Learning",
    date: "September 5, 2025 - December 9, 2025 (Age 12)",
    description: "I built Qsolve, an AI-powered study companion that scans images, extracts questions, and explains answers step by step. It became my first major public web app, hosted at qsolve.kabirinvents.com. It gained production access on September 20, 2025, proving that my projects could go beyond experiments and actually help people. After successfully running for 3-4 months, Qsolve has been permanently discontinued as I transition focus to KabirDNS and other new ventures."
  },
  {
    icon: "🌐",
    title: "The Pulse Era Begins (.qzz.io Phase)",
    date: "September 2025 (Age 12)",
    description: "This was the birth of something massive — the Pulse Ecosystem 🌍. I launched my first connected network of apps, each with its own identity:",
    details: [
        "🔵 Pulse Circle — Social networking platform (currently in development, first active app)",
        "🔐 Pulse Auth — Login and authentication system (paused)",
        "📄 Pulse Docs — Document editing + OCR (paused)",
        "💻 Pulse Host — Web hosting dashboard (currently in development)",
        "🧩 Pulse Hub — Central dashboard (discontinued, merged with Circle)",
        "⚙️ Pulse Dev — Developer console (paused)"
    ],
    outro: "This was my first time building an ecosystem instead of just one app — and it worked beautifully under .qzz.io subdomains."
  },
  {
    icon: "🤖",
    title: "StudyAI — The Early AI Phase",
    date: "October 2024 (Age 11)",
    description: "I built StudyAI, an app that generated worksheets, comprehension questions, and tests for students like me. It worked well, but after two months, I discontinued it. This taught me that not every project needs to succeed — some are just steps to better ideas.",
  },
  {
    icon: "💰",
    title: "My First Web App — Expense Tracker",
    date: "September 2024 (Age 11)",
    description: "I designed a purple/blue-themed Expense Tracker web app with charts, OCR, and AI summaries. It looked amazing — futuristic, modern, and full of potential. But after 2 months, I hit a wall. It wasn’t going anywhere. I eventually gave up, but the lessons I learned about UI design and Firebase Hosting stayed with me.",
  },
  {
    icon: "🖨️",
    title: "3D Printing Era Begins",
    date: "July 2024 (Age 11)",
    description: "With my Elegoo Neptune 2S 3D printer, I began turning my digital designs into physical creations. From a Fire-Boltt Dream TinyPod stand to custom Xbox 360 shells and phone stands, I learned how design, precision, and patience come together. Each print reminded me that imagination has no limits.",
  },
  {
    icon: "⚙️",
    title: "Becoming a Maker — Hardware & Electronics",
    date: "Mid 2024 (Age 11)",
    description: "I began experimenting with Arduino, ESP32, and Raspberry Pi 1A+ — diving deep into electronics. I built my first servo-powered cable car, designed futuristic shells, and started learning how real-world machines connect with code.",
  },
  {
    icon: "💔",
    title: "Setback: My Play Console Was Deleted",
    date: "June 2024 (Age 11)",
    description: "This was tough. My Google Play Console was deleted, and with it, every app I’d uploaded disappeared. It felt like years of work were gone overnight. But that moment also taught me resilience — how to start over stronger and rebuild everything from scratch.",
  },
  {
    icon: "🚀",
    title: "Launched My First App",
    date: "August 2022 (Age 9)",
    description: "After two years of experimenting, I published my very first app. It wasn’t fancy — but it was 100% mine. That launch made me realize something big: I didn’t just want to learn tech… I wanted to build with it.",
  },
  {
    icon: "💻",
    title: "Learning to Code",
    date: "2020 (Age 7)",
    description: "I started taking coding classes, learning the basics of programming and logic. Each time I made something move, change color, or react to input, I felt like a magician controlling the digital world. That feeling never went away — it only got stronger.",
  },
  {
    icon: "👶",
    title: "The Beginning of Curiosity",
    date: "2019–2020",
    description: "Even before I understood what coding really was, I was fascinated by how apps, gadgets, and machines worked. I’d open up toys, experiment with tablets, and wonder: “How does this actually work?” That curiosity soon turned into my first step toward coding.",
  },
];

const projectStatus = [
    { name: "KabirDNS", status: "🚀 Live & Active", description: "Fast, secure DNS resolver powered by Oracle Cloud." },
    { name: "FastPass", status: "🚀 Live in Beta", description: "Digital identity service for autofill and SSO." },
    { name: "Qsolve", status: "❌ Discontinued", description: "AI-powered homework helper (ran 3-4 months, now ended)" },
    { name: "Pulse Ecosystem", status: "❌ Discontinued", description: "All apps in the Pulse ecosystem are now paused." },
    { name: "Kabir Gagneja Invents Store", status: "📦 Archived", description: "Archived, but viewable at kabirinvents.store" },
    { name: "Hardware Projects", status: "❌ Discontinued", description: "Arduino, 3D printing, and other maker projects are on hold." },
    { name: "Other Past Ideas", status: "❌ Discontinued", description: "Includes Kardz, MakeMyApp, AndroWatch, SyncBand, etc." },
  ];


export default function BlogPage() {
  return (
    <div className="container max-w-5xl py-12 md:py-24 lg:py-32">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div>
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
            My Journey
          </h1>
          <div className="mt-4 space-y-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            <p>
             The Story of Kabir Gagneja Invents
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">
             “Every great idea starts small — a spark of curiosity, a problem to solve, and the courage to keep going.”
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-12">
            <p className="text-center text-lg italic text-muted-foreground">
             I’m Kabir Gagneja, 12 years old, and this is my story — from my first lines of code to creating my own digital ecosystem.
            </p>

            {journeySections.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <h3 className="text-2xl font-headline font-semibold mt-1">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  {item.details && (
                    <ul className="mt-4 space-y-2 text-muted-foreground list-none pl-0">
                      {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  )}
                  {item.outro && <div className="mt-4 text-muted-foreground">{item.outro}</div>}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-2xl font-headline font-semibold mt-12 mb-4 text-center">📊 Current Project Status (as of November 2025)</h3>
               <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectStatus.map((project) => (
                      <TableRow key={project.name}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.status}</TableCell>
                        <TableCell>{project.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
                <h3 className="text-2xl font-headline font-semibold mt-12 mb-4 text-center">🌈 What’s Next — The Future of My Journey</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    <div>
                        <h4 className="font-bold text-lg mb-2">✨ Short-term goals:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Focus entirely on the new secret project.</li>
                            <li>Grow and improve KabirDNS with new features.</li>
                            <li>Continue supporting FastPass Beta users.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">⚙️ Medium-term goals:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Launch the new project with my partner.</li>
                            <li>Explore new frontiers in AI and software.</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="font-bold text-lg mb-2">🚀 Long-term dream:</h4>
                        <p className="text-muted-foreground">
                          To build a groundbreaking company that creates technology to help millions of people.
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center text-lg italic text-muted-foreground pt-8">
              “I’m not just building apps — I’m building a future where my imagination never runs out of code.”<br/>— Kabir Gagneja, age 12
            </p>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    