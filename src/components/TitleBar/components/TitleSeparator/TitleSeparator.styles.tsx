import styled from 'styled-components'

export const TitleSeparatorContainer = styled.div`
  position: absolute;
  right: 70px;
  top: -5px;
`

export const BarsContainer = styled.div`
  display: flex;
  gap: 7px;
  transform: rotate(13.14deg);
`
export const Bar = styled.div`
  width: 5.5px;
  height: 47px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`
