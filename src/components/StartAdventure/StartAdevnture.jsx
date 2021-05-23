import React from 'react'
import Button from '../Button/Button'
import {
  StartAdventureButton,
  StartAdventureStyled,
  StartAdventureTitle,
} from './StartAdventure'

export default function StartAdventure() {
  return (
    <StartAdventureStyled>
      <StartAdventureTitle>
        !Que comience la <br />
        aventura!
      </StartAdventureTitle>
      <StartAdventureButton>
        <Button btnText='¡Unirse a la comunidad!' theme='yellow' withImg={false} />
      </StartAdventureButton>
    </StartAdventureStyled>
  )
}
