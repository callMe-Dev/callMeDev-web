import React from 'react'
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
      <GetStartedButton
        btnText='¡Unirse a la comunidad!'
        theme='yellow'
        withImg={false}
      />
    </GetStartedStyled>
  )
}
