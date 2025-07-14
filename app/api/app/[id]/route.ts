import { NextRequest, NextResponse } from 'next/server';
import { getAppDetails } from '@/lib/playstore';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const appId = params.id;

  if (!appId) {
    return NextResponse.json(
      { error: 'App ID is required' },
      { status: 400 }
    );
  }

  try {
    const app = await getAppDetails(appId);
    
    if (!app) {
      return NextResponse.json(
        { error: 'App not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ app });
  } catch (error) {
    console.error('App details API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch app details' },
      { status: 500 }
    );
  }
}