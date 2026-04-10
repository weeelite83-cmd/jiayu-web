'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Factory,
  Globe,
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Locale, localeNames } from '@/i18n/config';

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

  const handleLocaleChange = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

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
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-slate-600 hover:text-blue-600 transition-colors">
                <Globe className="w-5 h-5" />
                <span className="text-sm">{localeNames[locale]}</span>
              </button>
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {(['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'it', 'nl', 'pl', 'tr', 'vi', 'th'] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLocaleChange(loc)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                      locale === loc ? 'text-blue-600 font-medium' : 'text-slate-700'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>
            
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
            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-slate-200">
              <div className="text-sm font-medium text-slate-500 mb-2">语言 / Language</div>
              <div className="grid grid-cols-4 gap-2">
                {(['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'pt'] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      handleLocaleChange(loc);
                      setIsMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-sm rounded ${
                      locale === loc
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {(['ru', 'ar', 'it', 'nl', 'pl', 'tr', 'vi', 'th'] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      handleLocaleChange(loc);
                      setIsMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-sm rounded ${
                      locale === loc
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>
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
