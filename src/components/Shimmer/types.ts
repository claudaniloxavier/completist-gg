export interface CircleShimmerProps {
  type: 'circle'
  size: number
}

export interface DefaultShimmerProps {
  type: 'square' | 'rounded' | 'pill'
  width?: number | '100%'
  height?: number
}

export type ShimmerProps = CircleShimmerProps | DefaultShimmerProps
