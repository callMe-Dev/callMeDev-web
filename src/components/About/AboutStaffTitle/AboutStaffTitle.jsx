import React from 'react'

import { AboutStaffTitleStyled, AboutStaffTitleSpan } from './AboutStaffTitle.styles'

/**
 * @param {string} titleText
 * @param {string} titleSpan
 * @param {string} titleColor
 * @param {string} marginTop
 *
 * @returns {JSX.Element}
 */
export default function AboutStaffTitle({
  titleText,
  titleSpan,
  titleColor,
  marginTop = '0'
}) {
  return (
    <AboutStaffTitleStyled marginTop={marginTop}>
      {titleText}{' '}
      <AboutStaffTitleSpan titleColor={titleColor}>{titleSpan}</AboutStaffTitleSpan>
    </AboutStaffTitleStyled>
  )
}
