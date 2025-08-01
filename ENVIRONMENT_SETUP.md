# Environment Configuration Guide

This guide explains how to set up environment variables for APKmory, particularly for Google AdSense verification and other services.

## Environment Files

### 1. `.env.example`
Contains example environment variables with placeholder values. This file is committed to the repository.

### 2. `.env.local`
Your local development environment variables. This file is NOT committed to git (included in .gitignore).

## Setup Instructions

### 1. Copy Environment File
```bash
cp .env.example .env.local
```

### 2. Configure Google AdSense

#### Get AdSense Client ID:
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign in to your AdSense account
3. Go to **Sites** > **Add Site**
4. Add your domain: `apkmory.com`
5. Copy your **AdSense Client ID** (format: `ca-pub-xxxxxxxxxxxxxxxxx`)

#### Get AdSense Verification Code:
1. In AdSense, go to **Sites** > Your Site
2. Copy the **Verification Code** from the HTML tag
3. It looks like: `<meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxxx">`

#### Update .env.local:
```bash
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
NEXT_PUBLIC_GOOGLE_ADSENSE_VERIFICATION_CODE=ca-pub-1234567890123456
```

### 3. Configure Google Search Console (Optional)

#### Get Site Verification Code:
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property: `https://apkmory.com`
3. Choose **HTML tag** verification method
4. Copy the content value from the meta tag

#### Update .env.local:
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

### 4. Configure Google Analytics (Optional)

#### Get Analytics ID:
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Update .env.local:
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### 5. Production Configuration

For production deployment, set these environment variables in your hosting platform:

```bash
NEXT_PUBLIC_SITE_URL=https://apkmory.com
NEXT_PUBLIC_SITE_NAME=APKmory
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-your-real-client-id
NEXT_PUBLIC_GOOGLE_ADSENSE_VERIFICATION_CODE=ca-pub-your-real-verification-code
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-real-verification-code
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-YOUR-REAL-ID
NODE_ENV=production
```

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your website URL | Yes | `https://apkmory.com` |
| `NEXT_PUBLIC_SITE_NAME` | Site name | Yes | `APKmory` |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` | AdSense Client ID | No | `ca-pub-1234567890123456` |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_VERIFICATION_CODE` | AdSense Verification | No | `ca-pub-1234567890123456` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console Verification | No | `abc123def456` |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics ID | No | `G-XXXXXXXXXX` |
| `DATABASE_URL` | Database file path | Yes | `./cache.db` |
| `API_RATE_LIMIT` | API rate limit | No | `100` |
| `API_CACHE_DURATION` | Cache duration in seconds | No | `3600` |
| `NODE_ENV` | Environment mode | Yes | `development` or `production` |

## How It Works

### 1. Configuration File (`lib/config.ts`)
Centralizes all environment variable access and provides helper functions.

### 2. Layout Integration (`app/layout.tsx`)
Automatically includes:
- Google AdSense verification meta tag
- Google AdSense script
- Google Analytics script
- Google Search Console verification

### 3. Automatic Integration
The configuration is automatically applied when you set the environment variables. No additional code changes needed.

## Verification

### Test AdSense Integration:
1. Set your AdSense environment variables
2. Deploy or run locally
3. View page source and check for:
   - `<meta name="google-adsense-account" content="ca-pub-...">`
   - `<script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-..."`

### Test Site Verification:
1. Set your verification codes
2. Deploy to production
3. Verify in Google Search Console and AdSense

## Security Notes

- ✅ `.env.local` is automatically ignored by git
- ✅ Only `NEXT_PUBLIC_*` variables are exposed to the browser
- ✅ Sensitive API keys should NOT use `NEXT_PUBLIC_` prefix
- ✅ Always use different values for development and production

## Troubleshooting

### AdSense Not Working:
1. Check if `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` is set correctly
2. Verify the client ID format: `ca-pub-xxxxxxxxxxxxxxxxx`
3. Check browser console for script loading errors
4. Ensure your domain is approved in AdSense

### Site Verification Failing:
1. Check if verification code is set correctly
2. Verify the meta tag appears in page source
3. Wait 24-48 hours after deployment for verification to complete
