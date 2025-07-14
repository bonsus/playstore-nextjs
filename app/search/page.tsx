import { Suspense } from 'react';
import { Metadata } from 'next';
import ClientSearchPage from './ClientSearchPage';
import LoadingSpinner from '@/components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Search Apps - Find Your Perfect Android App | APK Store',
  description: 'Search through thousands of Android apps and games. Find the perfect app for your needs with our powerful search engine and detailed app information.',
  keywords: ['app search', 'android app search', 'find apps', 'mobile apps', 'app discovery'],
  openGraph: {
    title: 'Search Apps - Find Your Perfect Android App',
    description: 'Search through thousands of Android apps and games. Find the perfect app for your needs with our powerful search engine.',
    type: 'website',
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClientSearchPage />
    </Suspense>
  );
}