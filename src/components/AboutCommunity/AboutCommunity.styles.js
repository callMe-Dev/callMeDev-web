import styled from 'styled-components'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'

export const AboutCommunityStyled = styled.section`
  position: relative;
  margin-bottom: 3rem;
  ${sideLayout()}
  padding-top: 7rem;

  @media (min-width: ${screens.tablet}) {
    padding-top: 15rem;
  }

  @media (min-width: ${screens.ipad}) {
    padding-top: 16rem;
    margin-bottom: 9rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 18rem;
    margin-bottom: 14rem;
  }

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-around;
  }
`

export const AboutCommunityText = styled.p`
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--white);
  text-align: center;
  width: 100%;

  @media (min-width: ${screens.tablet}) {
    width: 350px;
    margin: 0 auto 1rem;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    width: 450px;
    margin-bottom: 1.5rem;
  }
`

export const AboutCommunityImg = styled.img`
  display: block;
  height: auto;
  margin: 3rem auto;
  width: 270px;
  object-fit: cover;

  @media (min-width: ${screens.mobile}) {
    width: 320px;
    height: 200px;
  }

  @media (min-width: ${screens.tablet}) {
    width: 500px;
    height: 370px;
    object-fit: contain;
    transition: var(--transition);

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: ${screens.desk}) {
    width: 500px;
  }
`
