import CategoryGrid from '@/components/CategoryGrid';
import AppCard from '@/components/AppCard';
import { Search, TrendingUp, Star, Clock, Shuffle, Gamepad2, MessageSquare, Music, Camera, Book, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { getRecentAppsWithData, getRandomAppsWithData, getAppsByCategoryFromSearch } from '@/lib/database';
import Link from 'next/link';

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

export default function Home() {
  // Get recent and random apps (server-side)
  let recentApps = [];
  let randomApps = [];
  let gamesApps = [];
  let communicationApps = [];
  let musicApps = [];
  let photographyApps = [];
  let educationApps = [];
  let productivityApps = [];
  
  try {
    recentApps = getRecentAppsWithData(6);
    randomApps = getRandomAppsWithData(6);
    
    // Get apps from different categories
    gamesApps = getAppsByCategoryFromSearch('games', 6);
    communicationApps = getAppsByCategoryFromSearch('communication', 6);
    musicApps = getAppsByCategoryFromSearch('music', 6);
    photographyApps = getAppsByCategoryFromSearch('photography', 6);
    educationApps = getAppsByCategoryFromSearch('education', 6);
    productivityApps = getAppsByCategoryFromSearch('productivity', 6);
  } catch (error) {
    console.error('Error fetching apps for homepage:', error);
  }

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
              <AppCard key={app.appId} app={app} />
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
              <AppCard key={app.appId} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Games Section */}
      {gamesApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Gamepad2 className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Popular Games</h2>
            </div>
            <Link href="/category/games" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamesApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Communication Apps Section */}
      {communicationApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Communication</h2>
            </div>
            <Link href="/category/communication" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communicationApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Music & Audio Section */}
      {musicApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Music className="w-6 h-6 text-red-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Music & Audio</h2>
            </div>
            <Link href="/category/music" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {musicApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Photography Section */}
      {photographyApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Camera className="w-6 h-6 text-pink-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Photography</h2>
            </div>
            <Link href="/category/photography" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photographyApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {educationApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Book className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <Link href="/category/education" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

      {/* Productivity Section */}
      {productivityApps.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-yellow-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Productivity</h2>
            </div>
            <Link href="/category/productivity" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productivityApps.map((app: any) => (
              <AppCard key={app.appId || app.id} app={app} />
            ))}
          </div>
        </div>
      )}

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