import { ReactNode } from 'react'
import * as S from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string
}

export function InfoWithIcon({ text, icon }: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer>
      {icon}
      <p>{text}</p>
    </S.InfoWithIconContainer>
  )
}
