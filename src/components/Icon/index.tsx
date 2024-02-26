// ICONS
import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'

// TYPES
import { IconProps as Props } from './types'

const Icon = ({ variation = 'sun', ...svgProps }: Props) => {
  const Icon = {
    sun: <SunIcon {...svgProps} />,
    moon: <MoonIcon {...svgProps} />,
  }

  return Icon[variation]
}

export default Icon
