import { useCallback, useRef } from 'react'
import { BannerSlide } from './BannerSlide'
import { CarouselArrowLeft, CarouselArrowRight } from '../../Icons'
import { bannerContext } from '../../Atoms/HomePageAtoms/'
import { useRecoilValue } from 'recoil'
import Autoplay from 'embla-carousel-autoplay'
import type { MainBannerProps } from './MainBanner.types'
import useEmblaCarousel from 'embla-carousel-react'
import * as S from './MainBanner.styles'

export function MainBanner({ value }: MainBannerProps) {
  const banners = useRecoilValue(bannerContext)

  const autoplay = useRef(Autoplay({ delay: 9000, stopOnInteraction: true }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      draggable: true,
      speed: 7,
    },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <S.MainBannerContainer>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {banners?.map((banner, index) => (
              <BannerSlide
                key={index}
                title={banner.fields.titulo}
                img={banner.fields.imagem[0].url}
                text={banner.fields.texto}
                url={banner.fields?.url ? banner.fields?.url : '/'}
              />
            ))}
            {/* <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
            <div className="embla__slide">Slide 4</div>
            <div className="embla__slide">Slide 5</div> */}
          </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          <CarouselArrowLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <CarouselArrowRight />
        </button>
      </div>
    </S.MainBannerContainer>
  )
}
