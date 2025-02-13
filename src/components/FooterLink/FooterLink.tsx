import type { FooterLinkProps } from './FooterLink.types'
import * as S from './FooterLink.styles'
import Link from 'next/link'

export function FooterLink({ text, path, icon }: FooterLinkProps) {
  return (
    <S.FooterLinkContainer>
      {path && <Link href={path}>{text}</Link>}
      {icon}
    </S.FooterLinkContainer>
  )
}
