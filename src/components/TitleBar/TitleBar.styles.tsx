import styled from 'styled-components'

export const TitleBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.DARK};
  border-radius: 6px;
  overflow: hidden;
  justify-content: space-between;
  position: relative;

  a {
    margin: 0;
    padding: 10px 18px;
    color: ${({ theme }) => theme.colors.YELLOW};
    font-family: RobotoCondensed;
    font-weight: bold;
    font-size: 12px;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.7);
      text-decoration: underline;
    }
  }
`

export const Title = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 6px 12px;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.WHITE};
    font-family: RobotoCondensed;
    font-weight: bold;
    font-size: 18px;
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.WHITE};
    font-family: RobotoCondensed-Normal;
    font-weight: normal;
    font-size: 18px;
  }
`
