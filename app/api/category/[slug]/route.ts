import { NextRequest, NextResponse } from 'next/server';
import { getAppsByCategory } from '@/lib/playstore';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const category = params.slug;

  if (!category) {
    return NextResponse.json(
      { error: 'Category is required' },
      { status: 400 }
    );
  }

  try {
    // Map category names to Google Play category IDs
    const categoryMapping: { [key: string]: string } = {
      'apps': 'APPLICATION',
      'games': 'GAME',
      'music': 'MUSIC_AND_AUDIO',
      'photography': 'PHOTOGRAPHY',
      'books': 'BOOKS_AND_REFERENCE',
      'auto': 'AUTO_AND_VEHICLES',
      'health': 'HEALTH_AND_FITNESS',
      'business': 'BUSINESS'
    };

    const categoryId = categoryMapping[category] || 'APPLICATION';
    const apps = await getAppsByCategory(categoryId);
    
    return NextResponse.json({ apps });
  } catch (error) {
    console.error('Category API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category apps' },
      { status: 500 }
    );
  }
}