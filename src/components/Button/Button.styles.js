import styled, { css } from 'styled-components'
import { screens } from '../../styles/utils/screens'

export const ButtonStyled = styled.button`
  /* width: 19rem; */
  align-items: center;
  border-radius: var(--radius);
  border: none;
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

  /* background: ${(props) => props.btnBackground}; */
  /* color: ${(props) => props.btnTextColor}; */

  ${(props) =>
    props.theme === 'blue' &&
    css`
      color: var(--white);
      background: var(--blue);
    `}

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

export const ButtonIcon = styled.img`
  height: 35px;
  width: 35px;
`
