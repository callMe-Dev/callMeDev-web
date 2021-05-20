import React from 'react'

import ContentTitle from '../ContentTitle/ContentTitle'
import { RulesStyled, RulesImage, RulesSubtitle, List } from './Rules.styles'
import WarningImage from '../../assets/illustrations/warning.svg'

export default function Rules() {
  return (
    <RulesStyled>
      <RulesImage src={WarningImage} alt='Advertencia' />
      <div>
        <ContentTitle
          titleText='Nuestras'
          titleSpan='Normas'
          titleColor='var(--red)'
        />
        <RulesSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</RulesSubtitle>
        <List>
          <li>Sed tincidunt diam dui, et condimentum lorem interdum quis. Aenean posuere pulvinar massa in
            scelerisque.
          </li>
          <li>Vivamus el nulla mattis eu.</li>
          <li>Mauris et ipsum id libero euismod ullamcorper. Integer laoreet massa sollicitudin tincidunt molestie.</li>
        </List>
      </div>
    </RulesStyled>
  )
}
