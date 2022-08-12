import type { TitleBarProps } from './TitleBar.types'
import * as S from './TitleBar.styles'

export function TitleBar ( { value } : TitleBarProps ) {

  return (
    <S.TitleBarContainer>
      <h1>TitleBar</h1>
      <h2>{value}</h2>
    </S.TitleBarContainer>
  )
}