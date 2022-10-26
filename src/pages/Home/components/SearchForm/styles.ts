import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-weight: 700;
      font-size: ${({ theme }) => theme.textSizes['title-m']};
      line-height: 160%;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
      line-height: 160%;
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  form {
    width: 100%;

    input {
      width: 100%;
      height: 50px;
      padding: 0.75rem 1rem;

      background: ${({ theme }) => theme.colors['base-input']};
      border: 1px solid ${({ theme }) => theme.colors['base-border']};
      border-radius: 6px;

      font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.colors['base-title']};
      transition: border-color 0.4s;

      box-shadow: none;

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors['brand-color']};
      }
    }
  }
`
