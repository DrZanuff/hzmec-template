import { useCallback, useRef } from 'react'
import { instagramPostContext } from '../../Atoms/HomePageAtoms'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { CarouselArrowLeft, CarouselArrowRight } from '../../Icons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import * as S from './Instafeed.styles'

export function Instafeed() {
  const instagramPosts = useRecoilValue(instagramPostContext)

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (instagramPosts.length === 0) {
    return null
  }

  return (
    <S.InstafeedContainer>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {instagramPosts.map((post, index) => (
              <div key={index} className="embla__slide">
                <a href={post.link} target="_blank" rel="noreferrer">
                  <Image
                    src={`data:image/jpg;base64, ${post.image}`}
                    alt={post.text}
                    width={205}
                    height={205}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          <CarouselArrowLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <CarouselArrowRight />
        </button>
      </div>
    </S.InstafeedContainer>
  )
}
