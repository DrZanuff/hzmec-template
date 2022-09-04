import styled from 'styled-components'

export const HomeComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 46px;
  column-gap: 55px;
  justify-content: center;

  padding: 21px 29px 41px;

  @media (max-width: 1024px) {
    row-gap: 28px;
    padding: 22px 14px 45px;
  }
`
