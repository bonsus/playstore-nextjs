import { Metadata } from 'next';
import { getAllCachedApps, getAllCachedSearches, getAllCachedCategories } from '@/lib/database';
import Link from 'next/link';
import { MapPin, Calendar, Star, Search, Folder, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Apkmory',
  description: 'Browse through all pages on APK Store. Find apps, categories, search results and detailed app information organized for easy navigation.',
  keywords: ['sitemap', 'navigation', 'site map', 'apk store pages', 'browse apps'],
  openGraph: {
    title: 'Sitemap - APK Store Navigation',
    description: 'Browse through all pages on APK Store. Find apps, categories, and search results.',
    type: 'website',
  },
};

export default function SitemapPage() {
  let cachedApps: any[] = [];
  let cachedSearches: any[] = [];
  let cachedCategories: any[] = [];

  try {
    cachedApps = getAllCachedApps().slice(0, 50); // Limit to first 50 apps
    cachedSearches = getAllCachedSearches().slice(0, 20); // Limit to first 20 searches
    cachedCategories = getAllCachedCategories();
  } catch (error) {
    console.error('Error loading cached data:', error);
  }

  const staticCategories = ['apps', 'games', 'music', 'photography', 'books', 'auto', 'health', 'business'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <MapPin className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
        </div>
        <p className="text-gray-600 max-w-2xl">
          Navigate through all pages on APK Store. Discover apps, browse categories, and explore search results.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Pages */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Main Pages</span>
          </h2>
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Home - Discover Amazing Apps</span>
            </Link>
            <Link href="/search" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Search className="w-4 h-4" />
              <span>Search Apps</span>
            </Link>
            <Link href="/apps" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <Folder className="w-4 h-4" />
              <span>All Apps</span>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Folder className="w-5 h-5 text-green-500" />
            <span>Categories</span>
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {staticCategories.map((category) => (
              <Link 
                key={category}
                href={`/category/${category}`} 
                className="text-blue-600 hover:text-blue-800 transition-colors capitalize"
              >
                {category.replace('_', ' & ')}
              </Link>
            ))}
          </div>
          {cachedCategories.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Recently Updated Categories:</h3>
              <div className="space-y-1">
                {cachedCategories.slice(0, 5).map((category: any) => (
                  <div key={category.category} className="flex items-center justify-between text-sm">
                    <Link 
                      href={`/category/${category.category}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {category.category}
                    </Link>
                    <span className="text-gray-500 flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(category.timestamp).toLocaleDateString()}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recent Apps */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <ExternalLink className="w-5 h-5 text-purple-500" />
            <span>Recent Apps ({cachedApps.length})</span>
          </h2>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {cachedApps.length > 0 ? (
              cachedApps.map((app: any) => (
                <div key={app.id} className="flex items-center justify-between">
                  <Link 
                    href={`/app/${app.id}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors truncate flex-1 mr-2"
                  >
                    {app.id}
                  </Link>
                  <span className="text-gray-500 text-xs flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(app.timestamp).toLocaleDateString()}</span>
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No cached apps available.</p>
            )}
          </div>
        </div>

        {/* Popular Searches */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Search className="w-5 h-5 text-blue-500" />
            <span>Popular Searches ({cachedSearches.length})</span>
          </h2>
          <div className="space-y-2">
            {cachedSearches.length > 0 ? (
              cachedSearches.map((search: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1 space-y-1">
                    <Link 
                      href={`/search?q=${encodeURIComponent(search.query)}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors block"
                    >
                      {search.query}
                    </Link>
                    <Link 
                      href={`/apps/${search.query.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-500 hover:text-blue-700 transition-colors text-sm block"
                    >
                      /apps/{search.query.toLowerCase().replace(/\s+/g, '-')}
                    </Link>
                  </div>
                  <span className="text-gray-500 text-xs flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(search.timestamp).toLocaleDateString()}</span>
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No search history available.</p>
            )}
          </div>
        </div>
      </div>

      {/* XML Sitemap Link */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">XML Sitemap</h3>
        <p className="text-gray-600 mb-4">
          For search engines and automated tools, you can access our XML sitemap:
        </p>
        <Link 
          href="/sitemap.xml"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View XML Sitemap</span>
        </Link>
      </div>
    </div>
  );
}
