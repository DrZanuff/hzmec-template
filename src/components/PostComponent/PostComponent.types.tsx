export interface PostComponentBaseProps {
  compact?: boolean
}

export interface PostComponentProps extends PostComponentBaseProps {
  title: string
  text: string
  image: string
  url: string
  ctaText?: string
}
