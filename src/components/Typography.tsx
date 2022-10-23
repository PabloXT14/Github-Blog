import styled from 'styled-components'
// import { Slot } from '@radix-ui/react-slot'
// import { ButtonHTMLAttributes, ReactNode } from 'react'
// TENTE IMPLEMENTAR O SLOT DEPOIS

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h2<TitleTextProps>``

export const RegularText = styled.p<RegularTextProps>``

/// /////////////////////////////
// export const ButtonContainer = styled(Slot)`
//   padding: 0 1rem;
//   height: 2rem;
//   background: ${({ theme }) => theme.colors['brand-color']};
//   color: ${({ theme }) => theme.colors['base-white']};
//   border-radius: 5px;
//   font-weight: bold;
// `

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   asChild?: boolean
//   children: ReactNode
// }

// export function Button(props: ButtonProps) {
//   return props.asChild ? (
//     <ButtonContainer {...props} />
//   ) : (
//     <ButtonContainer>
//       <button {...props}>{props.children}</button>
//     </ButtonContainer>
//   )
// }
