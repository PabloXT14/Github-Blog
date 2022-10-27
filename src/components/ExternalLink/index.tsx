import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
  icon: ReactNode
  iconPosition?: 'right' | 'left'
}

export function ExternalLink({
  text,
  icon,
  iconPosition = 'right',
  ...rest
}: ExternalLinkProps) {
  return (
    <S.ExternalLinkContainer {...rest}>
      {iconPosition === 'right' ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </S.ExternalLinkContainer>
  )
}
