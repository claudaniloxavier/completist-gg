import { FC } from 'react'

// TYPES
import { CustomSVGProps } from '../types'

const SunIcon: FC<CustomSVGProps> = ({ height = 16, width = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_1_575)">
        <path
          fill="#F4AC10"
          d="M4.507 3.227l-1.2-1.194-.94.94L3.56 4.167l.947-.94zM2.667 7h-2v1.333h2V7zm6-6.633H7.333v1.966h1.334V.367zm4.966 2.606l-.94-.94L11.5 3.227l.94.94 1.193-1.194zm-2.14 9.134l1.194 1.2.94-.94-1.2-1.194-.934.934zM13.333 7v1.333h2V7h-2zM8 3.667c-2.207 0-4 1.793-4 4 0 2.206 1.793 4 4 4s4-1.794 4-4c0-2.207-1.793-4-4-4zm-.667 11.3h1.334V13H7.333v1.967zM2.367 12.36l.94.94L4.5 12.1l-.94-.94-1.193 1.2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_575">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default SunIcon
