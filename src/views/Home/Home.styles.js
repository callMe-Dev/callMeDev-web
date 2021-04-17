import styled from 'styled-components'
import { screens } from '../../styles/utils/screens'
import { sideLayout } from '../../styles/sideLayout'

export const HomeStyled = styled.div`
	width: 100%;
  background: var(--black);
	/* Is at the beginning since the padding-top is affected by the sideLayout function */
	${sideLayout()}

	padding-top: 3rem;

  @media (min-width: ${screens.tablet}) {
    padding-top: 5rem;
  }

  @media (min-width: ${screens.ipad}) {
    padding-top: 6rem;
  }

  @media (min-width: ${screens.desk}) {
    padding-top: 8rem;
  }

`
