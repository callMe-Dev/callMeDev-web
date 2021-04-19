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
export const AboutCommunityBtn = styled.button`
  /* width: 19rem; */
  align-items: center;
  background: var(--blue);
  border-radius: var(--radius);
  border: none;
  color: var(--white);
  column-gap: 1rem;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1.6rem;
  outline: none;
  padding: 0.8rem 2rem;
  width: auto;
  cursor: pointer;
  transition: var(--transition);

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    padding: 0.6rem 1.5rem;
    font-size: 1.3rem;
    margin-top: 1.6rem;
  }

  &:hover {
    filter: brightness(1.1);
  }
`
export const AboutCommunityIcon = styled.img`
  height: 35px;
  width: 35px;
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
