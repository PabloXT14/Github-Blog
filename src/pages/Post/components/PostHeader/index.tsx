import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { TitleText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { IPost } from '../../../Home'
import { Spinner } from '../../../../components/Spinner'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoadingPostData: boolean
}

export function PostHeader({ postData, isLoadingPostData }: PostHeaderProps) {
  const { colors } = useTheme()
  const navigate = useNavigate()

  const formattedDate = formatDistanceToNow(new Date('2022-11-08'), {
    addSuffix: true,
    locale: ptBR,
  })

  console.log(formattedDate)

  function goBack() {
    navigate(-1) // volta para a rota anterior
  }

  return (
    <S.PostHeaderContainer>
      {isLoadingPostData ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              iconPosition="left"
              text="voltar"
            />

            <ExternalLink
              href={postData?.html_url}
              target="_blank"
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              iconPosition="right"
              text="ver no github"
            />
          </header>

          <TitleText size="xl" color="title" weight={700}>
            {postData?.title}
          </TitleText>

          <ul>
            <InfoWithIcon
              text={postData?.user?.login}
              textColor={colors['base-span']}
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
            <InfoWithIcon
              text={postData?.created_at}
              textColor={colors['base-span']}
              icon={<FontAwesomeIcon icon={faCalendarDay} />}
            />
            <InfoWithIcon
              text={`${postData.comments} comentários`}
              textColor={colors['base-span']}
              icon={<FontAwesomeIcon icon={faComment} />}
            />
          </ul>
        </>
      )}
    </S.PostHeaderContainer>
  )
}
