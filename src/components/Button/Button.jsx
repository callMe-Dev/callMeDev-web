import React from 'react'

import { ButtonIcon, ButtonStyled } from './Button.styles'

/**
 * @param btnText: string
 * @param btnImg: string
 * @param btnImgAlt: string
 * @param btnBackground: string
 * @param btnTextColor: string
 *
 * @returns JSX.Button
 */
export default function Button({
  btnText = '',
  btnImg = '',
  btnImgAlt = '',
  theme = '',
}) {
  return (
    <ButtonStyled type='button' theme={theme}>
      <ButtonIcon src={btnImg} alt={btnImgAlt} />
      {btnText}
    </ButtonStyled>
  )
}
