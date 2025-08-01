import Database from 'better-sqlite3';
import path from 'path';

let db;

function initDatabase() {
  if (!db) {
    db = new Database(path.join(process.cwd(), 'cache.db'));
    
    // Create tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS app_cache (
        id TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS search_cache (
        query TEXT PRIMARY KEY,
        results TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS category_cache (
        category TEXT PRIMARY KEY,
        results TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );
    `);
  }
  return db;
}

export function getCachedApp(appId) {
  const db = initDatabase();
  const stmt = db.prepare('SELECT data FROM app_cache WHERE id = ? AND timestamp > ?');
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  const result = stmt.get(appId, oneHourAgo);
  return result ? JSON.parse(result.data) : null;
}

export function setCachedApp(appId, data) {
  const db = initDatabase();
  const stmt = db.prepare('INSERT OR REPLACE INTO app_cache (id, data, timestamp) VALUES (?, ?, ?)');
  stmt.run(appId, JSON.stringify(data), Date.now());
}

export function getCachedSearch(query) {
  const db = initDatabase();
  const stmt = db.prepare('SELECT results FROM search_cache WHERE query = ? AND timestamp > ?');
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  const result = stmt.get(query, oneHourAgo);
  return result ? JSON.parse(result.results) : null;
}

export function setCachedSearch(query, results) {
  const db = initDatabase();
  const stmt = db.prepare('INSERT OR REPLACE INTO search_cache (query, results, timestamp) VALUES (?, ?, ?)');
  stmt.run(query, JSON.stringify(results), Date.now());
}

export function getCachedCategory(category) {
  const db = initDatabase();
  const stmt = db.prepare('SELECT results FROM category_cache WHERE category = ? AND timestamp > ?');
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  const result = stmt.get(category, oneHourAgo);
  return result ? JSON.parse(result.results) : null;
}

export function setCachedCategory(category, results) {
  const db = initDatabase();
  const stmt = db.prepare('INSERT OR REPLACE INTO category_cache (category, results, timestamp) VALUES (?, ?, ?)');
  stmt.run(category, JSON.stringify(results), Date.now());
}

// Functions for sitemap generation
export function getAllCachedApps() {
  const db = initDatabase();
  const stmt = db.prepare('SELECT id, timestamp FROM app_cache ORDER BY timestamp DESC LIMIT 1000');
  return stmt.all();
}

export function getAllCachedSearches() {
  const db = initDatabase();
  const stmt = db.prepare('SELECT query, timestamp FROM search_cache ORDER BY timestamp DESC LIMIT 100');
  return stmt.all();
}

export function getAllCachedCategories() {
  const db = initDatabase();
  const stmt = db.prepare('SELECT category, timestamp FROM category_cache ORDER BY timestamp DESC');
  return stmt.all();
}

// Get recent apps with full data for homepage
export function getRecentAppsWithData(limit = 6) {
  const db = initDatabase();
  const stmt = db.prepare('SELECT id, data, timestamp FROM app_cache ORDER BY timestamp DESC LIMIT ?');
  const results = stmt.all(limit);
  return results.map(row => ({
    id: row.id,
    timestamp: row.timestamp,
    ...JSON.parse(row.data)
  }));
}

// Get random apps with full data for homepage
export function getRandomAppsWithData(limit = 6) {
  const db = initDatabase();
  const stmt = db.prepare('SELECT id, data, timestamp FROM app_cache ORDER BY RANDOM() LIMIT ?');
  const results = stmt.all(limit);
  return results.map(row => ({
    id: row.id,
    timestamp: row.timestamp,
    ...JSON.parse(row.data)
  }));
}

// Get related apps based on search term (for single app page)
export function getRelatedAppsFromSearch(searchTerm, excludeAppId, limit = 6) {
  const db = initDatabase();
  
  try {
    // First try to find cached search results that match the search term
    const searchStmt = db.prepare('SELECT results FROM search_cache WHERE LOWER(query) LIKE ? ORDER BY timestamp DESC LIMIT 1');
    const searchResult = searchStmt.get(`%${searchTerm.toLowerCase()}%`);
    
    if (searchResult) {
      const searchData = JSON.parse(searchResult.results);
      // Filter out the current app and limit results
      const relatedApps = searchData
        .filter((app) => app.appId !== excludeAppId)
        .slice(0, limit);
      return relatedApps;
    }
    
    // Fallback: get random apps excluding current app
    const randomStmt = db.prepare('SELECT id, data, timestamp FROM app_cache WHERE id != ? ORDER BY RANDOM() LIMIT ?');
    const results = randomStmt.all(excludeAppId, limit);
    return results.map(row => ({
      id: row.id,
      timestamp: row.timestamp,
      ...JSON.parse(row.data)
    }));
    
  } catch (error) {
    console.error('Error getting related apps:', error);
    return [];
  }
}