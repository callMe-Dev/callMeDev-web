import styled from 'styled-components'
import { screens } from '../../styles/utils/screens'

export const HeroStyled = styled.section`
  display: block;

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-evenly;
  }
`

export const HeroLogo = styled.img`
  display: block;
  height: auto;
  margin: 0 auto;
  width: 270px;

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    width: 379px;
  }
`

export const HeroTitle = styled.h1`
  color: var(--white);
  font-weight: 500;
  margin: 2rem 0;

  @media (min-width: ${screens.tablet}) {
    text-align: center;
    width: 350px;
    margin: 2rem auto;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
  }
`

export const HeroTextContent = styled.p`
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
    margin-bottom: 1rem;
  }
`

export const HeroDiscordBtn = styled.button`
  /* width: 19rem; */
  align-items: center;
  background: var(--purple);
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

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    padding: 0.7rem 1.7rem;
    font-size: 1.5rem;
    margin-top: 1.6rem;
  }
`

export const HeroDiscordIcon = styled.img`
	height: 35px;
	width: 35px;
`
