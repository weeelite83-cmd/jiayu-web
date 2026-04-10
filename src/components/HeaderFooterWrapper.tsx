'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { Locale } from '@/i18n/config';

interface HeaderFooterWrapperProps {
  locale: Locale;
}

export function HeaderFooterWrapper({ locale }: HeaderFooterWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="h-16 bg-white border-b" />
        <main className="flex-1" />
        <div className="h-64 bg-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        locale={locale}
        translations={{
          nav: {
            home: t('nav.home'),
            about: t('nav.about'),
            products: t('nav.products'),
            applications: t('nav.applications'),
            contact: t('nav.contact'),
            getQuote: t('nav.getQuote'),
          },
          footer: {
            brand: t('footer.brand'),
          },
        }}
      />
      <main className="flex-1 pt-16">
        <HeaderFooterContent locale={locale} />
      </main>
      <Footer
        translations={{
          brand: t('footer.brand'),
          phone: t('footer.phone'),
          email: t('footer.email'),
          address: t('footer.address'),
          quickLinks: t('footer.quickLinks'),
          productCategories: t('footer.productCategories'),
          applicationAreas: t('footer.applicationAreas'),
          copyright: t('footer.copyright'),
          icp: t('footer.icp'),
          nav: {
            home: t('nav.home'),
            about: t('nav.about'),
            products: t('nav.products'),
            applications: t('nav.applications'),
            contact: t('nav.contact'),
          },
        }}
      />
    </div>
  );
}

// 内容插槽 - 实际内容在 children 中渲染
function HeaderFooterContent({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <>{children}</>;
}

export { HeaderFooterContent };
