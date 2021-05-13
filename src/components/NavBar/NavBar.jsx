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
        <NavBarLink to='/'>Home</NavBarLink>
        <NavBarLink to='/about-us'>Nosotros</NavBarLink>
        <NavBarLink to='/'>Features</NavBarLink>
      </Nav>
    </Header>
  )
}
