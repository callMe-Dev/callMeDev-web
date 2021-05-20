import styled from 'styled-components'
import { afterWave } from '../../styles/utils/afterWave'
import { screens } from '../../styles/screens'

export const StyledFooter = styled.footer`
  position: relative;
  background-color: var(--black);
  padding: 10rem 3rem 5rem;
  margin-top: 7rem;

  &::after {
    ${afterWave('/src/assets/waves/waveToUp-black.svg', 'top', '2px', 'up')}
  }
`

export const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${screens.ipad}) {
    flex-direction: row;
    text-align: start;
    justify-content: space-between;
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 370px;

  @media (min-width: ${screens.ipad}) {
    align-items: flex-end;
    text-align: end;
  }
`

export const FooterText = styled.p`
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 1rem;
`
