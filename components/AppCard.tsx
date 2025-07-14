'use client';

import Link from 'next/link';
import { Star, Download } from 'lucide-react';

interface AppCardProps {
  app: {
    appId: string;
    title: string;
    icon: string;
    developer: string;
    score: number;
    scoreText: string;
    installs: string;
    summary?: string;
  };
}

export default function AppCard({ app }: AppCardProps) {
  const formatInstalls = (installs: string) => {
    return installs?.replace(/[^\d,]/g, '') || 'N/A';
  };

  return (
    <Link href={`/app/${app.appId}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="flex items-start space-x-3">
          {/* App Icon */}
          <div className="flex-shrink-0">
            <img
              src={app.icon || '/api/placeholder/48/48'}
              alt={app.title}
              className="w-12 h-12 rounded-xl object-cover"
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/48/48';
              }}
            />
          </div>

          {/* App Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 truncate">
              {app.title}
            </h3>
            <p className="text-xs text-gray-600 truncate mt-1">
              {app.developer}
            </p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-700">
                  {app.score ? app.score.toFixed(1) : 'N/A'}
                </span>
              </div>
              <span className="text-xs text-gray-500 ml-2">
                ({app.scoreText || 'No reviews'})
              </span>
            </div>

            {/* Installs */}
            <div className="flex items-center mt-1">
              <Download className="w-3 h-3 text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">
                {formatInstalls(app.installs)} downloads
              </span>
            </div>

            {/* Summary */}
            {app.summary && (
              <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                {app.summary}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}