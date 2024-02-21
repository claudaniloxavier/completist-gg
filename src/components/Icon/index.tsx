import SunIcon from './components/SunIcon'
import MoonIcon from './components/MoonIcon'

// TYPES
import { IconProps as Props } from './types'

const Icon = ({ variation = 'sun' }: Props) => {
  const Icon = {
    sun: <SunIcon />,
    moon: <MoonIcon />,
  }

  return Icon[variation]
}

export default Icon
