import { HTMLAttributes, HTMLProps } from "react"

export type CustomTextProps = {
  text?: string
  size?: number
  color?: string
  weight?: number 
  styles?: React.CSSProperties
  className?: string
}

export type CustomButtonProps = {
  styles?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children?: React.ReactNode
  type?: 'simple' | 'outline' | 'filled'
  rounded?: number
  borderSize?: number
  className ?: string
}