import { RegularText, TitleText } from '../../../../components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

import * as S from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'

export function Profile() {
  const imgAvatar = 'https://github.com/pabloxt14.png'

  return (
    <S.ProfileContainer>
      <S.ProfileAvatar src={imgAvatar} alt="" />

      <S.ProfileDetails>
        <header>
          <TitleText size="xl" color="title">
            Cameron Williamson
          </TitleText>
          <ExternalLink
            href="https://github.com/pabloxt14"
            target="_blank"
            text="github"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            iconPosition="right"
          />
        </header>

        <RegularText color="text" size="m">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </RegularText>

        <S.ProfileInfoContainer>
          <InfoWithIcon
            text="cameronwll"
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          <InfoWithIcon
            text="Rocketseat"
            icon={<FontAwesomeIcon icon={faBuilding} />}
          />
          <InfoWithIcon
            text="32 seguidores"
            icon={<FontAwesomeIcon icon={faUserGroup} />}
          />
        </S.ProfileInfoContainer>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
