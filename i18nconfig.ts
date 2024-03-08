export type Locale = 'en' | 'br'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'br']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  br: 'Português',
}
