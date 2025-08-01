import { Metadata } from 'next';
import { Shield, Users, Search, Download, Star, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - APKmory | Discover Amazing Android Apps',
  description: 'Learn about APKmory, your trusted source for Android app discovery. Find the best apps, games, and utilities with detailed information and reviews.',
  keywords: ['about apkmory', 'android apps', 'app discovery', 'mobile apps'],
  openGraph: {
    title: 'About APKmory - Your Android App Discovery Platform',
    description: 'Learn about APKmory, your trusted source for Android app discovery.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About APKmory</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted companion for discovering amazing Android apps and games
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
        <div className="text-center mb-8">
          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At APKmory, we believe everyone deserves access to the best Android applications. 
            Our mission is to help users discover, explore, and find detailed information about 
            Android apps and games from the Google Play Store, making app discovery simple and enjoyable.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">App Discovery</h3>
            <p className="text-gray-600">
              Powerful search and browsing tools to help you find the perfect apps for your needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Reviews</h3>
            <p className="text-gray-600">
              Comprehensive app information including ratings, reviews, screenshots, and descriptions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibent text-gray-900 mb-2">Safe & Reliable</h3>
            <p className="text-gray-600">
              All app information is sourced directly from Google Play Store for accuracy and safety.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            APKmory was born from the simple idea that finding great Android apps shouldn&apos;t be complicated. 
            With millions of apps available on the Google Play Store, users often struggle to discover 
            quality applications that meet their specific needs.
          </p>
          <p className="mb-4">
            Our team of passionate developers and app enthusiasts created APKmory to bridge this gap. 
            We provide a curated, organized, and user-friendly platform where you can explore apps by 
            categories, read detailed information, and make informed decisions before downloading.
          </p>
          <p>
            We&apos;re committed to continuously improving our platform, adding new features, and helping 
            users discover the apps that will enhance their mobile experience.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <Users className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Centric</h3>
            <p className="text-gray-600">
              Everything we do is focused on providing the best possible experience for our users.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <Shield className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
            <p className="text-gray-600">
              We provide accurate, up-to-date information sourced directly from official channels.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <Download className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-gray-600">
              We make app discovery accessible to everyone, regardless of technical expertise.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <Star className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">
              We maintain high standards in everything we do, from content quality to user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6 opacity-90">
          Have questions, suggestions, or feedback? We&apos;d love to hear from you!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
