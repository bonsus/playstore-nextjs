import { NextRequest, NextResponse } from 'next/server';
import { searchApps } from '@/lib/playstore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (typeof query !== 'string' || query.trim() === '') {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const apps = await searchApps(query);
    return NextResponse.json({ apps });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to search apps' },
      { status: 500 }
    );
  }
}