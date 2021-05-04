import styled from 'styled-components'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'

export const HowCollaborateStyled = styled.section`
  ${sideLayout()}

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const HowCollaborateText = styled.p`
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: var(--white);
  text-align: center;

  @media (min-width: ${screens.$600}) {
    width: 450px;
    margin: 0 auto;
    line-height: 1.7;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    margin-bottom: 1rem;
  }
`

export const HowCollaborateImg = styled.img`
  display: block;
  height: auto;
  margin: 3rem auto;
  width: 300px;

  @media (min-width: ${screens.$600}) {
    width: 400px;
    transition: var(--transition);

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: ${screens.ipad}) {
    margin: 0;
  }
`
