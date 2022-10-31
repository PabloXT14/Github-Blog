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
import { Spinner } from '../../../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

export interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  name: string
  html_url: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileDatas, setProfileDatas] = useState<ProfileData>(
    {} as ProfileData,
  )
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(false)

  const fetchProfileData = useCallback(async () => {
    try {
      setIsLoadingProfileData(true)
      const response = await githubAPI.get(`/users/${username}`)
      setProfileDatas(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProfileData(false)
    }
  }, [])

  useEffect(() => {
    fetchProfileData()
  }, [fetchProfileData])

  return (
    <S.ProfileContainer>
      {isLoadingProfileData ? (
        <Spinner />
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
