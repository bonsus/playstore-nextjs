'use client';

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import AppCard from '@/components/AppCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Search } from 'lucide-react';

export default function SearchPage() { 
  const params = useParams();
  const query = (params.slug as string)?.replace(/-/g, ' '); 
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      searchApps(query);
    }
  }, [query]);

  const searchApps = async (searchQuery: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Search failed');
      
      const data = await response.json();
      setApps(data.apps || []);
    } catch (err) {
      setError('Failed to search apps. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2"> 
          <h1 className="text-2xl font-bold text-gray-900">{query}</h1>
        </div>
        {query && (
          <p className="text-gray-600">
            Results {apps.length > 0 && `(${apps.length} apps found)`}
          </p>
        )}
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
      {!loading && !error && apps.length === 0 && query && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h2>
          <p className="text-gray-600">
            Try different keywords or check your spelling.
          </p>
        </div>
      )}

      {/* Results Grid */}
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