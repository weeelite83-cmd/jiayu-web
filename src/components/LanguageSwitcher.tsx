'use client';

import { useTransition, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale: Locale = currentLocale === 'zh' ? 'en' : 'zh';
  const label = currentLocale === 'zh' ? 'EN' : '中文';

  const handleLocaleChange = useCallback(() => {
    document.cookie = `locale=${nextLocale};path=/;max-age=31536000`;

    // Replace locale in URL path
    const segments = pathname.split('/');
    if (segments[1] === 'zh' || segments[1] === 'en') {
      segments[1] = nextLocale;
    }
    const newPath = segments.join('/');

    startTransition(() => {
      router.push(newPath);
    });
  }, [nextLocale, pathname, router]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLocaleChange}
      className="relative gap-1.5 font-medium"
      disabled={isPending}
      aria-label={`Switch to ${nextLocale === 'zh' ? 'Chinese' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
}
