import { useMemo } from 'react'
import Link from 'next/link'
import { TitleSeparator } from './components/TitleSeparator'
import type { TitleBarProps } from './TitleBar.types'
import type { TitleSeparatorPosition } from './components/TitleSeparator/TitleSeparator.types'
import * as S from './TitleBar.styles'

export function TitleBar({
  title,
  subTItle,
  url,
  color = 'yellow',
  left,
  right,
}: TitleBarProps) {
  const options = useMemo(() => {
    if (!left && !right) {
      return {
        right: '70px',
      }
    }

    let optionObject: TitleSeparatorPosition = {}

    optionObject.left = left ? left : 'unset'
    optionObject.right = right ? right : 'unset'

    return optionObject
  }, [left, right])

  return (
    <S.TitleBarContainer>
      <S.Title>
        <h2>{title}</h2>
        <h3>{subTItle}</h3>
      </S.Title>
      {url && <Link href={url}>Ver tudo</Link>}
      <TitleSeparator color={color} {...options} />
    </S.TitleBarContainer>
  )
}
