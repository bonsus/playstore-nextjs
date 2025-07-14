import gplay from 'google-play-scraper';
import { 
  getCachedApp, 
  setCachedApp, 
  getCachedSearch, 
  setCachedSearch,
  getCachedCategory,
  setCachedCategory 
} from './database.js';

export async function searchApps(query, options = {}) {
  try {
    // Check cache first
    const cached = getCachedSearch(query);
    if (cached) {
      return cached;
    }

    const results = await gplay.search({
      term: query,
      num: options.limit || 50,
      country: 'id',
      lang: 'id'
    });
    console.log('Search results:', results);

    // Cache results
    setCachedSearch(query, results);
    return results;
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

export async function getAppDetails(appId) {
  try {
    // Check cache first
    const cached = getCachedApp(appId);
    if (cached) {
      return cached;
    }

    const app = await gplay.app({
      appId: appId,
      country: 'id',
      lang: 'id'
    });

    // Cache app details
    setCachedApp(appId, app);
    return app;
  } catch (error) {
    console.error('App details error:', error);
    return null;
  }
}

export async function getAppsByCategory(category, options = {}) {
  try {
    // Check cache first
    const cached = getCachedCategory(category);
    if (cached) {
      return cached;
    }

    const results = await gplay.list({
      category: category,
      collection: gplay.collection.TOP_FREE,
      num: options.limit || 50,
      country: 'id',
      lang: 'id'
    });

    // Cache results
    setCachedCategory(category, results);
    return results;
  } catch (error) {
    console.error('Category error:', error);
    return [];
  }
}