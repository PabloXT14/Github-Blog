import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer className="container">
      <Profile />
      <SearchForm />
    </S.HomeContainer>
  )
}
