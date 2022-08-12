import type { HomeComponentProps } from './HomeComponent.types'
import * as S from './HomeComponent.styles'
// import Link from 'next/link

export function HomeComponent({ value }: HomeComponentProps) {
  return (
    <S.HomeComponentContainer>
      <h1>Oi</h1>
    </S.HomeComponentContainer>
  )
}
