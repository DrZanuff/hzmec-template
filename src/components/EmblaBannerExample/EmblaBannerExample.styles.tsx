import styled from 'styled-components'

export const EmblaBannerExampleContainer = styled.div`
  display: flex;

  .embla {
    position: relative;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    border: 2px solid blue;

    button {
      background: none;
      border: none;

      position: absolute;
      transition: filter 0.1s ease-in-out;

      &.embla__prev {
        top: 50%;
        left: -50px;
      }

      &.embla__next {
        top: 50%;
        right: -50px;
      }

      @media (max-width: 1024px) {
        &.embla__prev {
          left: -30px;
        }

        &.embla__next {
          right: -30px;
        }
      }

      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    border: 2px solid red;
    height: 200px;
    padding-left: 10px;
  }
`
