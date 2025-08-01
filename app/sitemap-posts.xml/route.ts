import { getAllCachedApps } from '@/lib/database'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  let sitemapEntries = '';

  try {
    // Get cached apps from database
    const cachedApps = getAllCachedApps();

    // Add app detail pages to sitemap
    cachedApps.forEach((app: any) => {
      const lastModified = new Date(app.timestamp).toISOString();
      sitemapEntries += `
  <url>
    <loc>${baseUrl}/app/${app.id}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

  } catch (error) {
    console.error('Error generating posts sitemap from database:', error);
    // If database fails, return empty sitemap
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
