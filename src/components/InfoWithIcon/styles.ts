import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > p {
    flex: 1;
    text-align: left;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & > svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
