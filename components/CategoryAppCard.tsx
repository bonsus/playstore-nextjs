import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface App {
  appId: string;
  id?: string;
  title: string;
  icon: string;
  summary?: string;
  description?: string;
  score?: number;
  scoreText?: string;
  installs?: string;
  genre?: string;
}

interface CategoryAppCardProps {
  app: App;
}

export default function CategoryAppCard({ app }: CategoryAppCardProps) {
  const appLink = `/app/${app.appId || app.id}`;
  
  // Get description or summary, truncate if too long
  const getDescription = () => {
    const desc = app.summary || app.description || '';
    if (desc.length > 80) {
      return desc.substring(0, 80) + '...';
    }
    return desc;
  };

  return (
    <Link href={appLink} className="group">
      <div className="bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 p-4">
        <div className="flex items-center space-x-4">
          {/* App Icon */}
          <div className="flex-shrink-0">
            <Image
              src={app.icon}
              alt={`${app.title} icon`}
              width={60}
              height={60}
              className="rounded-lg border border-gray-200"
              unoptimized
            />
          </div>
          
          {/* App Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base group-hover:text-blue-600 transition-colors line-clamp-1">
                  {app.title}
                </h3>
                
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {getDescription()}
                </p>
              </div>
              
              {/* Rating */}
              {app.score && (
                <div className="flex items-center space-x-1 ml-4 flex-shrink-0">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {typeof app.score === 'number' ? app.score.toFixed(1) : app.score}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
