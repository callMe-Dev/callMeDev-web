import styled from 'styled-components'
import { sideLayout } from '../../styles/sideLayout'
import { screens } from '../../styles/utils/screens'

export const AboutCommunityStyled = styled.article`
  padding-top: 14rem;
  position: relative;
  ${sideLayout()}

  @media (min-width: ${screens.tablet}) {
    padding-top: 15rem;
  }

  @media (min-width: ${screens.ipad}) {
    padding-top: 16rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 18rem;
  }

  display: block;

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-evenly;
  }
`
export const AboutCommunityTitle = styled.p`
  color: var(--white);
  font-weight: 600;
  font-size: 1.9rem;
  margin-top: 4rem;
  margin-bottom: 1rem;

  @media (min-width: ${screens.tablet}) {
    text-align: center;
    width: 350px;
    margin: 2rem auto;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    margin-left: 0;
  }
`

export const SpanTitle = styled.span`
  color: var(--yellow);
`

export const AboutCommunityText = styled.p`
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: var(--white);

  @media (min-width: ${screens.tablet}) {
    text-align: center;
    width: 350px;
    margin: 0 auto;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    width: 400px;
    margin-bottom: 1rem;
  }
`

export const AboutCommunityImg = styled.img`
  display: block;
  height: auto;
  margin: 3rem auto;
  width: 300px;
  object-fit: cover;

  @media (min-width: ${screens.mobile}) {
    width: 320px;
    height: 200px;
  }

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    width: 550px;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: ${screens.desk}) {
    width: 500px;
  }
`
