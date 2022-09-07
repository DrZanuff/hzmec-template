import * as S from './TitleSeparator.styles'
import type { TitleSeparatorProps } from './TitleSeparator.types'

export function TitleSeparator({ color, left, right }: TitleSeparatorProps) {
  return (
    <S.TitleSeparatorContainer right={right} left={left}>
      <S.BarsContainer>
        <S.Bar color={color} />
        <S.Bar color={color} />
      </S.BarsContainer>
    </S.TitleSeparatorContainer>
  )
}
