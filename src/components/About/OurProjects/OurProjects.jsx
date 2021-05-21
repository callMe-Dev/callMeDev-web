import React from 'react'
import AboutTitle from '../AboutTitle/AboutTitle'
import { AboutContainer } from '../AboutContainer.styles'
import { AboutCards } from '../AboutCards.styles'
import { ProjectCard } from './OurProjects.styles'

export default function OurProjects() {
  return (
    <AboutContainer
      backgroundColor='var(--dark)'
      waveUrl='/src/assets/waves/waveToDown-dark.svg'
      id='projects'
      wave>
      <AboutTitle
        titleText='Nuestros'
        titleSpan='Proyectos'
        titleColor='var(--yellow)'
      />
      <AboutCards minmax='250px, 355px' marginBottom='8rem'>
        <ProjectCard />
        <ProjectCard />
      </AboutCards>
    </AboutContainer>
  )
}
