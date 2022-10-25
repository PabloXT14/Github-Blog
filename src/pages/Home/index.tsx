import { Profile } from './components/Profile'
import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer className="container">
      <Profile />
    </S.HomeContainer>
  )
}
