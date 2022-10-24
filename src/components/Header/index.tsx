import * as S from './styles'
import logoImg from '../../assets/logo-github-blog.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoImg} alt="" />
    </S.HeaderContainer>
  )
}
