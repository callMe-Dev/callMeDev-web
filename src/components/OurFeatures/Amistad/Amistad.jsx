import React from 'react'
import OurFeaturesContent from '../OurFeaturesContent/OurFeaturesContent'
import friendshipSvg from '../../../assets/illustrations/friendship.svg'

export default function Amistad() {
  return (
    <>
      <OurFeaturesContent
        image={friendshipSvg}
        altImage='2 amigas'
        subTitleInColor='Amistad'
        subTitleColor='var(--purple)'
        content='uere tellus vitae, bibendum ligula. Cras nisl ligula, gravida vel tellus
          ac, lobortis tincidunt orci. Mauris nec maximus justo. Mauris efficitur
          erat vitae ex imperdiet rutrum. Pellentesque pellentesque lectus in nulla
          ornare efficitur. Nunc sed sem et sapien euismod tristique. Sed vel commodo
          ipsum'
      />
    </>
  )
}
