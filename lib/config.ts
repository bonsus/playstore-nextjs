// Site configuration using environment variables
export const siteConfig = {
  // Site Information
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'APKmory',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  // Google Services
  googleAdsense: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || '',
    verificationCode: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_VERIFICATION_CODE || '',
    accountId: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT_ID || 'ca-pub-6465174352180458',
  },
  
  googleAnalytics: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  },
  
  googleSearchConsole: {
    verificationCode: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  
  // Database
  database: {
    url: process.env.DATABASE_URL || './cache.db',
  },
  
  // API Settings
  api: {
    rateLimit: parseInt(process.env.API_RATE_LIMIT || '100'),
    cacheDuration: parseInt(process.env.API_CACHE_DURATION || '3600'),
  },
  
  // Environment
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
};

// Helper function to get AdSense script URL
export const getAdSenseScriptUrl = () => {
  if (!siteConfig.googleAdsense.clientId) return null;
  return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.googleAdsense.clientId}`;
};

// Helper function to get verification meta tag
export const getAdSenseVerificationMeta = () => {
  if (!siteConfig.googleAdsense.verificationCode) return null;
  return {
    name: 'google-adsense-account',
    content: siteConfig.googleAdsense.verificationCode,
  };
};

// Helper function to get AdSense account meta tag
export const getAdSenseAccountMeta = () => {
  if (!siteConfig.googleAdsense.accountId) return null;
  return {
    name: 'google-adsense-account',
    content: siteConfig.googleAdsense.accountId,
  };
};

// Helper function to get Google site verification meta tag
export const getGoogleSiteVerificationMeta = () => {
  if (!siteConfig.googleSearchConsole.verificationCode) return null;
  return {
    name: 'google-site-verification',
    content: siteConfig.googleSearchConsole.verificationCode,
  };
};
