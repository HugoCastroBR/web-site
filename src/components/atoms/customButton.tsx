'use client'
import { CustomButtonProps } from '@/types/components'
import React from 'react'

const CustomButton = ({
  children,
  borderSize,
  rounded,
  disabled,
  loading,
  onClick,
  styles,
  type = 'simple',
  className
}:CustomButtonProps) => {

  if(type === 'outline') {
    return (
      <button
        className={`
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${loading ? 'cursor-wait' : 'cursor-pointer'}
        w-fit py px-1 border-primaryBg 
        ${className}
        `}
        onClick={onClick}
        style={{
          borderRadius: rounded || 8,
          borderWidth: borderSize || 1,
          ...styles
        }}
      >
        {children}
      </button>
    )
  };
  if(type === 'filled') {
    return (
      <button
        onClick={onClick}
        style={{
          ...styles
        }}
      >
        {children}
      </button>
    )
  };
    return (
      <button
        onClick={onClick}
        style={{
          ...styles
        }}
      >
        {children}
      </button>
    )
}

export default CustomButton