import { NextRequest, NextResponse } from 'next/server';
import { searchApps } from '@/lib/playstore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '6');

  if (typeof category !== 'string' || category.trim() === '') {
    return NextResponse.json(
      { error: 'Category parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Use search with category-specific terms to get fresh data from Play Store
    let searchTerm = category;
    
    // Map category names to better search terms
    const categorySearchTerms: { [key: string]: string } = {
      'games': 'games',
      'communication': 'chat messenger',
      'music': 'music audio',
      'photography': 'photo camera',
      'education': 'education learning',
      'productivity': 'productivity tools',
      'social': 'social media',
      'entertainment': 'entertainment video',
      'sports': 'sports fitness',
      'health': 'health fitness',
      'news': 'news',
      'shopping': 'shopping',
      'travel': 'travel maps',
      'weather': 'weather'
    };

    if (categorySearchTerms[category.toLowerCase()]) {
      searchTerm = categorySearchTerms[category.toLowerCase()];
    }

    const apps = await searchApps(searchTerm, { limit: limit * 2 }); // Get more to filter better results
    
    // Take only the requested limit
    const limitedApps = apps.slice(0, limit);
    
    return NextResponse.json({ 
      apps: limitedApps,
      category: category,
      searchTerm: searchTerm
    });
  } catch (error) {
    console.error('Category API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category apps' },
      { status: 500 }
    );
  }
}
