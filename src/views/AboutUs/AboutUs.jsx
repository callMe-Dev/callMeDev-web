import React from 'react'
import AboutUsContent from '../../components/About/AboutUsContent/AboutUsContent'
import OurProjects from '../../components/About/OurProjects/OurProjects'
import OurCreators from '../../components/About/OurCreators/OurCreators'
import OurMods from '../../components/About/OurMods/OurMods'

export default function AboutUs() {
  return (
    <main>
      <AboutUsContent />
      <OurProjects />
      <OurCreators />
      <OurMods />
    </main>
  )
}
