import React from 'react'

import { AboutTitleStyled, AboutSpan } from './AboutTitle.styles'

/**
 * @param {string} titleText
 * @param {string} titleSpan
 * @param {string} titleColor
 *
 * @returns {JSX.Element}
 */
export default function AboutTitle({
  titleText,
  titleSpan,
  titleColor,
}) {
  return (
    <AboutTitleStyled>
      {titleText}{' '}
      <AboutSpan color={titleColor}>{titleSpan}</AboutSpan>
    </AboutTitleStyled>
  )
}
