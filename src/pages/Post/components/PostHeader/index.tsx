import { Link } from 'react-router-dom'
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

import * as S from './styles'
import { useTheme } from 'styled-components'

export function PostHeader() {
  const { colors } = useTheme()

  return (
    <S.PostHeaderContainer>
      <header>
        <ExternalLink
          as={Link}
          to="/"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          iconPosition="left"
          text="voltar"
        />

        <ExternalLink
          href="https://github.com/pabloxt14"
          target="_blank"
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          iconPosition="right"
          text="ver no github"
        />
      </header>

      <TitleText size="xl" color="title" weight={700}>
        JavaScript data types and data structures
      </TitleText>

      <ul>
        <InfoWithIcon
          text="pabloxt14"
          textColor={colors['base-span']}
          icon={<FontAwesomeIcon icon={faGithub} />}
        />
        <InfoWithIcon
          text="Há 1 dia"
          textColor={colors['base-span']}
          icon={<FontAwesomeIcon icon={faCalendarDay} />}
        />
        <InfoWithIcon
          text={`${5} comentários`}
          textColor={colors['base-span']}
          icon={<FontAwesomeIcon icon={faComment} />}
        />
      </ul>
    </S.PostHeaderContainer>
  )
}
