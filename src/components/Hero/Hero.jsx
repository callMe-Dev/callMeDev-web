import React from 'react'
import callMeDevBigLogo from '../../assets/illustrations/big-logo.svg'
import discordLogo from '../../assets/illustrations/discord-logo.svg'

import {HeroDiscordBtn, HeroDiscordIcon, HeroLogo, HeroStyled, HeroTextContent, HeroTitle} from './Hero.styles'

export default function Hero() {
  return (
    <HeroStyled>
      <HeroLogo src={callMeDevBigLogo} alt='callMeDev logo'/>
      <div>
        <HeroTitle>Unete a nuestra comunidad de programadores :D</HeroTitle>
        <HeroTextContent>
          Realizamos proyectos, mientras aprendemos y obtenemos experiencia.
        </HeroTextContent>
        <HeroTextContent>
          Tambien platicamos y convivimos mas que solo como comunidad, somos amigos devs
        </HeroTextContent>
        <HeroDiscordBtn type='button'>
          <HeroDiscordIcon src={discordLogo} alt='Discord logo'/>
          Unete con Discord
        </HeroDiscordBtn>
      </div>
    </HeroStyled>
  )
}
