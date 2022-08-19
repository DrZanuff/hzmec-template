import styled from 'styled-components'
import { CollumnProps } from './Footer.types'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1a2027;
  color: ${({ theme }) => theme.colors.WHITE};
`

export const FooterInnerContent = styled.div`
  max-width: 916px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 32px 0px 32px;
`

export const Collumm = styled.div<CollumnProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'unset')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'unset')};

  .centered-text {
    text-align: center;
    margin: 0px;
  }

  h3 {
    margin: 0px;
  }

  #follow-us {
    margin: 38px 0px 0px;
    font-family: RobotoCondensed;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`
