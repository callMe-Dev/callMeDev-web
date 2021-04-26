import React from 'react'
import OurFeaturesContent from '../OurFeaturesContent/OurFeaturesContent'
import teamwork from '../../../assets/illustrations/teamwork.svg'

import { EquipoStyled } from './Equipo.styles'

export default function Equipo() {
  return (
    <EquipoStyled>
      <OurFeaturesContent
        image={teamwork}
        subTitle='Trabajo en'
        subTitleInColor='Equipo'
        subTitleColor='var(--blue)'
        flexReverse
        content='uere tellus vitae, bibendum ligula. Cras nisl ligula, gravida vel tellus
          ac, lobortis tincidunt orci. Mauris nec maximus justo. Mauris efficitur
          erat vitae ex imperdiet rutrum. Pellentesque pellentesque lectus in nulla
          ornare efficitur. Nunc sed sem et sapien euismod tristique. Sed vel commodo
          ipsum'
      />
    </EquipoStyled>
  )
}
