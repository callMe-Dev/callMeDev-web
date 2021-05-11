import React from 'react'
import dogIllustration from '../../assets/illustrations/navbar-dog.svg'

import {
  Header,
  Nav,
  NavBarLink,
  NavIllustration,
  NavIllustrationDiv
} from './NavBar.styles'

export default function NavBar() {
  return (
    <Header>
      <NavIllustrationDiv>
        <NavIllustration src={dogIllustration} alt='A dog in the navbar' />
      </NavIllustrationDiv>
      <Nav>
        <NavBarLink href='/'>Home</NavBarLink>
        <NavBarLink href='/'>Nosotros</NavBarLink>
        <NavBarLink href='/'>Features</NavBarLink>
      </Nav>
    </Header>
  )
}
