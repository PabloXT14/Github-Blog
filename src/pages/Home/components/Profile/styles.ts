import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  margin-bottom: 4.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LinkToAnotherPage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['brand-color']};
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`
