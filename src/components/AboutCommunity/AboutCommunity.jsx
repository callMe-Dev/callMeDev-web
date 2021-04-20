import React from 'react'
import historyBook from '../../assets/illustrations/history-book.svg'
import callMeDevDiscord from '../../assets/illustrations/callme-dev-discord.jpeg'
import Button from '../Button/Button'
import ContentTitle from '../ContentTitle/ContentTitle'

import {
  AboutCommunityStyled,
  AboutCommunityText,
  AboutCommunityImg,
} from './AboutCommunity.styles'

export default function AboutCommunity() {
  return (
    <AboutCommunityStyled>
      <div>
        <ContentTitle
          titleText='Sobre la'
          titleSpan='Comunidad'
          titleColor='var(--yellow)'
        />
        <AboutCommunityText>
          Somos una comunidad de programadores y diseñadores, que crea proyectos para
          poder aprender y obtener experiencia antes de y para conseguir un empleo.
          <br />
          <br />
          Creamos proyectos relacionado a todo el mundo TI, como la creacion de
          paginas Web, Backend, Bots de Discord e Interfaces de Usuario
          <br />
          <br />
          Tambien ayudamos a resolver dudas de aquellas personas interesadas en
          aprender a programar
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
