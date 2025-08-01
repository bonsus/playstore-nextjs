import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, Grid3X3, ArrowLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | APKmory',
  description: 'The page you are looking for could not be found. Return to APKmory homepage to discover amazing Android apps and games.',
  keywords: ['404', 'page not found', 'apkmory', 'android apps'],
  openGraph: {
    title: '404 - Page Not Found | APKmory',
    description: 'The page you are looking for could not be found. Return to APKmory homepage to discover amazing Android apps and games.',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-gray-200 select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <HelpCircle className="w-16 h-16 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don&apos;t worry, let&apos;s get you back on track to discover amazing Android apps!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Homepage
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/search"
              className="inline-flex items-center justify-center px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Apps
            </Link>

            <Link
              href="/category/apps"
              className="inline-flex items-center justify-center px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/category/games"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              🎮 Games
            </Link>
            <Link
              href="/category/communication"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              💬 Communication
            </Link>
            <Link
              href="/category/photography"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              📸 Photography
            </Link>
            <Link
              href="/category/music"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              🎵 Music
            </Link>
            <Link
              href="/category/education"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              📚 Education
            </Link>
            <Link
              href="/category/productivity"
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              ⚡ Productivity
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
              contact us
            </Link>{' '}
            and let us know about the broken link.
          </p>
        </div>

        {/* Go Back Button */}
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Go back to previous page
          </button>
        </div>
      </div>
    </div>
  );
}
