export type ColorOptions = 'yellow' | 'dark'

export interface TitleSeparatorProps {
  right?: string | 'unset'
  left?: string | 'unset'
  color: ColorOptions
}

export type TitleSeparatorPosition = Omit<TitleSeparatorProps, 'color'>

export type TitleSeparatorColor = Omit<TitleSeparatorProps, 'right' | 'left'>
