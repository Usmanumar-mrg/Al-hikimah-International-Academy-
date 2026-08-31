import AcademicsHero from '../components/Academics/AcademicsHero.jsx'
import AcademicPhilosophy from '../components/Academics/AcademicPhilosophy.jsx'
import SchoolLevels from '../components/Academics/SchoolLevels.jsx'
import LearningAreas from '../components/Academics/LearningAreas.jsx'
import BeyondClassroom from '../components/Academics/BeyondClassroom.jsx'
import StudentDevelopment from '../components/Academics/StudentDevelopment.jsx'
import AcademicsCTA from '../components/Academics/AcademicsCTA.jsx'
import Seo from '../components/ui/Seo.jsx'

function Academics() {
  return (
    <>
    <Seo
  title="Academics | Al-Hikmah International Academy"
  description="Explore the academic approach, school levels and learning areas at Al-Hikmah International Academy."
/>
      <AcademicsHero />
      <AcademicPhilosophy />
      <SchoolLevels />
      <LearningAreas />
      <BeyondClassroom />
      <StudentDevelopment />
      <AcademicsCTA />
    </>
  )
}

export default Academics