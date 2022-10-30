import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { IPost } from '../..'
import { TitleText } from '../../../../components/Typography'
import * as S from './styles'

interface PostItemProps {
  post: IPost
}

export function PostItem({ post }: PostItemProps) {
  return (
    <S.PostItemContainer to={`/post/${post.number}`}>
      <S.PostItemTop>
        <TitleText as="h3" size="l" color="title" weight={700}>
          {post.title}
        </TitleText>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </S.PostItemTop>

      <S.PostItemContent>{post.body}</S.PostItemContent>
    </S.PostItemContainer>
  )
}
