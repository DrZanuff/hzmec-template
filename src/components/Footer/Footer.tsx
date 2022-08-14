import type { FooterProps } from './Footer.types'
import * as S from './Footer.styles'

export function Footer({ value }: FooterProps) {
  return (
    <S.FooterContainer>
      <S.FooterInnerContent>
        <h1>Footer</h1>
        <h2>{value}</h2>
        <img src="../MapImage.png" alt="Mapa da HZMEC" />
      </S.FooterInnerContent>
    </S.FooterContainer>
  )
}
