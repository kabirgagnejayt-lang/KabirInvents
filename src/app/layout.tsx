import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || []
  const baseUrl = "https://kabirinvents.com";
  // The next-canonical library needs the full URL, including the search
  // parameters, to handle dynamic routes. The `asPath` is not available on
  // the server, so we need to construct it manually.
  const pathname = (parent as any).metadataBase || '/';
  const fullUrl = new URL(pathname, baseUrl).toString();

  return {
    metadataBase: new URL(baseUrl),
    title: 'Kabir Gagneja Invents | Invent. Code. Create.',
    description: 'The official showcase of Kabir Gagneja — inventor, coder, and maker.',
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': '/',
      },
    },
    openGraph: {
      images: ['/og-image.png', ...previousImages],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const SupportBanner = () => (
  <div className="bg-accent text-accent-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-10 items-center justify-center text-center text-sm font-medium">
        <p>
          Enjoy my work?{' '}
          <Link
            href="/support"
            className="font-bold underline underline-offset-4 hover:opacity-80"
          >
            Consider buying me a coffee!
          </Link>
        </p>
      </div>
    </div>
  </div>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://kabirinvents.com/",
            "name": "Kabir Invents",
            "alternateName": "KabirGagnejaInvents",
            "sameAs": [
              "https://kabirinvents.store/",
              "https://kabirinvents.site/"
            ]
          }) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <SupportBanner />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
