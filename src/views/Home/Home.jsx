import React from 'react'

import AboutCommunity from '../../components/AboutCommunity/AboutCommunity'
import HowCollaborate from '../../components/HowCollaborate/HowCollaborate'
import OurFeatures from '../../components/OurFeatures/OurFeatures'
import Rules from '../../components/Rules/Rules'
import StartAdventure from '../../components/StartAdventure/StartAdevnture'
import Hero from '../../components/Hero/Hero'

import { HomeStyled } from './Home.styles'

export default function Home() {
  return (
    <HomeStyled>
      <Hero />
      <AboutCommunity />
      <OurFeatures />
      <HowCollaborate />
      <Rules />
      <StartAdventure />
    </HomeStyled>
  )
}
