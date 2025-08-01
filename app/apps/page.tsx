import { Suspense } from 'react';
import { Metadata } from 'next';
import ClientAppsPage from './ClientAppsPage';
import LoadingSpinner from '@/components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'All Apps - Browse Android Applications | Apkmory',
  description: 'Browse through all available Android applications. Find the latest apps, games, and utilities with detailed information, screenshots, and reviews.',
  keywords: ['all apps', 'android applications', 'browse apps', 'mobile apps', 'app collection'],
  openGraph: {
    title: 'All Apps - Browse Android Applications',
    description: 'Browse through all available Android applications. Find the latest apps, games, and utilities.',
    type: 'website',
  },
};

export default function AppsPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClientAppsPage />
    </Suspense>
  );
}