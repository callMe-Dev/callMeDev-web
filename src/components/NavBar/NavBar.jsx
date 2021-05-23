import React from 'react'
import dogIllustration from '../../assets/illustrations/navbar-dog.svg'
import { rootUrl, nosotrosUrl } from '../../Routes/routes'

import {
  Header,
  Nav,
  NavBarLink,
  NavIllustration,
  NavIllustrationDiv,
} from './NavBar.styles'

export default function NavBar() {
  return (
    <Header>
      <NavIllustrationDiv>
        <NavIllustration src={dogIllustration} alt='Un perro con un corazón' />
      </NavIllustrationDiv>
      <Nav>
        <NavBarLink to={rootUrl}>Home</NavBarLink>
        <NavBarLink to={nosotrosUrl}>Nosotros</NavBarLink>
        <NavBarLink to='#features'>Features</NavBarLink>
      </Nav>
    </Header>
  )
}
