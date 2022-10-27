import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { TitleText } from '../../../../components/Typography'
import * as S from './styles'

interface PostItemProps {
  title: string
  createdAt: string
  description: string
}

export function PostItem({ title, createdAt, description }: PostItemProps) {
  return (
    <S.PostItemContainer to="/post">
      <S.PostItemTop>
        <TitleText as="h3" size="l" color="title" weight={700}>
          {title}
        </TitleText>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </S.PostItemTop>

      <S.PostItemContent>{description}</S.PostItemContent>
    </S.PostItemContainer>
  )
}
