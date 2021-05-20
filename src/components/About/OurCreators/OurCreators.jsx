import React from 'react'
import { AboutContainer } from '../AboutContainer.styles'
import AboutStaffTitle from '../AboutStaffTitle/AboutStaffTitle'
import { AboutCards } from '../AboutCards.styles'
import { CreatorCard } from './OurCreators.styles'
import { MaxWidth } from '../MaxWidth.styles'

export default function OurCreators() {
  return (
    <AboutContainer
      backgroundColor='var(--black)'
      waveUrl='/src/assets/waves/waveToDown-black.svg'
      id='our-creators'
      wave
    >
      <MaxWidth>
        <AboutStaffTitle
          titleText='Nuestros'
          titleSpan='Creadores'
          titleColor='var(--purple)'
          marginTop='10rem'
        />
      </MaxWidth>
      <AboutCards minmax='250px, 300px' marginBottom='10rem'>
        <CreatorCard />
        <CreatorCard />
      </AboutCards>
    </AboutContainer>
  )
}
