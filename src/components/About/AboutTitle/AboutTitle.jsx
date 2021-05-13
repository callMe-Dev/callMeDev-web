import React from 'react'

import { AboutTitleStyled, AboutSpan } from './AboutTitle.styles'

/**
 * @param {string} titleText
 * @param {string} titleSpan
 * @param {string} titleColor
 * @param {string} marginTop
 *
 * @returns {JSX.Element}
 */
export default function AboutTitle({
  titleText,
  titleSpan,
  titleColor,
  marginTop = '4rem'
}) {
  return (
    <AboutTitleStyled marginTop={marginTop}>
      {titleText}{' '}
      <AboutSpan color={titleColor}>{titleSpan}</AboutSpan>
    </AboutTitleStyled>
  )
}
