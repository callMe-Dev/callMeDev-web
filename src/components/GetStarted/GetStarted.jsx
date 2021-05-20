import React from 'react'
import Button from '../Button/Button'
import {
  GetStartedButton,
  GetStartedStyled,
  GetStartedTitle,
} from './GetStarted.styles'

export default function GetStarted() {
  return (
    <GetStartedStyled>
      <GetStartedTitle>
        !Que comience la <br />
        aventura!
      </GetStartedTitle>
      <GetStartedButton>
        <Button btnText='¡Unirse a la comunidad!' theme='yellow' withImg={false} />
      </GetStartedButton>
    </GetStartedStyled>
  )
}
