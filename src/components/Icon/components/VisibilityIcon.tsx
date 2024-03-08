import { FC } from 'react'

// TYPES
import { CustomSVGProps } from '../types'

const VisibilityIcon: FC<CustomSVGProps> = ({
  height = 16,
  width = 16,
  fill = 'currentColor',
}: CustomSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        fill={fill}
        d="M12.18 4.596c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
      ></path>
    </svg>
  )
}

export default VisibilityIcon
