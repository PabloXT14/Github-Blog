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
import { useEffect, useState } from 'react'
import { githubAPI } from '../../../../libs/githubAPI'

export interface ProfileProps {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  followers: number
  company: string
}

export function Profile() {
  const [profileDatas, setProfileDatas] = useState<ProfileProps>(
    {} as ProfileProps,
  )

  async function fetchProfileDatas() {
    try {
      const response = await githubAPI.get('/users/pabloxt14')
      setProfileDatas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfileDatas()
  }, [])

  return (
    <S.ProfileContainer>
      <S.ProfileAvatar src={profileDatas.avatar_url} alt="" />

      <S.ProfileDetails>
        <header>
          <TitleText size="xl" color="title">
            {profileDatas.name}
          </TitleText>
          <ExternalLink
            href={profileDatas.html_url}
            target="_blank"
            text="github"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            iconPosition="right"
          />
        </header>

        <RegularText color="text" size="m">
          {profileDatas.bio}
        </RegularText>

        <S.ProfileInfoContainer>
          <InfoWithIcon
            text={profileDatas.login}
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
          {profileDatas.company && (
            <InfoWithIcon
              text={profileDatas.company}
              icon={<FontAwesomeIcon icon={faBuilding} />}
            />
          )}
          <InfoWithIcon
            text={`${profileDatas.followers} seguidores`}
            icon={<FontAwesomeIcon icon={faUserGroup} />}
          />
        </S.ProfileInfoContainer>
      </S.ProfileDetails>
    </S.ProfileContainer>
  )
}
