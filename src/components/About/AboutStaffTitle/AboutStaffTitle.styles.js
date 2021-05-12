import styled from 'styled-components'
import { screens } from '../../../styles/screens'

export const AboutStaffTitleStyled = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 1.9rem;

  @media (min-width: ${screens.tablet}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${screens.tablet}) {
    font-size: 3rem;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
  }
`

export const AboutStaffTitleSpan = styled.span`
  color: ${(props) => props.titleColor};
`
