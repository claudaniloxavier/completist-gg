import { FC } from 'react'

// TYPES
import { ShimmerProps, CircleShimmerProps, DefaultShimmerProps } from './types'

// STYLES
import styles from './styles.module.scss'
import classNames from 'classnames'

const Shimmer: FC<ShimmerProps> = ({
  type = 'rounded',
  ...props
}: ShimmerProps) => {
  if (type === 'circle') {
    const { size } = props as CircleShimmerProps
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={classNames(styles.shimmer, styles.circle)}
      />
    )
  }

  const { width = 120, height = 24 } = props as DefaultShimmerProps

  return (
    <div
      style={{
        width: width === '100%' ? width : `${width}px`,
        height: `${height}px`,
      }}
      className={classNames(styles.shimmer, {
        [styles.square]: type === 'square',
        [styles.rounded]: type === 'rounded',
        [styles.pill]: type === 'pill',
      })}
    />
  )
}

export default Shimmer
