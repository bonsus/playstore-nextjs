'use client';

import { Smartphone, Gamepad2, Music, Camera, Book, Car, Heart as Health, BriefcaseBusiness as Business } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Apps', icon: Smartphone, href: '/category/apps', color: 'bg-blue-500' },
  { name: 'Games', icon: Gamepad2, href: '/category/games', color: 'bg-green-500' },
  { name: 'Music', icon: Music, href: '/category/music', color: 'bg-purple-500' },
  { name: 'Photography', icon: Camera, href: '/category/photography', color: 'bg-pink-500' },
  { name: 'Books', icon: Book, href: '/category/books', color: 'bg-yellow-500' },
  { name: 'Auto', icon: Car, href: '/category/auto', color: 'bg-red-500' },
  { name: 'Health', icon: Health, href: '/category/health', color: 'bg-emerald-500' },
  { name: 'Business', icon: Business, href: '/category/business', color: 'bg-gray-500' }
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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