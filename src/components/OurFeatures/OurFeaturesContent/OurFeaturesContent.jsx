import React from 'react'
import {
  OurFeaturesArticle,
  OurFeaturesImg,
  OurFeaturesSubTitle,
  OurFeaturesText,
} from './OurFeaturesContent.styles'

/**
 *
 * @param image: string
 * @param altImage: string
 * @param subTitle: string
 * @param subTitleInColor: string
 * @param subTitleColor: string
 * @param content: string
 * @param flexReverse: boolean
 *
 * @returns JSX.Element
 */
export default function OurFeaturesContent({
  image = '',
  altImage = 'Ilustracion de OurFeatures',
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
