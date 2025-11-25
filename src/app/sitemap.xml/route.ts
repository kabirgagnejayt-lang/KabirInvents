import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://kabirinvents.com'

  const routes = [
    '/',
    '/about',
    '/blog',
    '/projects',
    '/prints',
    '/support',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
  
  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
