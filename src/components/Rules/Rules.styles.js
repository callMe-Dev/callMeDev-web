import styled from 'styled-components'
import { sideLayout } from '../../styles/utils/sideLayout'
import { screens } from '../../styles/screens'

export const RulesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  color: var(--white);
  font-size: 0.9rem;
  line-height: 27px;

  ${sideLayout()}

  @media (min-width: ${screens.tablet}) {
    gap: 90px;
  }

  @media (min-width: ${screens.desk}) {
    flex-direction: row;
    font-size: 1.12rem;
  }
`

export const RulesImage = styled.img`
  display: block;
  height: auto;
  margin: 3rem auto;
  width: 300px;

  @media (min-width: ${screens.$600}) {
    width: 400px;
    transition: var(--transition);

    &:hover {
      transform: scale(1.05);
    }
  }
`
export const RulesSubtitle = styled.h2`
  font-size: 1.12rem;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media (max-width: ${screens.tablet}) {
    text-align: center;
    font-size: 0.9rem;
  }
`

export const List = styled.ul`
  padding-left: 1.5rem;
`
