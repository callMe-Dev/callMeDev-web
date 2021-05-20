import React from 'react'

import { ContentTitleStyled, ContentTitleSpan } from './ContentTitle.styles'

/**
 * @param {string} titleText
 * @param {string} titleSpan
 * @param {string} titleColor
 * @param {string} withMarginTop
 *
 * @returns {JSX.Element}
 */
export default function ContentTitle({
  titleText,
  titleSpan,
  titleColor,
  marginTop = '4rem'
}) {
  return (
    <ContentTitleStyled withMarginTop={marginTop}>
      {titleText}{' '}
      <ContentTitleSpan titleColor={titleColor}>{titleSpan}</ContentTitleSpan>
    </ContentTitleStyled>
  )
}
