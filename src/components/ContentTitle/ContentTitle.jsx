import React from 'react'

import { ContentTitleStyled, ContentTitleSpan } from './ContentTitle.styles'

/**
 * @param {string} titleText
 * @param {string} titleSpan
 * @param {string} titleColor
 * @param {boolean} withMarginTop
 *
 * @returns {JSX.Element}
 */
export default function ContentTitle({
  titleText,
  titleSpan,
  titleColor,
  withMarginTop = true,
}) {
  return (
    <ContentTitleStyled withMarginTop={withMarginTop}>
      {titleText}{' '}
      <ContentTitleSpan titleColor={titleColor}>{titleSpan}</ContentTitleSpan>
    </ContentTitleStyled>
  )
}
