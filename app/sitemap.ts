import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Sitemap index pointing to sub-sitemaps
  return [
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-tags.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-posts.xml`,
      lastModified: new Date(),
    },
  ];
}
