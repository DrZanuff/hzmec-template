import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  display: none;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    width: 34px;
    height: 34px;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      width: 34px;
      height: 34px;
    }
  }
`

interface MenuProps {
  active: boolean
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  width: 100vw;
  min-height: 300px;

  position: absolute;
  top: ${({ active }) => (active === true ? '50px' : '-100vh')};
  opacity: ${({ active }) => (active === true ? '100%' : '0%')};
  left: -16px;

  transition: top 0.2s ease-in-out, opacity 0.1s ease-in-out;

  background: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`
