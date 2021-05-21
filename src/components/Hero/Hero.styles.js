import styled from 'styled-components'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'
import { afterWave } from '../../styles/utils/afterWave'
import { userNoSelect } from '../../styles/utils/userNoSelect'

export const HeroStyled = styled.section`
  background: var(--black);
  position: relative;
  /* Is at the beginning since the padding-top is affected by the sideLayout function */
  ${sideLayout()}

  padding-top: 3rem;
  margin-bottom: 50px;
  display: block;

  @media (min-width: ${screens.tablet}) {
    padding-top: 5rem;
    margin-bottom: 0;
  }

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-evenly;
    padding-top: 6rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 8rem;
  }

  &::after {
    ${afterWave('/src/assets/waves/waveToDown-black.svg', 'bottom', '2px')}
  }
`

export const HeroLogo = styled.img`
  display: block;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: 270px;
  position: relative;
  z-index: 10;
  ${userNoSelect()}

  @media (min-width: ${screens.tablet}) {
    transition: var(--transition);

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    &:active {
      transform: rotate(180deg);
    }
  }

  @media (min-width: ${screens.ipad}) {
    margin-left: 0;
    margin-right: 0;
    width: 379px;
  }
`

export const HeroTitle = styled.h1`
  color: var(--white);
  font-weight: 500;
  margin: 2rem 0;
  text-align: center;

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
  text-align: center;
  width: 100%;

  @media (min-width: ${screens.tablet}) {
    width: 350px;
    margin: 0 auto;
  }

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    width: 360px;
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
  margin: 1.6rem auto 0;
  outline: none;
  padding: 0.8rem 2rem;
  width: auto;
  cursor: pointer;
  transition: var(--transition);

  @media (min-width: ${screens.ipad}) {
    padding: 0.6rem 1.5rem;
    font-size: 1.3rem;
    margin: 1.6rem 0 0;
  }

  &:hover {
    filter: brightness(1.1);
  }
`

export const HeroDiscordIcon = styled.img`
  height: 35px;
  width: 35px;
`
