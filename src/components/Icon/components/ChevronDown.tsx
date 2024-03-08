import { FC } from 'react'

// TYPES
import { CustomSVGProps } from '../types'

const ChevronDownIcon: FC<CustomSVGProps> = ({
  height = 24,
  width = 24,
}: CustomSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 16.4a1.48 1.48 0 01-1.005-.395l-6.6-6.601C4.132 9.14 4 8.806 4 8.399c0-.406.132-.741.395-1.004S4.993 7 5.399 7c.407 0 .742.132 1.005.395L12 12.99l5.596-5.596c.264-.263.598-.395 1.005-.395.407 0 .741.132 1.004.395.264.263.395.598.395 1.004 0 .407-.131.742-.395 1.005l-6.6 6.6a1.25 1.25 0 01-.467.305c-.167.06-.347.09-.538.09z"
      ></path>
    </svg>
  )
}

export default ChevronDownIcon
