import styled from 'styled-components'
import { screens } from '../../styles/utils/screens'
import { userNoSelect } from '../../styles/userNoSelect'

export const OurFeaturesSection = styled.section`
  background: var(--black);
  position: relative;
  padding-top: 4rem;

  @media (min-width: ${screens.ipad}) {
    padding-top: 6.5rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 10rem;
  }
`
export const OurFeaturesWave = styled.img`
  position: absolute;
  top: -1.5rem;
  left: 0;
  width: 100%;

  ${userNoSelect()}

  @media (min-width: ${screens.tablet}) {
    top: -2.7rem;
  }

  @media (min-width: ${screens.ipad}) {
    top: -3.7rem;
  }

  @media (min-width: ${screens.desk}) {
    top: -4.7rem;
  }
`

export const OurFeaturesFlex = styled.div`
  display: flex;
  justify-content: space-around;
`

/* 
  This is just one element which gives a width for the display to work: flex;
  And it is proportional with the other sections
*/
export const Invisible = styled.p`
  display: none;

  @media (min-width: ${screens.ipad}) {
    display: block;
    width: 500px;
    visibility: hidden;
  }
`
