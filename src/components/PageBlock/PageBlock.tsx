import type { PageBlockProps } from './PageBlock.types'
import * as S from './PageBlock.styles'

export function PageBlock({
  children,
  gap,
  marginTop,
  marginBottom,
}: PageBlockProps) {
  return (
    <S.PageBlockContainer
      gap={gap}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </S.PageBlockContainer>
  )
}
