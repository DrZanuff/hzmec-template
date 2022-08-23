import type { EmblaExampleProps } from './EmblaExample.types'
import useEmblaCarousel from 'embla-carousel-react'
import * as S from './EmblaExample.styles'

export function EmblaExample({ value }: EmblaExampleProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  })

  return (
    <S.EmblaExampleContainer>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
          <div className="embla__slide">Slide 4</div>
          <div className="embla__slide">Slide 5</div>
        </div>
      </div>
    </S.EmblaExampleContainer>
  )
}
