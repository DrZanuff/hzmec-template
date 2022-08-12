import { ReactNode } from 'react'

export interface PageBlockContainerProps {
  gap?: number
  marginTop?: number
  marginBottom?: number
}

export interface PageBlockProps extends PageBlockContainerProps {
  children?: ReactNode
}
