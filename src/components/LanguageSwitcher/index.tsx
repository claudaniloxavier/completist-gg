'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { localeNames, locales, defaultLocale } from '../../../i18nconfig'
import React from 'react'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value })
  }

  return (
    <div>
      <select
        name="languageSwitcher"
        id="language-switcher"
        value={locale}
        onChange={switchLocale}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} defaultValue={defaultLocale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
