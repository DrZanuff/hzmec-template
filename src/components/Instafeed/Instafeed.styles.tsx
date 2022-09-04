import styled from 'styled-components'

export const InstafeedContainer = styled.div`
  display: flex;

  .embla {
    position: relative;
    width: 100%;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 0px;
    height: 265px;

    button {
      background: none;
      border: none;

      position: absolute;
      transition: filter 0.1s ease-in-out;
      top: 90px;

      &.embla__prev {
        left: -50px;
      }

      &.embla__next {
        right: -50px;
      }

      @media (max-width: 1024px) {
        top: 110px;

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
    height: 215px;

    @media (max-width: 1024px) {
      height: 100%;
    }
  }

  .embla__container {
    display: flex;

    @media (max-width: 1024px) {
      height: 100%;
    }
  }
  .embla__slide {
    flex: 0 0 25%;
    height: 200px;
    padding-left: 10px;
    padding-right: 4px;

    @media (max-width: 1024px) {
      flex: 0 0 100%;
      height: 100%;
    }

    a {
      display: flex;

      width: 100%;
      max-width: 208px;
      border-radius: 4px;
      filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.5));
      overflow: hidden;

      @media (max-width: 1024px) {
        max-width: 100%;
        height: 95%;
        justify-content: center;
      }

      @media (max-width: 1024px) {
        span {
          width: 100% !important;
          height: 100% !important;
        }
      }

      img {
        display: flex;
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        max-width: 208px;
        transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;

        @media (max-width: 1024px) {
          max-width: 100%;
        }

        &:hover {
          filter: brightness(0.9);
          transform: scale(1.05);
          cursor: pointer;
        }
      }
    }
  }
`
