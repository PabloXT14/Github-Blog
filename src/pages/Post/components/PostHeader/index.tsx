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

import * as S from './styles'
import { relativeDateDistanceToNow } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: IPost
  isLoadingPostData: boolean
}

export function PostHeader({ postData, isLoadingPostData }: PostHeaderProps) {
  const { colors } = useTheme()
  const navigate = useNavigate()

  function goBack() {
    navigate(-1) // volta para a rota anterior
  }

  let formattedDate =
    postData.created_at && relativeDateDistanceToNow(postData.created_at)

  // Deixando primeira letra da string em maiúsculo
  formattedDate =
    formattedDate && formattedDate[0].toUpperCase() + formattedDate.substring(1)

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
              text={formattedDate}
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
