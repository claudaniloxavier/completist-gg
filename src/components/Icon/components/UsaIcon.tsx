import { FC } from 'react'

// TYPES
import { CustomSVGProps } from '../types'

const UsaIcon: FC<CustomSVGProps> = ({ height = 80, width = 60 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 60"
    >
      <g clipPath="url(#clip0_230_37)">
        <path fill="#BD3D44" d="M0 0h80v60H0"></path>
        <path
          fill="#000"
          d="M0 6.912h80zm0 9.213h80zm0 9.25h80zm0 9.25h80zm0 9.25h80zm0 9.25h80z"
        ></path>
        <path
          stroke="#fff"
          strokeWidth="4.625"
          d="M0 6.912h80M0 16.125h80m-80 9.25h80m-80 9.25h80m-80 9.25h80m-80 9.25h80"
        ></path>
        <path fill="#192F5D" d="M0 0h45.6v32.313H0"></path>
      </g>
      <defs>
        <clipPath id="clip0_230_37">
          <path fill="#fff" d="M0 0H80V60H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default UsaIcon
