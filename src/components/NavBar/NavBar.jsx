import React from 'react'
import dogIllustration from '../../assets/illustrations/navbar-dog.svg'

import { Header, Nav, NavBarLink } from './NavBar.styles'

export default function NavBar() {
  return (
    <Header>
      <img src={dogIllustration} alt='A dog in the navbar'/>
      <Nav>
        <NavBarLink href='/'>Home</NavBarLink>
        <NavBarLink href='/'>Nosotros</NavBarLink>
        <NavBarLink href='/'>Features</NavBarLink>
      </Nav>
    </Header>
  )
}
