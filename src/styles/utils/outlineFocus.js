import { css } from 'styled-components'

export const outlineFocus = (color = 'var(--white)') => {
  return css`
    &:focus,
    &:focus-visible{
      outline: 4px dashed ${color};
      outline-offset: 7px;
    }

    &:focus:not(:focus-visible){
      outline: none;
    }
  `
}
