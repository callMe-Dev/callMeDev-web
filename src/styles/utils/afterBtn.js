import { css } from 'styled-components'

const keyFrame = css`
  @keyframes fadeIn {
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`

/**
 * Add the common styles where you need them for
 * another afterBtn
 *
 * But if you need to add more just
 * add the new properties below
 *
 * Just add or modify these params:
 * @param {string} content
 * @param {string | number} top
 * @param {string | number} left
 *
 */
const commonAfterStyles = css`
  ${keyFrame}
  visibility: hidden;

  display: block;
  position: absolute;
  padding: 1rem;
  opacity: 1;
  background: var(--dark-purple);
  color: var(--white);
  border-radius: var(--radius);
  animation: 0.4s fadeIn;
  animation-fill-mode: forwards;
  transition: var(--transition);
  -webkit-transition: var(--transition);
`

/**
 *
 * @param {string} content
 * @param {number} left
 * @param {number} top
 * @param {string} theme
 *
 * @returns ThemedCssFunction<DefaultTheme>
 */
export const navBarImgAfter = css`
  ${commonAfterStyles}

  content: 'Navbar';
  left: 0rem;
  top: 0rem;
`
