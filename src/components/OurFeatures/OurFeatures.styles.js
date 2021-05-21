import styled from 'styled-components'
import { screens } from '../../styles/screens'
import { afterWave } from '../../styles/utils/afterWave'

export const OurFeaturesSection = styled.section`
  background: var(--black);
  position: relative;
  margin-bottom: 7rem;

  @media (min-width: ${screens.ipad}) {
    padding-top: 1rem;
    margin-bottom: 15rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 2rem;
  }

  &::before {
    ${afterWave('/src/assets/waves/waveToUp-black.svg', 'top', '0', 'up')};
  }

  &::after {
    ${afterWave('/src/assets/waves/waveToDown-black.svg', 'bottom', '2px')};
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
