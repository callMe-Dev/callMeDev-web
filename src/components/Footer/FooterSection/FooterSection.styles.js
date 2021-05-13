import styled from 'styled-components'

export const Title = styled.h2`
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: 1.7rem;
`

export const List = styled.ul`
  color: var(--white);
  margin-top: 1rem;
  list-style: none;
  padding-left: 0;
  font-size: 1.4rem;
`

export const ItemList = styled.li`
  margin-bottom: 1.5rem;
`

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`
