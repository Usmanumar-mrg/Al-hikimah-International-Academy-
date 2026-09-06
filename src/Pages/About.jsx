import AboutHero from '../components/about/AboutHero.jsx'
import SchoolIntroduction from '../components/about/SchoolIntroduction.jsx'
import MissionVision from '../components/about/MissionVision.jsx'
import CoreValues from '../components/about/CoreValues.jsx'
import EducationApproach from '../components/about/EducationApproach.jsx'
import WhatMakesUsDifferent from '../components/about/WhatMakesUsDifferent.jsx'
import AboutCTA from '../components/about/AboutCTA.jsx'
import Seo from '../components/ui/Seo.jsx'

function About() {
  return (
    <>
    <Seo
  title="About Al-Hikmah International Academy"
  description="Learn about the mission, vision and educational approach behind Al-Hikmah International Academy."
/>
      <AboutHero />
      <SchoolIntroduction />
      <MissionVision />
      <CoreValues />
      <EducationApproach />
      <WhatMakesUsDifferent />
      <AboutCTA />
    </>
  )
}

export default About
