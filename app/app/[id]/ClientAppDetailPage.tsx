'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Star, Download, Calendar, ExternalLink, User, Shield } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ClientAppDetailPage() {
  const params = useParams();
  const appId = params.id as string;
  const [app, setApp] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (appId) {
      loadAppDetails(appId);
    }
  }, [appId]);

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
        <div className="flex items-start space-x-4">
          <img
            src={app.icon || '/api/placeholder/96/96'}
            alt={app.title}
            className="w-24 h-24 rounded-2xl object-cover shadow-md"
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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {app.description || app.summary || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  );
}
