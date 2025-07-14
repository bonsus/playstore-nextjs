import { Metadata } from 'next';
import ClientAppDetailPage from './ClientAppDetailPage';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const appId = params.id;
  
  try {
    // Fetch app data to get the actual app name
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/app/${appId}`);
    
    if (response.ok) {
      const data = await response.json();
      const app = data.app;
      
      if (app && app.title) {
        return {
          title: `${app.title} - Download & Review`,
          description: `Download ${app.title} by ${app.developer || 'Unknown Developer'}. ${app.description ? app.description.substring(0, 150) + '...' : `Get detailed information about ${app.title} including screenshots, reviews, and download links.`}`,
          keywords: ['android app', app.title, app.developer, 'app details', 'apk download', 'app info', 'mobile app', app.genre].filter(Boolean),
          openGraph: {
            title: `${app.title} - Android App`,
            description: `Download ${app.title} by ${app.developer || 'Unknown Developer'}. ${app.description ? app.description.substring(0, 150) + '...' : 'Get detailed app information, screenshots, and reviews.'}`,
            type: 'website',
            images: app.icon ? [{ url: app.icon, alt: `${app.title} icon` }] : undefined,
          },
        };
      }
    }
    
    // Fallback if API call fails or no app data
    return {
      title: `App Details - ${appId} | APK Store`,
      description: `Get detailed information about ${appId} including screenshots, reviews, download links and more. Discover everything you need to know about this Android app.`,
      keywords: ['android app', appId, 'app details', 'apk download', 'app info', 'mobile app'],
      openGraph: {
        title: `${appId} - Android App Details`,
        description: `Get detailed information about ${appId} including screenshots, reviews, and download links.`,
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'App Details | APK Store',
      description: 'Get detailed information about Android apps including screenshots, reviews, and download links.',
    };
  }
}

export default function AppDetailPage() {
  return <ClientAppDetailPage />;
}
