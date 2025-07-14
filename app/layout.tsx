import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'APK Store - Discover Amazing Android Apps & Games',
    template: '%s | APK Store'
  },
  description: 'Discover and explore the best Android apps and games from Google Play Store. Get detailed information, reviews, screenshots, and download links for thousands of applications.',
  keywords: ['android apps', 'apk download', 'play store', 'mobile games', 'android games', 'app store', 'mobile apps'],
  authors: [{ name: 'APK Store Team' }],
  creator: 'APK Store',
  publisher: 'APK Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: 'APK Store - Discover Amazing Android Apps & Games',
    description: 'Discover and explore the best Android apps and games from Google Play Store. Get detailed information, reviews, screenshots, and download links.',
    siteName: 'APK Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APK Store - Discover Amazing Android Apps & Games',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
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