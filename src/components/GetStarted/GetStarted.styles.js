import styled from 'styled-components'
import { screens } from '../../styles/screens'
import { sideLayout } from '../../styles/utils/sideLayout'

export const GetStartedStyled = styled.section`
  text-align: center;
  color: var(--purple);
  ${sideLayout()}
  margin-top: 150px;
  margin-bottom: 250px;
`
export const GetStartedTitle = styled.h1`
  font-size: 1.6rem;

  @media (min-width: ${screens.tablet}) {
    font-size: 3rem;
  }
`
