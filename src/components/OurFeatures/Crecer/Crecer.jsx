import React from 'react'
import OurFeaturesContent from '../OurFeaturesContent/OurFeaturesContent'
import learningTogether from '../../../assets/illustrations/learning-together.svg'

export default function Crecer() {
  return (
    <>
      <OurFeaturesContent
        image={learningTogether}
        altImage='Personas subiendo un gráfico de barras'
        subTitle='Crecer'
        subTitleInColor='Profesionalmente'
        subTitleColor='var(--yellow)'
        content='uere tellus vitae, bibendum ligula. Cras nisl ligula, gravida vel tellus
          ac, lobortis tincidunt orci. Mauris nec maximus justo. Mauris efficitur
          erat vitae ex imperdiet rutrum. Pellentesque pellentesque lectus in nulla
          ornare efficitur. Nunc sed sem et sapien euismod tristique. Sed vel commodo
          ipsum'
      />
    </>
  )
}
