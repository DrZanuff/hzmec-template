import { TitleSeparator } from '../../TitleBar/components/TitleSeparator'
import Link from 'next/link'
import type { BannerSlideProps } from './BannerSlide.types'
import * as S from './BannerSlide.styles'

export function BannerSlide({ img, text, title, url }: BannerSlideProps) {
  return (
    <S.BannerSlideContainer className="embla__slide">
      <S.BannerImage src={img} alt={title} />

      <S.BannerContent>
        <S.TitleBarBanner>
          <TitleSeparator color="dark" left="10px" />
          <h1>{title}</h1>
        </S.TitleBarBanner>
        <p>{text}</p>
        <Link href={url}>CONFIRA</Link>
      </S.BannerContent>
    </S.BannerSlideContainer>
  )
}
