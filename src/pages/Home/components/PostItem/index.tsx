import { IPost } from '../..'
import { TitleText } from '../../../../components/Typography'
import { relativeDateDistanceToNow } from '../../../../utils/formatter'
import * as S from './styles'

interface PostItemProps {
  post: IPost
}

export function PostItem({ post }: PostItemProps) {
  const formattedDate = relativeDateDistanceToNow(post.created_at)

  return (
    <S.PostItemContainer to={`/post/${post.number}`}>
      <S.PostItemTop>
        <TitleText as="h3" size="l" color="title" weight={700}>
          {post.title}
        </TitleText>
        <span>{formattedDate}</span>
      </S.PostItemTop>

      <S.PostItemContent>{post.body}</S.PostItemContent>
    </S.PostItemContainer>
  )
}
