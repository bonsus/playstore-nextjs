# 📱 APKmory - Android App Discovery Platform

APKmory is a modern web application built with Next.js that allows users to discover, search, and explore Android applications from the Google Play Store. It provides detailed app information, reviews, screenshots, and related app recommendations.

## ✨ Features

- 🔍 **Advanced Search**: Smart search functionality for Android apps and games
- 📱 **App Details**: Comprehensive app information including ratings, reviews, screenshots
- 🎯 **Category Browsing**: Browse apps by categories (Games, Music, Photography, etc.)
- 🔗 **Related Apps**: AI-powered related app recommendations
- 📊 **SEO Optimized**: Complete metadata, sitemaps, and search engine optimization
- 🚀 **Performance**: Intelligent caching system for fast load times
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 💰 **AdSense Ready**: Google AdSense integration for monetization

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript/JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Better-SQLite3](https://github.com/WiseLibs/better-sqlite3) for caching
- **Play Store Scraper**: [google-play-scraper](https://github.com/facundoolano/google-play-scraper)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with Radix UI primitives

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/apkmory.git
cd apkmory
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Copy the environment template:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=APKmory

# Google AdSense Configuration (Optional)
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-your-adsense-id
NEXT_PUBLIC_GOOGLE_ADSENSE_VERIFICATION_CODE=ca-pub-your-adsense-id

# Google Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-YOUR-ANALYTICS-ID

# Google Search Console (Optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Database Configuration
DATABASE_URL=./cache.db

# API Configuration
API_RATE_LIMIT=100
API_CACHE_DURATION=3600

# Development Settings
NODE_ENV=development
```

### 4. Initialize Database

The SQLite database will be automatically created when you first run the application. The following tables will be created:

- `app_cache` - Stores cached app details
- `search_cache` - Stores cached search results
- `category_cache` - Stores cached category results
- `related_apps_cache` - Stores cached related app recommendations

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📚 Play Store Scraping Library

APKmory uses the [`google-play-scraper`](https://github.com/facundoolano/google-play-scraper) library to fetch data from Google Play Store.

### Library Information

```json
{
  "name": "google-play-scraper",
  "version": "^9.1.3",
  "description": "Scrape application data from Google Play Store",
  "repository": "https://github.com/facundoolano/google-play-scraper"
}
```

### Key Features

- ✅ **App Details**: Fetch comprehensive app information
- ✅ **Search**: Search for apps with filters and sorting
- ✅ **Categories**: Browse apps by categories
- ✅ **Reviews**: Get user reviews and ratings
- ✅ **Screenshots**: Fetch app screenshots and media
- ✅ **Rate Limiting**: Built-in rate limiting to avoid blocking

### Usage Examples

```javascript
import gplay from 'google-play-scraper';

// Search for apps
const results = await gplay.search({
  term: 'WhatsApp',
  num: 20,
  country: 'id',
  lang: 'id'
});

// Get app details
const app = await gplay.app({
  appId: 'com.whatsapp',
  country: 'id',
  lang: 'id'
});

// Get apps by category
const categoryApps = await gplay.list({
  category: gplay.category.COMMUNICATION,
  collection: gplay.collection.TOP_FREE,
  num: 50,
  country: 'id',
  lang: 'id'
});
```

### Caching Strategy

APKmory implements intelligent caching to reduce API calls:

- **App Details**: 1 hour cache
- **Search Results**: 1 hour cache
- **Category Results**: 1 hour cache
- **Related Apps**: 1 hour cache

## 🏗️ Project Structure

```
apkmory/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   │   ├── page.tsx             # Homepage
│   │   ├── search/              # Search pages
│   │   ├── category/            # Category pages
│   │   ├── app/[id]/           # Single app pages
│   │   └── apps/[slug]/        # App search pages
│   ├── api/                     # API routes
│   │   ├── app/                 # App-related APIs
│   │   ├── search/              # Search API
│   │   └── category/            # Category API
│   ├── globals.css              # Global styles
│   ├── layout.tsx              # Root layout
│   ├── sitemap.ts              # Sitemap generation
│   ├── robots.ts               # Robots.txt generation
│   └── ads.txt/                # Ads.txt for AdSense
├── components/                  # Reusable components
│   ├── ui/                     # UI primitives
│   ├── AppCard.tsx             # App card component
│   ├── CategoryGrid.tsx        # Category grid
│   ├── Navbar.tsx              # Navigation
│   └── Footer.tsx              # Footer
├── lib/                        # Utilities and config
│   ├── database.js             # Database functions
│   ├── playstore.js            # Play Store API
│   ├── config.ts               # App configuration
│   └── utils.ts                # Utility functions
├── hooks/                      # Custom React hooks
└── public/                     # Static assets
```

## 🔧 Configuration

### Google AdSense Setup

1. **Create AdSense Account**: Visit [Google AdSense](https://adsense.google.com)
2. **Add Your Site**: Add your domain to AdSense
3. **Get Publisher ID**: Copy your `ca-pub-xxxxxxxxxxxxxxxxx` ID
4. **Update Environment**: Add to `.env.local`
5. **Verify**: Check ads.txt at `/ads.txt`

### Google Analytics Setup

1. **Create GA4 Property**: Visit [Google Analytics](https://analytics.google.com)
2. **Get Measurement ID**: Copy your `G-XXXXXXXXXX` ID
3. **Update Environment**: Add to `.env.local`
4. **Verify**: Check in Google Analytics Real-time reports

### Search Console Setup

1. **Add Property**: Visit [Google Search Console](https://search.google.com/search-console/)
2. **Choose Verification**: Use HTML tag method
3. **Copy Code**: Get verification code from meta tag
4. **Update Environment**: Add to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Import your GitHub repository to Vercel
2. **Environment Variables**: Add your `.env.local` variables to Vercel
3. **Deploy**: Vercel will automatically deploy your application

```bash
# Update environment for production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

### Other Platforms

APKmory can be deployed to any platform that supports Node.js:

- **Netlify**: Add build command `npm run build`
- **Railway**: Connect GitHub and deploy
- **DigitalOcean App Platform**: Deploy from GitHub
- **AWS Amplify**: Connect repository for deployment

## 📊 Performance Features

### Caching System

- **Multi-level caching**: Database + in-memory caching
- **Smart invalidation**: Automatic cache expiry
- **Background refresh**: Preload popular content

### SEO Optimization

- **Dynamic metadata**: Per-page SEO optimization
- **Sitemap generation**: Automatic XML sitemaps
- **Structured data**: Rich snippets for search engines
- **OpenGraph tags**: Social media optimization

### Performance Monitoring

Monitor your application performance:

```bash
# Build analysis
npm run build
npm run analyze

# Performance testing
npm run lighthouse
```

## 🔐 Security & Best Practices

### Environment Variables

- ✅ **Never commit** `.env.local` to version control
- ✅ **Use NEXT_PUBLIC_** prefix only for client-side variables
- ✅ **Rotate keys** regularly for production
- ✅ **Use different keys** for development and production

### Rate Limiting

The application includes built-in rate limiting:

- **Search API**: 100 requests per hour per IP
- **App Details**: 50 requests per hour per IP
- **Category API**: 200 requests per hour per IP

### CORS & Security Headers

Production deployment includes:

- Content Security Policy (CSP)
- CORS configuration
- Rate limiting middleware
- Input validation and sanitization

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines

- Use TypeScript for new components
- Follow ESLint and Prettier configurations
- Write unit tests for utility functions
- Update documentation for new features

## 📝 API Documentation

### Search API

```typescript
GET /api/search?q=whatsapp&limit=20

Response:
{
  "results": [...],
  "total": 100,
  "query": "whatsapp"
}
```

### App Details API

```typescript
GET /api/app/com.whatsapp

Response:
{
  "app": {
    "appId": "com.whatsapp",
    "title": "WhatsApp",
    "developer": "WhatsApp LLC",
    ...
  }
}
```

### Category API

```typescript
GET /api/category/communication?limit=50

Response:
{
  "apps": [...],
  "category": "communication",
  "total": 500
}
```

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Solution: Check database permissions
chmod 664 cache.db
```

**Play Store Rate Limiting**
```bash
# Solution: Implement delays between requests
# Check lib/playstore.js for rate limiting configuration
```

**Environment Variables Not Loading**
```bash
# Solution: Restart development server
npm run dev
```

### Debug Mode

Enable debug logging:

```bash
# Add to .env.local
DEBUG=true
LOG_LEVEL=debug
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [google-play-scraper](https://github.com/facundoolano/google-play-scraper) - For Play Store data access
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Better-SQLite3](https://github.com/WiseLibs/better-sqlite3) - Fast SQLite3 bindings

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Create GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions

---

**Happy coding! 🚀**

Built with ❤️ for the Android app discovery community.
