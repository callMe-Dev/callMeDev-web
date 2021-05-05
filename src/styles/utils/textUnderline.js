import { css } from 'styled-components'

/**
 * @param {string} color
 * @returns ThemedCssFunction<DefaultTheme>
 */
export const textUnderline = (color) => {
  return css`
    text-decoration: underline;
    text-decoration-thickness: 2.5px;
    text-decoration-style: solid;
    text-decoration-color: ${color};
  `
}
