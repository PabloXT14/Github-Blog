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
`

interface IconContainerProps {
  iconColor: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 1.125rem;
  height: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ iconColor }) => iconColor};
  }
`
