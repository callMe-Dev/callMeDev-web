import styled, { css } from 'styled-components'
import { screens } from '../../styles/screens'
import { userNoSelect } from '../../styles/utils/userNoSelect'
import { outlineFocus } from '../../styles/utils/outlineFocus'

export const ButtonStyled = styled.button`
  border-radius: var(--radius);
  border: none;
  column-gap: 1rem;
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 1.6rem;
  outline: none;
  padding: 0.8rem 2rem;
  width: auto;
  cursor: pointer;
  transition: var(--transition);
  
  ${outlineFocus()}

  ${userNoSelect()} /* For new themes add a color for the css variables and match the background and text */

   ${(props) =>
    props.theme === 'blue' &&
    css`
      color: var(--white);
      background: var(--blue);
    `}

    ${(props) =>
    props.theme === 'purple' &&
    css`
      color: var(--white);
      background: var(--purple);
    `}

    ${(props) =>
    props.theme === 'black' &&
    css`
      color: var(--white);
      background: #101214;
    `}

    ${(props) =>
    props.theme === 'yellow' &&
    css`
      color: var(--black);
      background: var(--yellow);
    `}

  @media (min-width: ${screens.ipad}) {
    padding: 0.6rem 1.5rem;
    font-size: 1.3rem;
    margin: 1.6rem 0;
  }

  &:hover {
    filter: brightness(1.1);
  }
`

export const ButtonIcon = styled.img`
  height: 35px;
  width: 35px;
`
