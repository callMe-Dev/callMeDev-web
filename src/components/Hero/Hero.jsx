import React from 'react'
import callMeDevBigLogo from '../../assets/illustrations/big-logo.svg'
import discordLogo from '../../assets/illustrations/discord-logo.svg'
import waveToDown from '../../assets/waves/waveToDown-black.svg'
import Button from '../Button/Button'

import {
  HeroLogo,
  HeroStyled,
  HeroTextContent,
  HeroTitle,
  HeroWaveToDown,
} from './Hero.styles'

export default function Hero() {
  return (
    <HeroStyled>
      <HeroLogo src={callMeDevBigLogo} alt='callMeDev logo' title='callMeDev' />
      <div>
        <HeroTitle>Unete a nuestra comunidad de programadores :D</HeroTitle>
        <HeroTextContent>
          Realizamos proyectos, mientras aprendemos y obtenemos experiencia.
        </HeroTextContent>
        <HeroTextContent>
          Tambien platicamos y convivimos como comunidad mientras compartimos
          experiencias y conocimiento
        </HeroTextContent>
        <Button
          btnText='Unete con Discord'
          btnImg={discordLogo}
          btnImgAlt='Discord logo'
          theme='purple'
        />
      </div>
      <HeroWaveToDown
        src={waveToDown}
        alt='A wave illustration for the hero section'
      />
    </HeroStyled>
  )
}
