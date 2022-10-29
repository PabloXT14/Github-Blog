import { ReactNode } from 'react'
import * as S from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  iconColor?: string
  text: string
  textColor?: string
}

export function InfoWithIcon({
  text,
  icon,
  textColor,
  iconColor,
}: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer textColor={textColor} iconColor={iconColor}>
      {icon}
      <p>{text}</p>
    </S.InfoWithIconContainer>
  )
}
