import { getAllCachedSearches } from '@/lib/database'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  let sitemapEntries = '';

  try {
    // Get cached searches from database
    const cachedSearches = getAllCachedSearches();

    // Add search pages as /apps/{query-search} format
    cachedSearches.forEach((search: any) => {
      // Convert search query to slug format
      const slugQuery = search.query.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();

      if (slugQuery) {
        const lastModified = new Date(search.timestamp).toISOString();
        sitemapEntries += `
  <url>
    <loc>${baseUrl}/apps/${slugQuery}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.4</priority>
  </url>`;
      }
    });

  } catch (error) {
    console.error('Error generating tags sitemap from database:', error);
    
    // Fallback to some common search terms if database fails
    const fallbackSearches = [
      'games', 'music', 'social', 'photo', 'video', 'messaging', 
      'shopping', 'education', 'fitness', 'productivity'
    ];
    
    fallbackSearches.forEach(term => {
      sitemapEntries += `
  <url>
    <loc>${baseUrl}/apps/${term}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.4</priority>
  </url>`;
    });
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
