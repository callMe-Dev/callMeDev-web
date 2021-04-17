import React from "react"
import dogIllustration from "../../assets/illustrations/navbar-dog.svg"
import waveToDowm from "../../assets/waves/waveToDown-dark.svg"

import {
  Header,
  Nav,
  NavBarLink,
  NavIllustration,
  NavWave,
} from "./NavBar.styles"

export default function NavBar() {
  return (
    <Header>
      <NavIllustration src={dogIllustration} alt="A dog in the navbar" />
      <Nav>
        <NavBarLink href="/">Home</NavBarLink>
        <NavBarLink href="/">Nosotros</NavBarLink>
        <NavBarLink href="/">Features</NavBarLink>
      </Nav>
      <NavWave
        src={waveToDowm}
        alt="Ilustracion en forma de ola hacia abajo en el navbar"
      />
    </Header>
  )
}
