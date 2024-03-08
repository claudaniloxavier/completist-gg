// ICONS
import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'
import VisibilityIcon from './components/VisibilityIcon'
import VisibilityOffIcon from './components/VisibilityOffIcon'
import BrazilIcon from './components/BrazilIcon'
import UsaIcon from './components/UsaIcon'
import ChevronDownIcon from './components/ChevronDown'

// TYPES
import { IconProps as Props } from './types'

const Icon = ({ variation = 'sun', ...svgProps }: Props) => {
  const Icon = {
    sun: <SunIcon {...svgProps} />,
    moon: <MoonIcon {...svgProps} />,
    'visibility-on': <VisibilityIcon {...svgProps} />,
    'visibility-off': <VisibilityOffIcon {...svgProps} />,
    br: <BrazilIcon {...svgProps} />,
    en: <UsaIcon {...svgProps} />,
    'chevron-down': <ChevronDownIcon {...svgProps} />,
  }

  return Icon[variation]
}

export default Icon
