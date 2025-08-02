import CategoryGrid from '@/components/CategoryGrid';
import AppCard from '@/components/AppCard';
import HomeAppCard from '@/components/HomeAppCard';
import CategoryAppCard from '@/components/CategoryAppCard';
import { Search, TrendingUp, Star, Clock, Shuffle, Gamepad2, MessageSquare, Music, Camera, Book, Zap, Sprout, BookOpen } from 'lucide-react';
import { Metadata } from 'next';
import { getRecentAppsWithData, getRandomAppsWithData } from '@/lib/database';
import { searchApps } from '@/lib/playstore';
import { getRecentArticles } from '@/lib/articles';
import Link from 'next/link';
import Image from 'next/image';

// Function to fetch category apps - directly use Play Store during build
async function fetchCategoryApps(category: string, limit: number = 6) {
  try {
    // Map category names to better search terms
    const categorySearchTerms: { [key: string]: string } = {
      'games': 'games',
      'communication': 'chat messenger',
      'music': 'music audio',
      'photography': 'photo camera',
      'education': 'education learning',
      'productivity': 'productivity tools',
      'social': 'social media',
      'entertainment': 'entertainment video',
      'sports': 'sports fitness',
      'health': 'health fitness',
      'news': 'news',
      'shopping': 'shopping',
      'travel': 'travel maps',
      'weather': 'weather',
      'business': 'business finance'
    };

    const searchTerm = categorySearchTerms[category.toLowerCase()] || category;
    const apps = await searchApps(searchTerm, { limit: limit * 2 });
    
    // Take only the requested limit
    return apps.slice(0, limit);
  } catch (error) {
    console.error(`Error fetching ${category} apps:`, error);
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Apkmory - Discover Amazing Android Apps & Games',
  description: 'Explore the best Android apps and games from Google Play Store. Find detailed information, ratings, reviews, and download links for thousands of applications.',
  keywords: ['android apps', 'apk download', 'play store', 'mobile games', 'android games', 'app store'],
  openGraph: {
    title: 'Apkmory - Discover Amazing Android Apps & Games',
    description: 'Explore the best Android apps and games from Google Play Store. Find detailed information, ratings, reviews, and download links.',
    type: 'website',
  },
};

export default async function Home() {
  // Get recent and random apps from database (server-side)
  let recentApps = [];
  let randomApps = [];
  
  try {
    recentApps = getRecentAppsWithData(6);
    randomApps = getRandomAppsWithData(6);
  } catch (error) {
    console.error('Error fetching apps from database:', error);
  }

  // Get recent articles
  const recentArticles = getRecentArticles(3);

  // Get apps from different categories via API (fresh from Play Store)
  const [
    gamesApps,
    communicationApps,
    musicApps,
    photographyApps,
    educationApps,
    productivityApps,
    entertainmentApps,
    sportsApps,
    businessApps
  ] = await Promise.allSettled([
    fetchCategoryApps('games', 6),
    fetchCategoryApps('communication', 6),
    fetchCategoryApps('music', 6),
    fetchCategoryApps('photography', 6),
    fetchCategoryApps('education', 6),
    fetchCategoryApps('productivity', 6),
    fetchCategoryApps('entertainment', 6),
    fetchCategoryApps('sports', 6),
    fetchCategoryApps('business', 6)
  ]);

  // Extract successful results
  const getAppsFromResult = (result: PromiseSettledResult<any[]>) => {
    return result.status === 'fulfilled' ? result.value : [];
  };

  const gamesData = getAppsFromResult(gamesApps);
  const communicationData = getAppsFromResult(communicationApps);
  const musicData = getAppsFromResult(musicApps);
  const photographyData = getAppsFromResult(photographyApps);
  const educationData = getAppsFromResult(educationApps);
  const productivityData = getAppsFromResult(productivityApps);
  const entertainmentData = getAppsFromResult(entertainmentApps);
  const sportsData = getAppsFromResult(sportsApps);
  const businessData = getAppsFromResult(businessApps);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Apps
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the best Android apps and games from Google Play Store. 
            Find detailed information, ratings, and reviews.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <CategoryGrid />
        </div>

        {/* Recent Apps */}
        {recentApps.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Recently Added</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentApps.map((app: any) => (
                <HomeAppCard key={app.appId} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Random Apps */}
        {randomApps.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Shuffle className="w-6 h-6 text-purple-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Discover Apps</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {randomApps.map((app: any) => (
                <HomeAppCard key={app.appId} app={app} />
              ))}
            </div>
          </div>
        )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        {/* Games Section */}
        {gamesData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Gamepad2 className="w-6 h-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Popular Games</h2>
              </div>
              <Link href="/apps/games" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {gamesData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Communication Apps Section */}
        {communicationData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Communication</h2>
              </div>
              <Link href="/apps/communication" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {communicationData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Music & Audio Section */}
        {musicData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Music className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Music & Audio</h2>
              </div>
              <Link href="/apps/music" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {musicData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Photography Section */}
        {photographyData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Camera className="w-6 h-6 text-pink-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Photography</h2>
              </div>
              <Link href="/apps/photography" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {photographyData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {educationData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Book className="w-6 h-6 text-indigo-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <Link href="/apps/education" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {educationData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}

        {/* Productivity Section */}
        {productivityData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Productivity</h2>
              </div>
              <Link href="/apps/productivity" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {productivityData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}
        {/* Entertainment Section */}
        {entertainmentData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Star className="w-6 h-6 text-purple-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Entertainment</h2>
              </div>
              <Link href="/apps/entertainment" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {entertainmentData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}
        {/* Sports Section */}
        {sportsData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Sprout className="w-6 h-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Sports</h2>
              </div>
              <Link href="/apps/sports" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {sportsData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}
        {/* Business Section */}
        {businessData.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Star className="w-6 h-6 text-yellow-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Business</h2>
              </div>
              <Link href="/apps/business" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {businessData.map((app: any) => (
                <CategoryAppCard key={app.appId || app.id} app={app} />
              ))}
            </div>
          </div>
        )}
      </div>

        {/* Latest Articles Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <Link href="/articles" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Find exactly what you&apos;re looking for with our powerful search engine.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trending Apps</h3>
            <p className="text-gray-600">
              Stay updated with the latest trending apps and games.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Reviews</h3>
            <p className="text-gray-600">
              Read comprehensive reviews and ratings before downloading.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start discovering amazing apps and games today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/apps"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse Apps
            </Link>
            <Link
              href="/category/games"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Games
            </Link>
          </div>
        </div>
    </div>
  );
}