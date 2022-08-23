import styled from 'styled-components'

export const EmblaExampleContainer = styled.div`
  display: flex;

  .embla {
    position: relative;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden;
    border: 2px solid blue;
  }

  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 25%;
    /* width: 100%; */
    border: 2px solid red;
    height: 200px;
    padding-left: 10px;
  }
`
