import React from 'react'

import Hero from '../../components/Hero/Hero'
import AboutCommunity from '../../components/AboutCommunity/AboutCommunity';

import {HomeStyled} from './Home.styles'

export default function Home() {
  return (
    <HomeStyled>
      <Hero />
      <AboutCommunity />
    </HomeStyled>
  )
}
