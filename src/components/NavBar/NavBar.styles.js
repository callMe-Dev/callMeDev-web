import styled from 'styled-components'
import { textUnderline } from '../../styles/utils/textUnderline'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'
import { navBarImgAfter } from '../../styles/utils/afterBtn'
import { userNoSelect } from '../../styles/utils/userNoSelect'

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

  @media (min-width: ${screens.tablet}) {
    gap: 0 1.5rem;
  }

  @media (min-width: ${screens.ipad}) {
    gap: 0 2.5rem;
  }
`

export const NavBarLink = styled.a`
  color: var(--white);
  text-decoration: none;
  transition: transform var(--transition);
  ${userNoSelect}

  &:hover {
    ${textUnderline('var(--indigo)')}
    transform: scale(1.05);
  }

  @media (min-width: ${screens.$600}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${screens.desk}) {
    font-size: 1.3rem;
  }
`

export const NavIllustrationDiv = styled.div`
  position: relative;

  &:hover {
    &:after {
      ${navBarImgAfter}
    }
  }
`

export const NavIllustration = styled.img`
  width: 60px;
  transition: var(--transition);
  cursor: pointer;
  appearance: none;
  ${userNoSelect()}

  @media (min-width: ${screens.ipad}) {
    width: 80px;
    height: auto;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const NavWave = styled.img`
  position: absolute;
  left: 0;
  bottom: -1.1rem;
  width: 100%;
  fill: var(--dark);
  z-index: 10;

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
