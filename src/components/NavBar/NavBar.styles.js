import styled from 'styled-components'
import { variables } from '../../styles/utils/variables'
import {	textUnderline	} from '../../styles/textUnderline'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.7rem;
	position: relative;
	margin-bottom: 3rem;
	background: ${variables.dark};
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
		${textUnderline(variables.indigo)}
  }
`

export const NavIllustration = styled.img`
  width: 60px;
`

export const NavWave = styled.img`
	position: absolute;
	left: 0;
	bottom: -1.9rem;
	width: 100%;
	fill: ${variables.dark};
	background: #000;
`

