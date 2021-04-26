import React from 'react'
import waveToUpBlack from '../../assets/waves/waveToUp-black.svg'
import ContentTitle from '../ContentTitle/ContentTitle'

import Amistad from './Amistad/Amistad'
import Equipo from './Equipo/Equipo'
import Crecer from './Crecer/Crecer'

import {
  OurFeaturesFlex,
  OurFeaturesSection,
  OurFeaturesWave,
  Invisible,
} from './OurFeatures.styles'

export default function OurFeatures() {
  return (
    <OurFeaturesSection>
      <OurFeaturesWave
        src={waveToUpBlack}
        alt='Ilustracion tipo ola en Nuestras Caracteristicas'
      />
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
