import React from 'react'

import ContentTitle from '../ContentTitle/ContentTitle'
import Button from '../Button/Button'
import githubLogo from '../../assets/illustrations/github-logo.svg'
import collaboratorImg from '../../assets/illustrations/collaborator.svg'

import {
  HowCollaborateImg,
  HowCollaborateStyled,
  HowCollaborateText,
} from './HowCollaborate.styles'

export default function HowCollaborate() {
  return (
    <HowCollaborateStyled>
      <div>
        <ContentTitle
          titleText='Como'
          titleSpan='Colaboramos'
          titleColor='var(--blue)'
        />
        <HowCollaborateText>
          Praesent eu maximus sapien. Proin viverra iaculis suscipit. Ut id rhoncus
          lorem, at consectetur turpis. Aenean malesuada sollicitudin eros nec
          mattis. Fusce interdum vehicula massa nec viverra. In non sollicitudin mi.
          Nulla tincidunt eleifend auctor. Integer porttitor mollis enim, et interdum
          turpis. Sed sagittis volutpat elit et interdum. Aliquam hendrerit velit mi,
          in c
        </HowCollaborateText>
        <Button
          btnText='Github'
          btnImg={githubLogo}
          btnImgAlt='Github'
          theme='black'
        />
      </div>
      <HowCollaborateImg src={collaboratorImg} alt='Colaboraciones' />
    </HowCollaborateStyled>
  )
}
