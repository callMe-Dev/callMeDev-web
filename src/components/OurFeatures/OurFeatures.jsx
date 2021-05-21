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
    <OurFeaturesSection id='our-features'>
      <OurFeaturesFlex>
        <ContentTitle
          titleText='Nuestras'
          titleSpan='Features'
          titleColor='var(--green)'
          marginTop='0'
        />
        <Invisible>Invisible</Invisible>
      </OurFeaturesFlex>
      <Amistad />
      <Equipo />
      <Crecer />
    </OurFeaturesSection>
  )
}
