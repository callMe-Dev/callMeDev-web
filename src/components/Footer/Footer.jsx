import React from 'react'
import { nanoid } from 'nanoid'
import { StyledFooter, Responsive, FooterContent, FooterText } from './Footer.styles'
import { FooterSection } from './FooterSection/FooterSection'
import Button from '../Button/Button'
import discordLogo from '../../assets/illustrations/discord-logo.svg'

export default function Footer() {
  const footerPages = [
    {
      title: 'Home',
      color: 'var(--red)',
      items: [
        {
          title: 'Comunidad',
          url: '#about-community',
        },
        {
          title: 'Features',
          url: '#our-features',
        },
        {
          title: 'Normas',
          url: '/',
        },
      ],
    },
    {
      title: 'Features',
      color: 'var(--purple)',
      items: [
        {
          title: 'Comunidad',
          url: '/',
        },
        {
          title: 'Features',
          url: '/',
        },
        {
          title: 'Normas',
          url: '/',
        },
      ],
    },
    {
      title: 'Nosotros',
      color: 'var(--green)',
      items: [
        {
          title: 'Proyectos',
          url: '/about-us#our-projects',
        },
        {
          title: 'Creadores',
          url: '/about-us#our-creators',
        },
        {
          title: 'Moderadores',
          url: '/about-us#our-mods',
        },
      ],
    },
  ]

  return (
    <StyledFooter>
      <Responsive>
        {footerPages.map((page) => (
          <FooterSection
            titleText={page.title}
            titleColor={page.color}
            items={page.items}
            key={nanoid()}
          />
        ))}
        <FooterContent>
          <FooterText>
            uere tellus vitae, bibendum ligula. Cras nisl ligula, gravida vel tellus
            ac, lobortis tincidunt orci. Mauris nec maximus justo. Mauris efficitur
            erat vitae ex imperdiet rutrum
          </FooterText>
          <FooterText>
            Pellentesque pellentesque lectus in nulla ornare efficitur. Nunc sed sem
            et sapien euismod tristique. Sed vel commodo ipsum.
          </FooterText>
          <Button
            btnText='Únete con Discord'
            btnImg={discordLogo}
            btnImgAlt='Discord logo'
            theme='purple'
          />
        </FooterContent>
      </Responsive>
    </StyledFooter>
  )
}
