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
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  width: 100%;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h2 {
      line-height: 130%;
    }
  }

  & > p {
    margin-bottom: 1.5rem;
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`
