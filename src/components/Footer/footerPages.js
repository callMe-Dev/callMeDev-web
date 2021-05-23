import { nosotrosUrl } from '../../Routes/routes'

export const footerPages = [
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
        url: `${nosotrosUrl}#projects`,
      },
      {
        title: 'Creadores',
        url: `${nosotrosUrl}#creators`,
      },
      {
        title: 'Moderadores',
        url: `${nosotrosUrl}#mods`,
      },
    ],
  },
]
