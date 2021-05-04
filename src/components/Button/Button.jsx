import React from 'react'

import { ButtonIcon, ButtonStyled } from './Button.styles'

/**
 * @param btnText: string
 * @param btnImg: string
 * @param btnImgAlt: string
 * @param theme: string
 * @param withImg: boolean
 *
 * @returns JSX.Element
 */
export default function Button({
  btnText = '',
  btnImg = '',
  btnImgAlt = '',
  theme = '',
  withImg = true,
}) {
  return (
    <ButtonStyled type='button' theme={theme}>
      {withImg ? <ButtonIcon src={btnImg} alt={btnImgAlt} /> : ''}
      <span>{btnText}</span>
    </ButtonStyled>
  )
}
