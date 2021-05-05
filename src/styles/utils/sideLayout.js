import { css } from 'styled-components'
import { screens } from '../screens'

/**
 * @param {string} paddingMobile
 * @returns ThemedCssFunction<DefaultTheme>
 */
export const sideLayout = (paddingMobile = '1.7rem') => {
  return css`
    padding: ${paddingMobile};

    @media (min-width: ${screens.tablet}) {
      padding: 1rem calc(${paddingMobile} + 1rem);
    }

    @media (min-width: ${screens.ipad}) {
      padding: 1.5rem calc(${paddingMobile} + 1.5rem);
    }

    @media (min-width: ${screens.desk}) {
      padding: 1.9rem calc(${paddingMobile} + 2rem);
    }
  `
}
