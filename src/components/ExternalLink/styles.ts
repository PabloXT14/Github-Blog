import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-color']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-color']};
  }
`
