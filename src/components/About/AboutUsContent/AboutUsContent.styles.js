import styled from 'styled-components'
import { sideLayout } from '../../../styles/utils/sideLayout'
import { screens } from '../../../styles/screens'
import { afterWave } from '../../../styles/utils/afterWave'

export const AboutUsStyled = styled.section`
  background-color: var(--black);
  position: relative;
  z-index: 10;

  ${sideLayout()}

  &::after {
    ${afterWave('/src/assets/waves/waveToDown-black.svg', 'bottom', '2px')}
  }
`

export const AboutUsText = styled.p`
  font-weight: 700;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 2rem;

   @media (min-width: ${screens.tablet}) {
      text-align: center;
      max-width: 350px;
      margin-left: auto;
      margin-right: auto;
    }

  @media (min-width: ${screens.ipad}) {
      max-width: 780px;
      font-size: 1.2rem;
  }
`
