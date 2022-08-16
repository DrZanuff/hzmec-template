import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1a2027;
  color: ${({ theme }) => theme.colors.WHITE};
`

export const FooterInnerContent = styled.div`
  border: 1px solid blue;
  max-width: 916px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const CenterContainer = styled.div`
  max-width: 247px;
  padding: 10px;
`
export const CenteredText = styled.div`
  text-align: center;
  max-height: 35px;
`

export const RightContainer = styled.div`
  padding: 10px;
  width: 288px;
`

export const LeftContainer = styled.div`
  padding: 10px;
  width: 288px;
`
