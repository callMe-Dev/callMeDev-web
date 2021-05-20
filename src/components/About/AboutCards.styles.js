import styled from 'styled-components'

export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.minmax}));
  justify-content: space-evenly;
  gap: 2rem;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.marginBottom};
`
