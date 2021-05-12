import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const AboutTitleStyled = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 1.9rem;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media (min-width: ${screens.tablet}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${screens.ipad}) {
    font-size: 3.75rem;
  }
`
export const AboutSpan = styled.span`
  color: ${(props) => props.color};
`
