import { useCallback } from 'react'
import { CarouselArrowLeft, CarouselArrowRight } from '../../Icons'
import type { EmblaExampleProps } from './EmblaExample.types'
import useEmblaCarousel from 'embla-carousel-react'
import * as S from './EmblaExample.styles'

export function EmblaExample({ value }: EmblaExampleProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    draggable: true,
    // breakpoints: {'(max-width: 1024px)' : {

    // }}
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <S.EmblaExampleContainer>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
            <div className="embla__slide">Slide 4</div>
            <div className="embla__slide">Slide 5</div>
          </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          <CarouselArrowLeft />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <CarouselArrowRight />
        </button>
      </div>
    </S.EmblaExampleContainer>
  )
}
