import { searchApps } from '@/lib/playstore';
import { getCachedRelatedApps, setCachedRelatedApps } from '@/lib/database';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: appId } = await params;
    const { searchParams } = new URL(request.url);
    const appName = searchParams.get('name') || '';
    const appGenre = searchParams.get('genre') || '';
    
    if (!appName) {
      return Response.json({ error: 'App name is required' }, { status: 400 });
    }
    
    // Check cache first
    const cachedRelatedApps = getCachedRelatedApps(appId);
    if (cachedRelatedApps) {
      console.log(`Returning cached related apps for ${appId}`);
      return Response.json({ 
        relatedApps: cachedRelatedApps,
        source: 'cache'
      });
    }
    
    let relatedApps = [];
    
    // Extract meaningful search terms from app name
    const searchTerms = appName
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove special characters
      .split(' ')
      .filter(term => term.length > 2) // Only words longer than 2 characters
      .slice(0, 3); // Take first 3 meaningful words
    
    // Try searching with different strategies
    const searchStrategies = [
      // Strategy 1: Use genre if available
      ...(appGenre ? [appGenre] : []),
      // Strategy 2: Use individual meaningful words from app name
      ...searchTerms,
      // Strategy 3: Use first two words combined
      searchTerms.length >= 2 ? searchTerms.slice(0, 2).join(' ') : null,
      // Strategy 4: Use full app name as last resort
      appName
    ].filter(Boolean);
    
    // Try each search strategy until we get good results
    for (const searchTerm of searchStrategies) {
      try {
        console.log(`Searching Play Store for: "${searchTerm}"`);
        const searchResults = await searchApps(searchTerm, { limit: 12 });
        
        if (searchResults && searchResults.length > 0) {
          // Filter out the current app and limit results
          const filtered = searchResults
            .filter((app: any) => app.appId !== appId)
            .slice(0, 6);
          
          if (filtered.length >= 3) { // Only use if we get at least 3 related apps
            relatedApps = filtered;
            console.log(`Found ${filtered.length} related apps using search term: "${searchTerm}"`);
            break;
          }
        }
      } catch (searchError) {
        console.error(`Error searching for "${searchTerm}":`, searchError);
        continue;
      }
    }
    
    // Cache the results if we found any
    if (relatedApps.length > 0) {
      setCachedRelatedApps(appId, relatedApps);
      console.log(`Cached ${relatedApps.length} related apps for ${appId}`);
    }
    
    return Response.json({ 
      relatedApps,
      source: 'playstore',
      searchTerm: relatedApps.length > 0 ? 'Play Store search' : 'No results'
    });
    
  } catch (error) {
    console.error('Error fetching related apps:', error);
    return Response.json({ error: 'Failed to fetch related apps' }, { status: 500 });
  }
}
