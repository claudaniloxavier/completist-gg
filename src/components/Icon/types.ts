import React from 'react'

export type CustomSVGProps = React.SVGProps<SVGElement>

export interface IconProps extends CustomSVGProps {
  variation: 'sun' | 'moon'
}
