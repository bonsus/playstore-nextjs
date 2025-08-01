export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Apkmory</h3>
            <p className="text-gray-600 text-sm">
              Discover and explore Android apps and games from Google Play Store. 
              Find detailed information, ratings, and reviews for your favorite applications.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/category/apps" className="text-gray-600 hover:text-blue-600 text-sm">
                  Apps
                </a>
              </li>
              <li>
                <a href="/category/games" className="text-gray-600 hover:text-blue-600 text-sm">
                  Games
                </a>
              </li>
              <li>
                <a href="/category/music" className="text-gray-600 hover:text-blue-600 text-sm">
                  Music
                </a>
              </li>
              <li>
                <a href="/category/photography" className="text-gray-600 hover:text-blue-600 text-sm">
                  Photography
                </a>
              </li>
              <li>
                <a href="/category/books" className="text-gray-600 hover:text-blue-600 text-sm">
                  Books
                </a>
              </li>
              <li>
                <a href="/category/auto" className="text-gray-600 hover:text-blue-600 text-sm">
                  Auto & Vehicles
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-sm">
                  Google Play Store
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="text-gray-600 hover:text-blue-600 text-sm">
                  Terms of Use
                </a>
              </li> 
              <li>
                <a href="/copyright-policy" className="text-gray-600 hover:text-blue-600 text-sm">
                  Copyright Policy
                </a>
              </li> 
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024-2025 Apkmory.com. All rights reserved. This is not affiliated with Google Play Store.
          </p>
        </div>
      </div>
    </footer>
  );
}