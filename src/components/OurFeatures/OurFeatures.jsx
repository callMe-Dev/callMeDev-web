import React from 'react'
import waveToUpBlack from '../../assets/waves/waveToUp-black.svg'
import ContentTitle from '../ContentTitle/ContentTitle'
import Amistad from './Amistad/Amistad'

import { OurFeaturesSection, OurFeaturesWave } from './OurFeatures.styles'

export default function OurFeatures() {
  return (
    <OurFeaturesSection>
      <OurFeaturesWave
        src={waveToUpBlack}
        alt='Ilustracion tipo ola en Nuestras Caracteristicas'
      />
      <ContentTitle
        titleText='Nuestras'
        titleSpan='Features'
        titleColor='var(--green)'
        withMarginTop={false}
      />
      <Amistad />
    </OurFeaturesSection>
  )
}
