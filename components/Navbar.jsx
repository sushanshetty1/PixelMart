"use client"
import { useState } from 'react';
import { Menu, Search, X, ShoppingCart, User, Zap } from 'lucide-react';

const CATEGORIES = [
  'Stock Video', 'Video Templates', 'Music', 'Sound Effects', 
  'Graphic Templates', 'Graphics', '3D', 'Presentation Templates', 
  'Photos', 'Fonts', 'Add-ons', 'More'
];

export default function PixelMartHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="text-blue-400 w-8 h-8" />
              <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                PixelMart
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="group relative p-2 rounded-full hover:bg-neutral-700/50 transition-all">
                <ShoppingCart className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform">
                <User className="mr-2 w-5 h-5" /> Sign In
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <form 
            onSubmit={handleSearchSubmit} 
            className="relative w-full animate-pulse-soft"
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search everything in PixelMart..." 
              className="w-full px-4 py-3.5 bg-neutral-800/80 backdrop-blur-md text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/40 border border-neutral-700/50 transition-all duration-300 hover:border-blue-500/50"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 group"
            >
              <Search className="text-neutral-400 group-hover:text-blue-400 transition-colors w-5 h-5" />
            </button>
          </form>

          <div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 bg-neutral-800/60 backdrop-blur-md rounded-xl p-2 border border-neutral-700/50"
          >
            {CATEGORIES.map((category, index) => (
              <a 
                key={index}
                href="#" 
                className="text-xs sm:text-sm text-center text-neutral-300 hover:text-white hover:bg-neutral-700/50 py-2 rounded-lg transition-all truncate hover:scale-105 active:scale-95"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* For Mobile Responsiveness */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 z-50 overflow-y-auto animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="text-blue-400 w-8 h-8" />
                  <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    PixelMart
                  </h1>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-400 hover:text-white hover:rotate-90 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {CATEGORIES.map((category, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="block text-lg text-neutral-300 hover:text-white py-2.5 border-b border-neutral-800 hover:border-blue-500 transition-all hover:translate-x-2"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}