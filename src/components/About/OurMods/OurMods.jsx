import React from 'react'
import { AboutContainer } from '../AboutContainer.styles'
import AboutStaffTitle from '../AboutStaffTitle/AboutStaffTitle'
import { AboutCards } from '../AboutCards.styles'
import { ModCard } from './OurMods.styles'
import { MaxWidth } from '../MaxWidth.styles'

export default function OurMods() {
  return (
    <AboutContainer
      backgroundColor='var(--dark)'
      waveUrl='/src/assets/waves/waveToDown-dark.svg'
      id="our-mods"
    >
      <MaxWidth>
        <AboutStaffTitle
          titleText='Nuestros'
          titleSpan='Moderadores'
          titleColor='var(--purple)'
          marginTop='10rem'
        />
      </MaxWidth>
      <AboutCards minmax='250px, 300px' marginBottom='10rem'>
        <ModCard />
        <ModCard />
        <ModCard />
        <ModCard />
      </AboutCards>
    </AboutContainer>
  )
}
