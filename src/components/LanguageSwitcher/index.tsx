'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import { locales, defaultLocale, Locale } from '../../../i18nconfig'
import React, { useState } from 'react'
import Icon from '../Icon'
import { IconProps } from '../Icon/types'

import styles from './styles.module.scss'
import classNames from 'classnames'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const switchLocale = (locale: Locale) => {
    router.push(pathName, { locale })
  }

  return (
    <div className={styles.select}>
      <button onClick={toggleDropdown}>
        <Icon
          width={32}
          height={32}
          variation={(locale as IconProps['variation']) || defaultLocale}
        />

        <div className={classNames(styles.chevron, { [styles.open]: isOpen })}>
          <Icon width={16} height={16} variation={'chevron-down'} />
        </div>
      </button>

      {isOpen && (
        <ul className={styles.options}>
          {locales.map((country) => (
            <li key={crypto.randomUUID()} onClick={() => switchLocale(country)}>
              <Icon width={32} height={32} variation={country} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Create custom input for this case

export default LanguageSwitcher
