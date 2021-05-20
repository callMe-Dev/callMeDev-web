import { css } from 'styled-components'

export const afterWave = (imageUrl, vertical, verticalValue, BgPosition) => {
  return css`
    content: '';
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 100px;
    background-position: ${BgPosition === 'up' ? 'top' : 'bottom'};
    transform: ${BgPosition === 'up' ? 'translateY(-100%)' : 'translateY(100%)'};
    ${vertical}: ${verticalValue};
  `
}
