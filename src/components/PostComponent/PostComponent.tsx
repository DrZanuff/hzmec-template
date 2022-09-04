/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { PostComponentProps } from './PostComponent.types'
import * as S from './PostComponent.styles'

export function PostComponent({
  image,
  text,
  title,
  url,
  compact,
  ctaText = 'Ver mais',
}: PostComponentProps) {
  const fomatedTitle = useMemo(() => {
    if (compact) {
      return title?.length < 20 ? title : title?.substring(0, 17) + '...'
    }

    return title?.length < 50 ? title : title?.substring(0, 47) + '...'
  }, [title, compact])

  const summary = useMemo(() => {
    if (compact) {
      return text?.length < 200 ? text : text?.substring(0, 200)
    }

    return text?.length < 750 ? text : text?.substring(0, 750)
  }, [text, compact])

  return (
    <S.PostComponentContainer compact={compact}>
      <img src={image} alt={title} />
      {/* <Image src={image} alt={title} layout="fill" /> */}
      <S.PostContent compact={compact}>
        <h3>{fomatedTitle}</h3>
        <p>{summary}</p>
        <S.ButtonContainer>
          <Link href={url}>{ctaText}</Link>
        </S.ButtonContainer>
      </S.PostContent>
    </S.PostComponentContainer>
  )
}
