import Link from 'next/link'
import { TitleSeparator } from './components/TitleSeparator'
import type { TitleBarProps } from './TitleBar.types'
import * as S from './TitleBar.styles'

export function TitleBar({ title, url }: TitleBarProps) {
  return (
    <S.TitleBarContainer>
      <h2>{title}</h2>
      {url && <Link href={url}>Ver tudo</Link>}
      <TitleSeparator />
    </S.TitleBarContainer>
  )
}
