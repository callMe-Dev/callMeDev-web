import styled from 'styled-components'
import { screens } from '../../styles/screens'
import { sideLayout } from '../../styles/utils/sideLayout'

export const StartAdventureStyled = styled.section`
  text-align: center;
  color: var(--purple);
  ${sideLayout()}
  margin-top: 4rem;
  margin-bottom: 10rem;

  @media (min-width: ${screens.tablet}) {
    margin-top: 8.3rem;
  }
`
export const StartAdventureTitle = styled.h1`
  font-size: 1.6rem;

  @media (min-width: ${screens.tablet}) {
    font-size: 3rem;
  }
`

export const StartAdventureButton = styled.div`
  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: center;
  }
`
