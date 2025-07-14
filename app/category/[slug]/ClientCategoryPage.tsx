'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import AppCard from '@/components/AppCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Smartphone, Gamepad2 } from 'lucide-react';

export default function ClientCategoryPage() {
  const params = useParams();
  const category = params.slug as string;
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (category) {
      loadCategoryApps(category);
    }
  }, [category]);

  const loadCategoryApps = async (categoryName: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/category/${categoryName}`);
      if (!response.ok) throw new Error('Failed to load category');

      const data = await response.json();
      setApps(data.apps || []);
    } catch (err) {
      setError('Failed to load apps. Please try again.');
      console.error('Category error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryTitle = (cat: string) => {
    const titles: { [key: string]: string } = {
      'apps': 'Apps',
      'games': 'Games',
      'music': 'Music & Audio',
      'photography': 'Photography',
      'books': 'Books & Reference',
      'auto': 'Auto & Vehicles',
      'health': 'Health & Fitness',
      'business': 'Business'
    };
    return titles[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const getCategoryIcon = (cat: string) => {
    if (cat === 'games') return Gamepad2;
    return Smartphone;
  };

  const CategoryIcon = getCategoryIcon(category);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <CategoryIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {getCategoryTitle(category)}
          </h1>
        </div>
        <p className="text-gray-600">
          Discover the best {getCategoryTitle(category).toLowerCase()} on Google Play Store
        </p>
      </div>

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && apps.length === 0 && (
        <div className="text-center py-12">
          <CategoryIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h2>
          <p className="text-gray-600">
            This category is currently empty or unavailable.
          </p>
        </div>
      )}

      {/* Apps Grid */}
      {apps.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app: any) => (
            <AppCard key={app.appId} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
