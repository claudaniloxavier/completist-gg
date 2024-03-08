/* eslint-disable prettier/prettier */
import React from 'react'

export type CustomSVGProps = React.SVGProps<SVGElement>

export interface IconProps extends CustomSVGProps {
  variation:
  | 'sun'
  | 'moon'
  | 'visibility-on'
  | 'visibility-off'
  | 'en'
  | 'br'
  | 'chevron-down'
}
