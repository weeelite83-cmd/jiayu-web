import { getLocale } from 'next-intl/server';
import ContactPageClient from './ContactPageClient';

export default async function ContactPage() {
  const locale = await getLocale();
  return <ContactPageClient locale={locale as 'zh' | 'en' | 'ja' | 'ko' | 'de' | 'fr' | 'es' | 'pt' | 'ru' | 'ar' | 'it' | 'nl' | 'pl' | 'tr' | 'vi' | 'th'} />;
}
