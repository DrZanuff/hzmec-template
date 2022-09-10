import type { ColorOptions } from './components/TitleSeparator/TitleSeparator.types'
export interface TitleBarProps {
  title: string
  subTItle?: string
  url?: string
  right?: string
  left?: string
  color?: ColorOptions
}
