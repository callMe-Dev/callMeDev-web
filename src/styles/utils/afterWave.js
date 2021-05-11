import { css } from 'styled-components'

export const afterWave = (imageUrl, vertical, verticalValue, BgPosition) => {
  return css`
    content: "";
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${BgPosition === 'up' ? 'top' : 'bottom'};
    position: absolute;
    ${vertical}: ${verticalValue};
    left: 0;
    transform: ${BgPosition === 'up' ? 'translateY(-100%)' : 'translateY(100%)'};
    width: 100%;
    min-height: 100px;
 `
}
