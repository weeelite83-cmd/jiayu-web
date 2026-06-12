'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Factory,
  Languages,
} from 'lucide-react';

import { Locale } from '@/i18n/config';

// 获取翻译后的导航项
const getNavItems = (t: {
  home: string;
  about: string;
  products: string;
  applications: string;
  contact: string;
  getQuote: string;
}, locale: string) => [
  { name: t.home, href: `/${locale}` },
  { name: t.about, href: `/${locale}/about` },
  { name: t.products, href: `/${locale}/products` },
  { name: t.applications, href: `/${locale}/applications` },
  { name: t.contact, href: `/${locale}/contact` },
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
  
  const navItems = getNavItems(translations.nav, locale);
  const brandName = locale === 'zh' ? '嘉钰不锈钢' : 'Jiayu Stainless Steel';

  const basePath = `/${locale}`;

  const handleLocaleChange = (newLocale: Locale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
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
            
            {/* Language Toggle */}
            <button
              onClick={() => handleLocaleChange(locale === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border hover:bg-muted transition-colors"
              title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              <Languages className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground/80">
                EN / 中
              </span>
            </button>
            
            <Link href={`/${locale}/contact`}>
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
            {/* Mobile Language Toggle */}
            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => {
                  handleLocaleChange(locale === 'zh' ? 'en' : 'zh');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border hover:bg-muted transition-colors"
                title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
              >
                <Languages className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-foreground/80">
                  EN / 中
                </span>
              </button>
            </div>
            <Link href={`/${locale}/contact`} onClick={() => setIsMenuOpen(false)}>
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
