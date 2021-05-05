import { css } from 'styled-components'

const keyFrame = css`
  @keyframes fadeIn {
    90% {
      visibility: hidden;
      transform: translate(0, 0);
    }
    100% {
      visibility: visible;
      transform: translate(4.5rem, 0px);
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

  background: var(--black);
  border-radius: var(--radius);
  color: var(--white);
  display: block;
  font-size: 0.75rem;
  padding: 0.5rem 0.8rem;
  position: absolute;

  transition: transform var(--transition);

  animation: 0.4s fadeIn;
  animation-fill-mode: forwards;
  -webkit-transition: var(--transition);
`

export const navBarImgAfter = css`
  ${commonAfterStyles}

  content: 'Disfruta de la pagina :D';
  ${'' /* left: 4.5rem; */}
  left: 0;
  top: 0rem;
  width: 100px;
`

export const howCollaborateGithubAfter = css`
  ${commonAfterStyles}

  content: 'Unete a nuestra organizacion! 🌟';
  left: 1rem;
  top: -1rem;
`
