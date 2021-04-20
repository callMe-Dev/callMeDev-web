import React from 'react'

import { ContentTitleStyled, ContentTitleSpan } from './ContentTitle.styles'

/**
 * @param titleText: string
 * @param titleSpan: string
 * @param titleColor: strig
 * @returns JSX.Element
 */
export default function ContentTitle({ titleText, titleSpan, titleColor }) {
  return (
    <ContentTitleStyled>
      {titleText}{' '}
      <ContentTitleSpan titleColor={titleColor}>{titleSpan}</ContentTitleSpan>
    </ContentTitleStyled>
  )
}
