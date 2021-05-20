import React from 'react'
import {
  OurFeaturesArticle,
  OurFeaturesImg,
  OurFeaturesSubTitle,
  OurFeaturesText,
} from './OurFeaturesContent.styles'

/**
 *
 * @param {string} image: string
 * @param {string} altImage: string
 * @param {string} subTitle: string
 * @param {string} subTitleInColor: string
 * @param {string} subTitleColor: string
 * @param {string} content: string
 * @param {boolean} flexReverse: boolean
 *
 * @returns {JSX.Element}
 */
export default function OurFeaturesContent({
  image = '',
  altImage = '',
  subTitle = '',
  subTitleInColor = '',
  subTitleColor = '',
  content = '',
  flexReverse = false,
}) {
  return (
    <OurFeaturesArticle flexReverse={flexReverse}>
      <OurFeaturesImg src={image} alt={altImage} loading='lazy' />
      <div>
        <OurFeaturesSubTitle subTitleColor={subTitleColor}>
          {subTitle} <span>{subTitleInColor}</span>
        </OurFeaturesSubTitle>
        <OurFeaturesText>{content}</OurFeaturesText>
      </div>
    </OurFeaturesArticle>
  )
}
