import styled from 'styled-components'
import { sideLayout } from '../../../styles/sideLayout'
import { screens } from '../../../styles/utils/screens'
import { userNoSelect } from '../../../styles/userNoSelect'

export const OurFeaturesArticle = styled.article`
  margin-top: 3rem;

  ${sideLayout()}

  @media (min-width: ${screens.ipad}) {
    display: flex;
    justify-content: space-around;
    flex-direction: ${(props) => (props.flexReverse ? 'row-reverse' : 'row')};
  }
`

export const OurFeaturesImg = styled.img`
  display: block;
  margin: 0 auto;
  transition: var(--transition);
  width: 300px;

  ${userNoSelect()}

  @media (min-width: ${screens.ipad}) {
    margin: 0;
    width: 420px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const OurFeaturesSubTitle = styled.h2`
  text-align: center;
  margin-top: 3rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--white);

  @media (min-width: ${screens.ipad}) {
    text-align: left;
    margin-top: 0;
  }

  span {
    /* color: var(--purple); */
    color: ${(props) => props.subTitleColor};
  }
`

export const OurFeaturesText = styled.p`
  text-align: center;
  color: var(--light-color);
  width: 330px;
  margin: 0 auto;
  margin-top: 1rem;

  @media (min-width: ${screens.tablet}) {
    width: 500px;
  }

  @media (min-width: ${screens.ipad}) {
    width: 450px;
    text-align: left;
    line-height: 1.7;
    font-size: 1.2rem;
  }
`
