import { ReactNode } from 'react'
import * as S from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconColor: string
}

export function InfoWithIcon({ text, icon, iconColor }: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer>
      <S.IconContainer iconColor={iconColor}>{icon}</S.IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </S.InfoWithIconContainer>
  )
}
