'use client';

import { useState, useTransition, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { Locale, localeNames, locales } from '@/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLocaleChange = useCallback(
    (locale: Locale) => {
      // Set cookie for server-side access
      document.cookie = `locale=${locale};path=/;max-age=31536000`;

      startTransition(() => {
        // Refresh the page to apply the new locale
        router.refresh();
      });
    },
    [router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Select language"
        >
          <Globe className="h-5 w-5" />
          {isPending && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className="cursor-pointer"
          >
            <span className="flex items-center gap-2 w-full">
              <span className="w-20">{localeNames[locale]}</span>
              {currentLocale === locale && (
                <Check className="h-4 w-4 text-blue-600 ml-auto" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
