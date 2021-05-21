import React from 'react'
import { nanoid } from 'nanoid'
import { Title, List, ItemList, StyledLink } from './FooterSection.styles'

/**
 *
 * @typedef {Object} TItems
 * @property {String} title
 * @property {String} url
 */

/**
 * @param {String} titleText
 * @param {String} titleColor
 * @param {Array<TItems>} items
 * @returns JSX.Element
 */
export const FooterSection = ({ titleText = '', titleColor = '', items = [] }) => (
  <section>
    <Title color={titleColor}>{titleText}</Title>
    <List>
      {items.map((item) => (
        <ItemList key={nanoid()}>
          <StyledLink href={item.url}>{item.title}</StyledLink>
        </ItemList>
      ))}
    </List>
  </section>
)
