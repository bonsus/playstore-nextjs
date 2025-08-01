'use client';

import { Smartphone, Gamepad2, Music, Camera, Book, Car, Heart as Health, BriefcaseBusiness as Business, BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Apps', icon: Smartphone, href: '/category/apps', color: 'bg-blue-500' },
  { name: 'Games', icon: Gamepad2, href: '/category/games', color: 'bg-green-500' },
  { name: 'Music', icon: Music, href: '/category/musics', color: 'bg-purple-500' },
  { name: 'Photography', icon: Camera, href: '/category/photography', color: 'bg-pink-500' },
  { name: 'Books', icon: Book, href: '/apps/books', color: 'bg-yellow-500' },
  { name: 'Auto', icon: Car, href: '/apps/auto', color: 'bg-red-500' },
  { name: 'Health', icon: Health, href: '/apps/health', color: 'bg-emerald-500' },
  { name: 'Business', icon: Business, href: '/apps/business', color: 'bg-gray-500' },
  { name: 'Education', icon: Book, href: '/apps/education', color: 'bg-teal-500' },
  { name: 'Lifestyle', icon: Smartphone, href: '/apps/lifestyle', color: 'bg-indigo-500' },
  { name: 'Travel', icon: Camera, href: '/apps/travel', color: 'bg-orange-500' },
  { name: 'Finance', icon: BriefcaseBusiness, href: '/apps/finance', color: 'bg-cyan-500' },
  { name: 'Social', icon: Smartphone, href: '/apps/social', color: 'bg-violet-500' },
  { name: 'News', icon: Book, href: '/apps/news', color: 'bg-gray-600' },
  { name: 'Shopping', icon: Smartphone, href: '/apps/shopping', color: 'bg-lime-500' },
  { name: 'Sports', icon: Gamepad2, href: '/apps/sports', color: 'bg-amber-500' },
  { name: 'Weather', icon: Camera, href: '/apps/weather', color: 'bg-purple-600' },
  { name: 'Utilities', icon: Smartphone, href: '/apps/utilities', color: 'bg-blue-600' },
  { name: 'Productivity', icon: BriefcaseBusiness, href: '/apps/productivity', color: 'bg-green-600' },
  { name: 'Entertainment', icon: Gamepad2, href: '/apps/entertainment', color: 'bg-red-600' },
  { name: 'Food & Drink', icon: Camera, href: '/apps/food-drink', color: 'bg-pink-600' },
  { name: 'Health & Fitness', icon: Health, href: '/apps/health-fitness', color: 'bg-yellow-600' },
  { name: 'Photography & Video', icon: Camera, href: '/apps/photography-video', color: 'bg-teal-600' },
  { name: 'Lifestyle & Personalization', icon: Smartphone, href: '/apps/lifestyle-personalization', color: 'bg-indigo-600' }
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer text-center">
            <div className={`w-12 h-12 ${category.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}