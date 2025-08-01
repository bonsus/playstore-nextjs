import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig, getAdSenseVerificationMeta, getGoogleSiteVerificationMeta } from '@/lib/config';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Apkmory - Discover Amazing Android Apps & Games',
    template: '%s | Apkmory'
  },
  description: 'Discover and explore the best Android apps and games from Google Play Store. Get detailed information, reviews, screenshots, and download links for thousands of applications.',
  keywords: ['android apps', 'apk download', 'play store', 'mobile games', 'android games', 'app store', 'mobile apps'],
  authors: [{ name: 'Apkmory Team' }],
  creator: 'Apkmory',
  publisher: 'Apkmory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: 'Apkmory - Discover Amazing Android Apps & Games',
    description: 'Discover and explore the best Android apps and games from Google Play Store. Get detailed information, reviews, screenshots, and download links.',
    siteName: 'Apkmory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apkmory - Discover Amazing Android Apps & Games',
    description: 'Discover and explore the best Android apps and games from Google Play Store.',
    creator: '@apkstore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: siteConfig.googleSearchConsole.verificationCode || undefined,
  },
  other: {
    // Add Google AdSense verification if available
    ...(getAdSenseVerificationMeta() && {
      [getAdSenseVerificationMeta()!.name]: getAdSenseVerificationMeta()!.content,
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google AdSense Script */}
        {siteConfig.googleAdsense.clientId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.googleAdsense.clientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        
        {/* Google Analytics Script */}
        {siteConfig.googleAnalytics.id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalytics.id}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalytics.id}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}