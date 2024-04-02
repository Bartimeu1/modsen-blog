import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ru'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ru: '/pfadnamen',
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
