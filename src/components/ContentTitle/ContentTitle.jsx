import React from 'react'

import { ContentTitleStyled, ContentTitleSpan } from './ContentTitle.styles'

/**
 * @param titleText: string
 * @param titleSpan: string
 * @param titleColor: strig
 * @param withMarginTop: boolean
 *
 * @returns JSX.Element
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
