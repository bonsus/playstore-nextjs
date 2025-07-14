import ClientCategoryPage from './ClientCategoryPage';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.slug;
  
  const categoryTitles: { [key: string]: string } = {
    'apps': 'Apps',
    'games': 'Games',
    'music': 'Music & Audio',
    'photography': 'Photography',
    'books': 'Books & Reference',
    'auto': 'Auto & Vehicles',
    'health': 'Health & Fitness',
    'business': 'Business'
  };

  const categoryTitle = categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${categoryTitle} - Best Android ${categoryTitle} | APK Store`,
    description: `Discover the best ${categoryTitle.toLowerCase()} for Android. Browse through top-rated ${categoryTitle.toLowerCase()} from Google Play Store with detailed information and reviews.`,
    keywords: [`android ${category}`, `${category} apps`, `mobile ${category}`, 'apk download', 'play store'],
    openGraph: {
      title: `${categoryTitle} - Best Android ${categoryTitle}`,
      description: `Discover the best ${categoryTitle.toLowerCase()} for Android. Browse through top-rated ${categoryTitle.toLowerCase()} from Google Play Store.`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'apps' },
    { slug: 'games' },
    { slug: 'music' },
    { slug: 'photography' },
    { slug: 'books' },
    { slug: 'auto' },
    { slug: 'health' },
    { slug: 'business' }
  ];
}

export default function CategoryPage() {
  return <ClientCategoryPage />;
}