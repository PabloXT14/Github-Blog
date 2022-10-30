import { RegularText, TitleText } from '../../../../components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useCallback, useEffect, useState } from 'react'
import { githubAPI } from '../../../../libs/githubAPI'

import * as S from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME

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
  const [isLoadingUserData, setIsLoadingUserData] = useState(false)

  const fetchUserData = useCallback(async () => {
    try {
      setIsLoadingUserData(true)
      const response = await githubAPI.get(`/users/${username}`)
      setProfileDatas(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingUserData(false)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <S.ProfileContainer>
      {isLoadingUserData ? (
        <p>Is Loading User Data...</p>
      ) : (
        <>
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
        </>
      )}
    </S.ProfileContainer>
  )
}
