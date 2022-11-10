import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['brand-color']};
  }

  img {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors['brand-color']};
    text-decoration-line: underline;
    transition: text-decoration 0.4s ease;

    &:hover {
      text-decoration: none;
    }
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;
    border-radius: 2px;

    & > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
