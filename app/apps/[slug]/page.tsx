import { Metadata } from 'next';
import ClientAppsSlugPage from './ClientAppsSlugPage';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const query = slug?.replace(/-/g, ' ') || '';
  
  return {
    title: `${query} Free Apk Download & Review`,
    description: 'Free download and review of apps related to ' + query + '. Find Android apps and games related to ' + query + ' with detailed information, reviews, and download links.',
    keywords: ['app search', query, 'android apps', 'mobile apps', 'search results'],
    openGraph: {
      title: `${query} Free Apk Download & Review`,
      description: 'Free download and review of apps related to ' + query + '. Find Android apps and games related to ' + query + ' with detailed information, reviews, and download links.',
      type: 'website',
    },
  };
}

export default function AppsSlugPage() {
  return <ClientAppsSlugPage />;
}