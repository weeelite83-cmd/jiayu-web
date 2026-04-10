// 客户端可访问的常量
export const locales = ['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'ar', 'it', 'nl', 'pl', 'tr', 'vi', 'th'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  zh: '简体中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  ar: 'العربية',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
};

export const defaultLocale: Locale = 'zh';
