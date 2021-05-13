import styled from 'styled-components'
import { sideLayout } from '../../styles/utils/sideLayout'
import { afterWave } from '../../styles/utils/afterWave'

export const AboutContainer = styled.section`
  background-color: ${(props) => props.backgroundColor};
  position: relative;
  ${sideLayout()}
  margin-bottom: 100px;

  &:nth-child(3){
    margin-top: -35px;
  }

  &::after {
    ${(props) => props.wave && afterWave(props.waveUrl, 'bottom', '2px')}
    z-index: 10;
  }

`
