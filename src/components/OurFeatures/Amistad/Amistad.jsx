import React from 'react'
import friendshipSvg from '../../../assets/illustrations/friendship.svg'

import {
  AmistadImg,
  AmistadSubTitle,
  AmistadText,
  AmistadSection,
} from './Amistad.styles'

export default function Amistad() {
  return (
    <AmistadSection>
      <AmistadImg src={friendshipSvg} alt='Amistad' loading='lazy' />
      <div>
        <AmistadSubTitle>Amistad</AmistadSubTitle>
        <AmistadText>
          uere tellus vitae, bibendum ligula. Cras nisl ligula, gravida vel tellus
          ac, lobortis tincidunt orci. Mauris nec maximus justo. Mauris efficitur
          erat vitae ex imperdiet rutrum. Pellentesque pellentesque lectus in nulla
          ornare efficitur. Nunc sed sem et sapien euismod tristique. Sed vel commodo
          ipsum.{' '}
        </AmistadText>
      </div>
    </AmistadSection>
  )
}
