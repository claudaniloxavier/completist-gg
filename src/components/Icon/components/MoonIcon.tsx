import { FC } from 'react'

// TYPES
import { CustomSVGProps } from '../types'

const MoonIcon: FC<CustomSVGProps> = ({
  height = 16,
  width = 16,
}: CustomSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 13 14"
    >
      <path
        fill="#51C1FF"
        d="M7 14c2.16 0 4.131-.982 5.438-2.592a.328.328 0 00-.317-.53c-3.396.648-6.515-1.956-6.515-5.385A5.48 5.48 0 018.382.725a.328.328 0 00-.103-.608A7 7 0 000 7a7 7 0 007 7z"
      ></path>
    </svg>
  )
}

export default MoonIcon
