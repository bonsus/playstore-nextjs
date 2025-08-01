import { getRelatedAppsFromSearch } from '@/lib/database';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: appId } = await params;
    const { searchParams } = new URL(request.url);
    const appName = searchParams.get('name') || '';
    
    if (!appName) {
      return Response.json({ error: 'App name is required' }, { status: 400 });
    }
    
    // Extract meaningful search terms from app name
    const searchTerms = appName
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove special characters
      .split(' ')
      .filter(term => term.length > 2) // Only words longer than 2 characters
      .slice(0, 3); // Take first 3 meaningful words
    
    let relatedApps = [];
    
    // Try each search term to find related apps
    for (const term of searchTerms) {
      const apps = getRelatedAppsFromSearch(term, appId, 8);
      if (apps.length > 0) {
        relatedApps = apps;
        break;
      }
    }
    
    // If no related apps found, try with full app name
    if (relatedApps.length === 0) {
      relatedApps = getRelatedAppsFromSearch(appName, appId, 6);
    }
    
    return Response.json({ 
      relatedApps: relatedApps.slice(0, 6) // Limit to 6 apps
    });
    
  } catch (error) {
    console.error('Error fetching related apps:', error);
    return Response.json({ error: 'Failed to fetch related apps' }, { status: 500 });
  }
}
