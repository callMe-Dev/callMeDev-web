import React from 'react'
import { AboutUsStyled, AboutUsText } from './AboutUsContent.styles'
import AboutTitle from '../AboutTitle/AboutTitle'

export default function AboutUsContent() {
  return(
    <AboutUsStyled>
      <AboutTitle
        titleText='Sobre'
        titleSpan='Nosotros'
        titleColor='var(--green)'
      />
      <AboutUsText>
        Praesent eu maximus sapien. Proin viverra iaculis suscipit. Ut id rhoncus lorem, at consectetur turpis. Aenean malesuada sollicitudin eros nec mattis.
      </AboutUsText>
      <AboutUsText>
        Fusce interdum vehicula massa nec viverra. In non sollicitudin mi. Nulla tincidunt eleifend auctor. Integer porttitor mollis enim, et interdum turpis. Sed sagittis volutpat elit et interdum. Aliquam hendrerit velit mi, in condimentum odio cursus at. Donec suscipit, libero sit
      </AboutUsText>
      <AboutUsText>
        velit elementum sapien, vel luctus nulla tortor a libero. Curabitur volutpat quam id eros blandit, vel porttitor massa luctus. Nunc sed diam eget magna cursus convallis nec non neque. Nam sapien turpis, porttitor a mi quis, laoreet rhoncus lacus.
      </AboutUsText>
    </AboutUsStyled>
  )
}
