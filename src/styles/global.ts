import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({ theme }) => theme.colors['brand-color']};
  }

  html {
    @media (max-width: 1024px) {
      font-size: 93.75%; /* 15px */
    }

    @media (max-width: 768px) {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: ${({ theme }) => theme.fonts.default}, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
