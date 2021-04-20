import React from 'react'
import ContentTitle from '../ContentTitle/ContentTitle'
import Amistad from './Amistad/Amistad'

import { OurFeaturesSection } from './OurFeatures.styles'

export default function OurFeatures() {
  return (
    <OurFeaturesSection>
      <ContentTitle
        titleText='Nuestras'
        titleSpan='Features'
        titleColor='var(--green)'
      />
      <Amistad />
    </OurFeaturesSection>
  )
}
