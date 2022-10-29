import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  padding: 2rem;
  margin-bottom: 4.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    width: 100%;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
  }
`
