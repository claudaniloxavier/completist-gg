import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from '../i18nconfig'
// import { locales, localePrefix } from './navigation'

export default createMiddleware({
  defaultLocale,
  localeDetection: true,
  localePrefix: 'always',
  locales,
})

export const config = {
  matcher: ['/', '/(en|br)/:path*'],
}
