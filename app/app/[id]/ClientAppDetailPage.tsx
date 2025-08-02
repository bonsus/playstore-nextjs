'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Star, Download, Calendar, ExternalLink, User, Shield, Grid3X3, BookOpen, Clock } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';
import AppCard from '@/components/AppCard';
import { getRandomArticles } from '@/lib/articles';
import Link from 'next/link';
import Image from 'next/image';

export default function ClientAppDetailPage() {
  const params = useParams();
  const appId = params.id as string;
  const [app, setApp] = useState<any>(null);
  const [relatedApps, setRelatedApps] = useState<any[]>([]);
  const [randomArticles, setRandomArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (appId) {
      loadAppDetails(appId);
    }
  }, [appId]);

  useEffect(() => {
    if (app && app.title) {
      loadRelatedApps(appId, app.title, app.genre);
    }
  }, [app, appId]);

  useEffect(() => {
    // Load random articles when component mounts
    const articles = getRandomArticles(3);
    setRandomArticles(articles);
  }, []);

  const loadAppDetails = async (id: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/app/${id}`);
      if (!response.ok) throw new Error('Failed to load app details');
      
      const data = await response.json();
      setApp(data.app);
    } catch (err) {
      setError('Failed to load app details. Please try again.');
      console.error('App details error:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadRelatedApps = async (id: string, appName: string, appGenre?: string) => {
    setRelatedLoading(true);
    
    try {
      const params = new URLSearchParams({
        name: appName,
        ...(appGenre && { genre: appGenre })
      });
      
      const response = await fetch(`/api/app/${id}/related?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setRelatedApps(data.relatedApps || []);
        console.log('Related apps loaded:', data.relatedApps?.length || 0, 
                   `(Source: ${data.source || 'unknown'})`);
      }
    } catch (err) {
      console.error('Related apps error:', err);
    } finally {
      setRelatedLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const formatInstalls = (installs: string) => {
    return installs?.replace(/[^\d,]/g, '') || 'N/A';
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">App not found</h2>
          <p className="text-gray-600">The requested app could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* App Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:space-x-4">
          <img
            src={app.icon || '/api/placeholder/96/96'}
            alt={app.title}
            className="w-full md:w-24 md:h-24 mb-3 rounded-2xl object-cover shadow-md"
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/96/96';
            }}
          />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
            <div className="flex items-center space-x-1 text-gray-600 mb-3">
              <User className="w-4 h-4" />
              <span>{app.developer}</span>
            </div>
            
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">{app.score?.toFixed(1) || 'N/A'}</span>
                <span className="text-gray-500">({app.scoreText || 'No reviews'})</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4 text-gray-400" />
                <span>{formatInstalls(app.installs)} downloads</span>
              </div>
            </div>
            
            <a
              href={app.url || `https://play.google.com/store/apps/details?id=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View on Google Play</span>
            </a>
          </div>
        </div>
      </div>

      {/* App Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">App Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Version:</span>
              <span className="font-medium">{app.version || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Updated:</span>
              <span className="font-medium">{formatDate(app.updated)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Size:</span>
              <span className="font-medium">{app.size || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{app.genre || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Content Rating:</span>
              <span className="font-medium">{app.contentRating || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Rating & Reviews</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="text-4xl font-bold text-gray-900">{app.score?.toFixed(1) || 'N/A'}</div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(app.score || 0)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{app.scoreText || 'No reviews'}</div>
              </div>
            </div>
            
            {app.reviews && (
              <div className="text-sm text-gray-600">
                Based on {app.reviews} user reviews
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      {app.screenshots && app.screenshots.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {app.screenshots.slice(0, 8).map((screenshot: string, index: number) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {app.description || app.summary || 'No description available.'}
          </p>
        </div>
      </div>

      {/* Related Apps */}
      {relatedApps.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center mb-6">
            <Grid3X3 className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Related Apps</h2>
          </div>
          
          {relatedLoading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedApps.map((relatedApp) => (
                <AppCard key={relatedApp.appId} app={relatedApp} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Random Articles */}
      {randomArticles.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Recommended Articles</h2>
            </div>
            <Link href="/articles" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {randomArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="group bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
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
      )}
    </div>
  );
}
