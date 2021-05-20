import React from 'react'
import Button from '../Button/Button'
import { GetStartedStyled, GetStartedTitle } from './GetStarted.styles'

export default function GetStarted() {
  return(
    <GetStartedStyled>
      <GetStartedTitle>!Que comience la <br />aventura!</GetStartedTitle>
      <Button
        btnText='!Unirse a la comunidad¡'
        theme='yellow'
        withImg={false}
      />
    </GetStartedStyled>
  )
}
