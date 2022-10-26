import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type ExternalLinkProps = ComponentProps<typeof S.ExternalLinkContainer> & {
  text: string
  icon: ReactNode
  direction: 'leftToRight' | 'rightToLeft'
}

export function ExternalLink({
  text,
  direction = 'leftToRight',
  icon,
  ...rest
}: ExternalLinkProps) {
  return (
    <S.ExternalLinkContainer {...rest}>
      {direction === 'leftToRight' ? (
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
