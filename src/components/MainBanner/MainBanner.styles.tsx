import styled from 'styled-components'

export const MainBannerContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;

  background-color: ${({ theme }) => theme.colors.BACKGROUND};

  .embla {
    position: relative;

    padding: 35px 0 29px;
    max-width: 915px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: unset;
      width: 100%;
      padding: 35px 30px 29px;
    }

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
          display: none;
        }

        &.embla__next {
          display: none;
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
    /* padding-left: 10px; */
  }
`
