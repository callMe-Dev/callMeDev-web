import React from 'react'
import ContentTitle from '../ContentTitle/ContentTitle'

import Amistad from './Amistad/Amistad'
import Equipo from './Equipo/Equipo'
import Crecer from './Crecer/Crecer'

import {
  OurFeaturesFlex,
  OurFeaturesSection,
  Invisible,
} from './OurFeatures.styles'

export default function OurFeatures() {
  return (
    <OurFeaturesSection>
      <OurFeaturesFlex>
        <ContentTitle
          titleText='Nuestras'
          titleSpan='Features'
          titleColor='var(--green)'
          withMarginTop={false}
        />
        <Invisible>Invisible</Invisible>
      </OurFeaturesFlex>
      <Amistad />
      <Equipo />
      <Crecer />
    </OurFeaturesSection>
  )
}
