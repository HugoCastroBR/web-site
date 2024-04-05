import { CustomTextProps } from '@/types/components'
import React from 'react'

const CustomText = ({
  text,
  color,
  weight,
  styles,
  className
}:CustomTextProps) => {
  return (
    <span
      style={{
        color: color || '#1C1C21',
        fontWeight: weight || '600',
        ...styles
      }}
      className={className}
    >
      {text || 'Default Text'}
    </span>
  )
}

export default CustomText