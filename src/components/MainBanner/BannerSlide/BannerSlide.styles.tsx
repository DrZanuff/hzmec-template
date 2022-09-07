import styled from 'styled-components'

export const BannerSlideContainer = styled.div`
  display: flex;
  border-radius: 12px;
  height: 178px;
  padding: 0 5px;

  filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.4));

  @media (max-width: 1024px) {
    flex-direction: column;
    border-radius: 0px;
    overflow: visible;
    gap: 15px;
    filter: none;
    height: fit-content;
  }
`

export const BannerImage = styled.img`
  width: 368px;

  border-radius: 12px 0px 0px 12px;

  @media (max-width: 1024px) {
    width: 100%;
    border-radius: 12px;
    filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.4));
  }
`

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.DARK};
  position: relative;

  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.45);
  z-index: 2;
  border-radius: 0px 12px 12px 0px;

  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.WHITE};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;

    margin: 25px 22px 29px 35px;

    @media (max-width: 1024px) {
      margin: 25px 22px 40px 35px;
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }

  a {
    cursor: pointer;

    font-family: BebasNeue;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: ${({ theme }) => theme.colors.YELLOW};

    position: absolute;
    bottom: 10px;
    right: 35px;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 1024px) {
      right: 9px;
    }
  }

  @media (max-width: 1024px) {
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    margin-bottom: 5px;
  }
`

export const TitleBarBanner = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  overflow: hidden;
  position: relative;

  background-color: ${({ theme }) => theme.colors.YELLOW};

  h1 {
    margin: 4px 0 0;
    padding-left: 50px;

    font-family: BebasNeue;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.BACKGROUND};
  }
`
