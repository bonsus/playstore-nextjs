import { getAllCachedCategories } from '@/lib/database'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Static pages
  let sitemapEntries = `
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/copyright-policy</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-use</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${baseUrl}/sitemap</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;

  try {
    // Get cached categories from database
    const cachedCategories = getAllCachedCategories();

    // Add category pages based on cached data
    cachedCategories.forEach((category: any) => {
      const lastModified = new Date(category.timestamp).toISOString();
      sitemapEntries += `
  <url>
    <loc>${baseUrl}/category/${category.category}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

  } catch (error) {
    console.error('Error generating pages sitemap from database:', error);
    
    // Fallback to static categories if database fails
    const staticCategories = ['apps', 'games', 'music', 'photography', 'books', 'auto', 'health', 'business'];
    staticCategories.forEach(category => {
      sitemapEntries += `
  <url>
    <loc>${baseUrl}/category/${category}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
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
