import styled from 'styled-components'
import { sideLayout } from '../../styles/sideLayout'
import { screens } from '../../styles/utils/screens'

export const HeroStyled = styled.section`
  background: var(--black);
  position: relative;
  /* Is at the beginning since the padding-top is affected by the sideLayout function */
  ${sideLayout()}

  padding-top: 3rem;

  @media (min-width: ${screens.tablet}) {
    padding-top: 5rem;
  }

  @media (min-width: ${screens.ipad}) {
    padding-top: 6rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 8rem;
  }

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

export const HeroDiscordIcon = styled.img`
  height: 35px;
  width: 35px;
`

export const HeroWaveToDown = styled.img`
  position: absolute;
  bottom: -3.3rem;
  left: 0;
  width: 100%;

  @media (max-width: ${screens.mobile}) {
    bottom: -3rem;
  }

  @media (min-width: ${screens.tablet}) {
    bottom: -5.3rem;
  }

  @media (min-width: 725px) {
    bottom: -6.3rem;
  }

  @media (min-width: 830px) {
    bottom: -7.3rem;
  }

  @media (min-width: ${screens.ipad}) {
    bottom: -8.3rem;
  }

  @media (min-width: ${screens.desk}) {
    bottom: -11.8rem;
  }
`
