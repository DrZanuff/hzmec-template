import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 28px;

  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.45);
  border-radius: 6px;
`
