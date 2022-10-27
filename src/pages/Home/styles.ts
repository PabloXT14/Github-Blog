import styled from 'styled-components'

export const HomeContainer = styled.main`
  /* background: tomato; */
`

export const PostsPreviewContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 14rem;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
  }
`
