import * as S from './styles'
import { PostHeader } from './components/PostHeader'

export function Post() {
  return (
    <S.PostContainer className="container">
      <PostHeader />
    </S.PostContainer>
  )
}
