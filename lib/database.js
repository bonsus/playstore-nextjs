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