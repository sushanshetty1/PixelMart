import Link from "next/link";
import { Instagram, Facebook, Twitter, LinkedIn } from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQs" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: LinkedIn, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              PixelMart
            </h2>
            <p className="text-sm leading-6 text-gray-300">
              Your one-stop shop for personalized products. We craft unique items 
              that tell your story and match your style.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Market Street</li>
              <li>San Francisco, CA 94105</li>
              <li>support@pixelmart.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PixelMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}