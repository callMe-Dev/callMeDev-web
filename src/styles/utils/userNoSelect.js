import { css } from 'styled-components'

export const userNoSelect = () => {
  return css`
    user-select: none;
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    -webkit-user-select: none; /* Safari */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-tap-highlight-color: transparent; /*removes blue color by pressing a button or <a> */
  `
}
