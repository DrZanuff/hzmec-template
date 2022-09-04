import type { PostComponentBaseProps } from './PostComponent.types'
import styled, { css } from 'styled-components'

export const PostComponentContainer = styled.div<PostComponentBaseProps>`
  display: flex;
  width: 100%;
  gap: ${({ compact }) => (compact === true ? 9 : 17)}px;

  width: 100%;

  max-width: ${({ compact }) => (compact === true ? '400px' : '100%')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.4); */
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.4));

    ${({ compact }) =>
      compact === true
        ? css`
            max-width: 176px;
            max-height: 165px;
            min-width: 176px;
            min-height: 165px;
            border-radius: 4px;
          `
        : css`
            max-width: 213px;
            max-height: 200px;
            min-width: 213px;
            min-height: 200px;
            border-radius: 6px;
          `}
  }

  @media (max-width: 1024px) {
    width: 100%;
    gap: 9px;

    img {
      max-width: 176px;
      max-height: 165px;
      min-width: 176px;
      min-height: 165px;
      border-radius: 6px;
    }
  }
`

export const PostContent = styled.div<PostComponentBaseProps>`
  display: flex;
  flex-direction: column;

  gap: ${({ compact }) => (compact === true ? 15 : 13)}px;

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.BLACK};
    margin: 0;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }

  p {
    margin: 0;

    font-family: RobotoCondensed-Light;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    text-align: justify;

    color: ${({ theme }) => theme.colors.BLACK};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    ${({ compact }) =>
      compact === true
        ? css`
            -webkit-line-clamp: 6;
            line-clamp: 6;
          `
        : css`
            -webkit-line-clamp: 8;
            line-clamp: 8;
          `}

    @media (max-width: 1024px) {
      gap: 8px;
      -webkit-line-clamp: 7;
      line-clamp: 7;
    }
  }
`

export const ButtonContainer = styled.div<PostComponentBaseProps>`
  display: flex;
  justify-content: flex-end;

  a {
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.YELLOW};
    color: ${({ theme }) => theme.colors.BACKGROUND};
    border-radius: 2px;

    padding: 6px 19px;
    min-width: ${({ compact }) => (compact === true ? 79 : 129)}px;
    height: 24px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: center;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 1024px) {
      min-width: 79;
    }
  }
`
