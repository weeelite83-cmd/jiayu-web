import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { Locale, locales } from '@/i18n/config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Jiayu Stainless Steel | Professional Stainless Steel Pipe Manufacturer',
    template: '%s | Jiayu Stainless Steel',
  },
  description:
    'Jiayu Stainless Steel is a modern enterprise integrating R&D, production, and sales of stainless steel pipes. Products include seamless pipes, welded pipes, decorative pipes, and fittings, widely used in petrochemical, food hygiene, medical, construction, and other fields.',
  keywords: [
    'stainless steel pipe',
    'stainless steel seamless pipe',
    'stainless steel welded pipe',
    'stainless steel decorative pipe',
    'stainless steel fittings',
    'stainless steel manufacturer',
  ],
  authors: [{ name: 'Jiayu Stainless Steel', url: 'https://jayu-stainless.com' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Jiayu Stainless Steel | Professional Stainless Steel Pipe Manufacturer',
    description:
      'A modern enterprise integrating R&D, production, and sales of stainless steel pipes. Products include seamless pipes, welded pipes, decorative pipes, and fittings.',
    url: 'https://jayu-stainless.com',
    siteName: 'Jiayu Stainless Steel',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const cookieStore = await cookies();
  
  // Get locale from cookie or use default
  const currentLocale = (cookieStore.get('locale')?.value as Locale) || (locale as Locale);
  const validLocale = locales.includes(currentLocale) ? currentLocale : 'zh';

  return (
    <html lang={validLocale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
