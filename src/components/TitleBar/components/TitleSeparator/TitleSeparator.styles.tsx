import styled, { css } from 'styled-components'
import type {
  TitleSeparatorPosition,
  TitleSeparatorColor,
} from './TitleSeparator.types'

export const TitleSeparatorContainer = styled.div<TitleSeparatorPosition>`
  position: absolute;
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  top: -5px;
`

export const BarsContainer = styled.div`
  display: flex;
  gap: 7px;
  transform: rotate(13.14deg);
`
export const Bar = styled.div<TitleSeparatorColor>`
  width: 5.5px;
  height: 47px;
  background-color: ${({ theme, color }) => {
    return color === 'yellow' ? theme.colors.YELLOW : theme.colors.BACKGROUND
  }};
`
