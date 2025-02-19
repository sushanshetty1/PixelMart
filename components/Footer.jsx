import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 px-4 md:px-8 lg:px-16 py-8 text-white">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl">
        {/* Logo & Description */}
        <div>
          <h2 className="font-bold text-2xl">PixelMart</h2>
          <p className="mt-2 text-gray-400">Your one-stop shop for your personalized products.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link>
          <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          <Link href="/faq" className="text-gray-400 hover:text-white">FAQs</Link>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-4 border-gray-700 border-t text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} PixelMart. All rights reserved.
      </div>
    </footer>
  )
}