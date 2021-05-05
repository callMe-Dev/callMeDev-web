import React from 'react'

import { ButtonIcon, ButtonStyled } from './Button.styles'

/**
 * @param { string } btnText
 * @param { string } btnImg
 * @param { string } btnImgAlt
 * @param { string } theme
 * @param { boolean } withImg
 *
 * @returns {JSX.Element}
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
