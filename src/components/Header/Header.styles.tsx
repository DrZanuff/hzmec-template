import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  background: ${({ theme }) => theme.colors.DARK};
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
  z-index: 2;

  /* @media (max-width: 1024px) {
    position: fixed;
    top: 0;
  } */
`

export const HeaderInnerContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: ${({ theme }) => theme.DESKTOP};
`
export const HeaderTopContent = styled.div`
  display: flex;
  gap: 30px;

  align-items: center;
  margin-top: 30px;

  svg {
    width: 265px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 22px;
    padding: 16px;
    margin-bottom: 6px;

    svg {
      width: 180px;
    }
  }
`
export const MenuInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
`

export const HeaderBottomContent = styled.nav`
  display: flex;
  justify-content: center;
  margin: 22px 0px 14px;

  @media (max-width: 1024px) {
    display: none;
  }

  /* ul {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
  }

  li {
    a {
      font-family: RobotoCondensed;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.YELLOW};
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.7);
      }
    }

    &#current {
      a {
        cursor: default;
        pointer-events: none;
        color: ${({ theme }) => theme.colors.WHITE};
      }
    }

    &.is-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.YELLOW};
      border-radius: 1px;
      margin: 0 6px;
      transition: background-color 0.1s ease-in-out;

      a {
        display: flex;
        color: ${({ theme }) => theme.colors.DARK};
        width: 100%;
        text-align: center;
        padding: 4px 20px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.WHITE};
      }
    }
  } */
`
