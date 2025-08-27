import { Suspense } from 'react';
import { Metadata } from 'next';
import ClientSearchPage from './ClientSearchPage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getAdSenseAccountMeta } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Search Apps - Find Your Perfect Android App | Apkmory',
  description: 'Search through thousands of Android apps and games. Find the perfect app for your needs with our powerful search engine and detailed app information.',
  keywords: ['app search', 'android app search', 'find apps', 'mobile apps', 'app discovery'],
  openGraph: {
    title: 'Search Apps - Find Your Perfect Android App',
    description: 'Search through thousands of Android apps and games. Find the perfect app for your needs with our powerful search engine.',
    type: 'website',
  },
  other: {
    // Add Google AdSense account meta tag
    ...(getAdSenseAccountMeta() && {
      [getAdSenseAccountMeta()!.name]: getAdSenseAccountMeta()!.content,
    }),
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClientSearchPage />
    </Suspense>
  );
}