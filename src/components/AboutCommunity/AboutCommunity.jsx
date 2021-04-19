import React from 'react'
import historyBook from '../../assets/illustrations/history-book.svg'
import callMeDevDiscord from '../../assets/illustrations/callme-dev-discord.jpeg'
import Button from '../Button/Button'

import {
  AboutCommunityStyled,
  AboutCommunityTitle,
  SpanTitle,
  AboutCommunityText,
  AboutCommunityImg,
} from './AboutCommunity.styles'

export default function AboutCommunity() {
  return (
    <AboutCommunityStyled>
      <div>
        <AboutCommunityTitle>
          Sobre la <SpanTitle>comunidad</SpanTitle>{' '}
        </AboutCommunityTitle>
        <AboutCommunityText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt diam
          dui, et condimentum lorem interdum quis. Aenean posuere pulvinar massa in
          scelerisque. Vivamus elementum bibendum elit, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed tincidunt diam dui, et condimentum lorem
          interdum quis. Aenean posuere pulvinar massa in scelerisque. Vivamus
          elementum bibendum elit
        </AboutCommunityText>
        <Button
          btnImg={historyBook}
          btnImgAlt='Conoce nuestra historia'
          theme='blue'
          btnText='Nuestra historia'
        />
      </div>
      <AboutCommunityImg src={callMeDevDiscord} alt='callMeDev en discord' />
    </AboutCommunityStyled>
  )
}
