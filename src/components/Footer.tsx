
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-sanav bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">SANAV</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your destination for aspirational celebrity and influencer fashion.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full border border-primary hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Facebook size={18} className="text-primary hover:text-sanav" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border border-primary hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Instagram size={18} className="text-primary hover:text-sanav" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border border-primary hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Twitter size={18} className="text-primary hover:text-sanav" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/celebrities" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Celebrities
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/influencers" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Influencers
                </Link>
              </li>
              <li>
                <Link to="/tv-shows" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/designers" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Designers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-sanav transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sanav. All rights reserved.
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-sanav animate-pulse" />
              <span>for fashion lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
