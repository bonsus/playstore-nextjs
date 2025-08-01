import Image from 'next/image';
import Link from 'next/link';
import { Star, Download } from 'lucide-react';

interface App {
  appId: string;
  id?: string;
  title: string;
  icon: string;
  score?: number;
  scoreText?: string;
  installs?: string;
  genre?: string;
  free?: boolean;
  price?: string;
  currency?: string;
}

interface HomeAppCardProps {
  app: App;
}

export default function HomeAppCard({ app }: HomeAppCardProps) {
  const appLink = `/app/${app.appId || app.id}`;
  
  // Format installs count
  const formatInstalls = (installs: string | undefined) => {
    if (!installs) return '';
    
    if (installs.includes('+')) {
      return installs;
    }
    
    const num = parseInt(installs.replace(/[^\d]/g, ''));
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return installs;
  };

  return (
    <Link href={appLink} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 p-4">
        {/* App Icon and Basic Info */}
        <div className="flex items-start space-x-3 mb-3">
          <div className="relative flex-shrink-0">
            <Image
              src={app.icon}
              alt={`${app.title} icon`}
              width={56}
              height={56}
              className="rounded-xl border border-gray-200"
              unoptimized
            />
            {!app.free && (
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {app.currency === 'USD' ? '$' : app.currency}{app.price}
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
              {app.title}
            </h3>
            
            {app.genre && (
              <p className="text-xs text-gray-500 mt-1 capitalize">
                {app.genre}
              </p>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          {/* Rating */}
          {app.score && (
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-700">
                {typeof app.score === 'number' ? app.score.toFixed(1) : app.score}
              </span>
            </div>
          )}
          
          {/* Downloads */}
          {app.installs && (
            <div className="flex items-center space-x-1">
              <Download className="w-3 h-3" />
              <span>{formatInstalls(app.installs)}</span>
            </div>
          )}
          
          {/* Free/Paid Badge */}
          <div className="flex-shrink-0">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              app.free 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {app.free ? 'Free' : 'Paid'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
