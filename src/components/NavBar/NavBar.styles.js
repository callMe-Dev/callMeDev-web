import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { textUnderline } from '../../styles/utils/textUnderline'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'
import { navBarImgAfter } from '../../styles/utils/afterBtn'
import { userNoSelect } from '../../styles/utils/userNoSelect'
import { afterWave } from '../../styles/utils/afterWave'

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  background: var(--dark);
  ${sideLayout()};

  @media (min-width: ${screens.ipad}) {
    padding-bottom: 0;
  }

  &::after{
    ${afterWave('/src/assets/waves/waveToDown-dark.svg', 'bottom', '65px')};
    z-index: -1;
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

export const NavBarLink = styled(Link)`
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
  ${userNoSelect()};

  @media (min-width: ${screens.ipad}) {
    width: 80px;
    height: auto;
  }

  &:hover {
    transform: scale(1.1);
  }
`
