/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import * as S from './styles'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <S.PostContentContainer>
      <ReactMarkdown children={content} />
    </S.PostContentContainer>
  )
}
