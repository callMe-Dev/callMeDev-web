import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const ContentTitleStyled = styled.h1`
  color: var(--white);
  font-weight: 600;
  font-size: 1.9rem;
  margin-top: 4rem;
  margin-top: ${(props) => (props.withMarginTop ? '4rem' : '0')};
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: ${screens.tablet}) {
    width: 350px;
    margin: 2rem auto;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    margin: 2rem 0;
  }
`

export const ContentTitleSpan = styled.span`
  color: ${(props) => props.titleColor};
`
