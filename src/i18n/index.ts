import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { locales, defaultLocale, type Locale } from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  
  // Try to get locale from cookie first
  let locale = cookieStore.get('locale')?.value as Locale;
  
  // Default to Chinese
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./${locale}.ts`)).default,
  };
});
