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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
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
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: unset;
    padding: 0 29px;
    img {
      max-width: 350px;
    }
  }
`

export const FirstCollumn = styled(Collumm)`
  #institutional {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 36px 34px 53px;
    #institutional {
      gap: 24px;
    }
    #follow-us {
      margin: 0px;
      p {
        margin-top: 0px;
      }
    }
  }
`

export const LastColumn = styled(Collumm)`
  @media (max-width: 1024px) {
    margin-top: 36px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
`
