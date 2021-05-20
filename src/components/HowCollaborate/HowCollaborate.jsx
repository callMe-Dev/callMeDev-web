import React from 'react'

import ContentTitle from '../ContentTitle/ContentTitle'
import githubLogo from '../../assets/illustrations/github-logo.svg'
import collaboratorImg from '../../assets/illustrations/collaborator.svg'

import {
  GithubButton,
  HowCollaborateImg,
  HowCollaborateStyled,
  HowCollaborateText,
} from './HowCollaborate.styles'
import Button from '../Button/Button'

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
          mattis. Fusce interdum vehicula massa nec viverra.
          <br />
          <br />
          In non sollicitudin mi. Nulla tincidunt eleifend auctor. Integer porttitor
          mollis enim, et interdum turpis. Sed sagittis volutpat elit et interdum.
          Aliquam hendrerit velit mi, in c
        </HowCollaborateText>
        <GithubButton>
          <Button
            btnText='Github'
            btnImg={githubLogo}
            btnImgAlt='Github logo'
            theme='black'
          />
        </GithubButton>
      </div>
      <HowCollaborateImg src={collaboratorImg} alt='3 personas colaborando juntas' />
    </HowCollaborateStyled>
  )
}
