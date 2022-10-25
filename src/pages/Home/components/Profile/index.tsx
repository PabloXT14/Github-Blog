import { TitleText } from '../../../../components/Typography'
import { FaExternalLinkAlt } from 'react-icons/fa'
import * as S from './styles'

export function Profile() {
  const imgAvatar = 'https://avatars.githubusercontent.com/u/71723595?v=4'

  return (
    <S.ProfileContainer>
      <img src={imgAvatar} alt="" />
      <S.DescriptionContainer>
        <header>
          <TitleText size="xl" color="title">
            Cameron Williamson
          </TitleText>
          <S.LinkToAnotherPage
            href="https://github.com/pabloxt14"
            target="_blank"
          >
            Github
            <FaExternalLinkAlt size={12} />
          </S.LinkToAnotherPage>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          tempora?
        </p>
        <S.InfoContainer>
          <div>😺 cameronwll</div>
          <div>🚀 Rocketseat</div>
          <div>🙍‍♂️ 32 seguidores</div>
        </S.InfoContainer>
      </S.DescriptionContainer>
    </S.ProfileContainer>
  )
}
