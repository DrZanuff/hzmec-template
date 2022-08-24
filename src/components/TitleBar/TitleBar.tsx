import Link from 'next/link'
import { TitleSeparator } from './components/TitleSeparator'
import type { TitleBarProps } from './TitleBar.types'
import * as S from './TitleBar.styles'

export function TitleBar({ title, subTItle, url }: TitleBarProps) {
  return (
    <S.TitleBarContainer>
      <S.Title>
        <h2>{title}</h2>
        <h3>{subTItle}</h3>
      </S.Title>
      {url && <Link href={url}>Ver tudo</Link>}
      <TitleSeparator />
    </S.TitleBarContainer>
  )
}
