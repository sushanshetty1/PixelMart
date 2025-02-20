"use client"
import { useState } from 'react';
import { Menu, Search, X, ShoppingCart, User, Zap, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInModal from '@/components/SignIn';

const CATEGORIES = [
  'Stock Video', 'Video Templates', 'Music', 'Sound Effects', 
  'Graphic Templates', 'Graphics', '3D', 'Presentation Templates', 
  'Photos', 'Fonts', 'Add-ons', 'More'
];

export default function PixelMartHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Categories');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white border-none rounded-none">
      <CardContent className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="text-blue-400 w-8 h-8" />
              <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                PixelMart
              </h1>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
              <SignInModal />
            </div>
          </div>

          {/* Mobile Search and Category */}
          <div className="md:hidden flex items-center space-x-2">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-36 bg-neutral-800 text-white justify-between">
                  {selectedCategory}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {CATEGORIES.map((category, index) => (
                  <DropdownMenuItem 
                    key={index} 
                    onSelect={() => setSelectedCategory(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Search and Categories */}
          <div className="hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input 
                type="text" 
                placeholder="Search everything in PixelMart..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>

            <div className="grid grid-cols-6 gap-2 mt-4">
              {CATEGORIES.map((category, index) => (
                <Button 
                  key={index} 
                  variant="ghost" 
                  className="truncate hover:bg-neutral-700/50"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}