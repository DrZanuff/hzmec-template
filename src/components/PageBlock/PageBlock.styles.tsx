import styled from 'styled-components'
import type { PageBlockContainerProps } from './PageBlock.types'

export const PageBlockContainer = styled.div<PageBlockContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.DESKTOP};
  width: 100%;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0px')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : '0px'};

  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`
