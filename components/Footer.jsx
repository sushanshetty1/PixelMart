import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              PixelMart
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Your one-stop shop for your personalized products.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-white">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <Link href="/shop" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Shop</Link>
              <Link href="/about" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Contact</Link>
              <Link href="/contact" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-white">Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Stock Video</Link>
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Video Templates</Link>
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Music</Link>
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Sound Effects</Link>
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Graphic Templates</Link>
              <Link href="#" className="text-sm sm:text-base text-neutral-400 hover:text-blue-400 transition-colors">Graphics</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base sm:text-lg text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-400">
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base break-all">narshimapai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400">
                <Phone className="w-5 h-5" />
                <span className="text-sm sm:text-base">+91 1234567890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-neutral-700 text-neutral-400 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="text-center sm:text-left">
              &copy; {currentYear} PixelMart. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;