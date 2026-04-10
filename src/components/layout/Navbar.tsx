'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Factory,
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Locale } from '@/i18n/config';

// 获取翻译后的导航项
const getNavItems = (t: {
  home: string;
  about: string;
  products: string;
  applications: string;
  contact: string;
  getQuote: string;
}) => [
  { name: t.home, href: '/' },
  { name: t.about, href: '/about' },
  { name: t.products, href: '/products' },
  { name: t.applications, href: '/applications' },
  { name: t.contact, href: '/contact' },
];

interface NavbarProps {
  locale: Locale;
  translations: {
    nav: {
      home: string;
      about: string;
      products: string;
      applications: string;
      contact: string;
      getQuote: string;
    };
    footer: {
      brand: string;
    };
  };
}

export function Navbar({ locale, translations }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = getNavItems(translations.nav);
  const brandName = locale === 'zh' ? '嘉钰不锈钢' : 'Jiayu Stainless Steel';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {brandName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} />
            
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                {translations.nav.getQuote}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                {translations.nav.getQuote}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
