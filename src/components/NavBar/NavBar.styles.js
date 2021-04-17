import styled from 'styled-components'
import { textUnderline } from '../../styles/textUnderline'
import { sideLayout } from '../../styles/sideLayout'
import { screens } from '../../styles/utils/screens'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: var(--dark);
  ${sideLayout()}

  @media (min-width: ${screens.ipad}) {
    padding-bottom: 0;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`

export const NavBarLink = styled.a`
  color: var(--white);
  text-decoration: none;

  &:hover {
    ${textUnderline('var(--indigo)')}
  }
`

export const NavIllustration = styled.img`
  width: 60px;

  @media (min-width: ${screens.ipad}) {
    width: 80px;
    height: auto;
  }
`

export const NavWave = styled.img`
  position: absolute;
  left: 0;
  bottom: -1.1rem;
  width: 100%;
  fill: var(--dark);

  @media (min-width: ${screens.tablet}) {
    bottom: -1.5rem;
  }

  @media (min-width: 740px) {
    bottom: -2.5rem;
  }

  @media (min-width: ${screens.ipad}) {
    bottom: -3.5rem;
  }

  @media (min-width: ${screens.desk}) {
    bottom: -4.75rem;
  }
`

