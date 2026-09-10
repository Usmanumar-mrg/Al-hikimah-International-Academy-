import AcademicsHero from '../components/academics/AcademicsHero.jsx'
import AcademicPhilosophy from '../components/academics/AcademicPhilosophy.jsx'
import SchoolLevels from '../components/academics/SchoolLevels.jsx'
import LearningAreas from '../components/academics/LearningAreas.jsx'
import BeyondClassroom from '../components/academics/BeyondClassroom.jsx'
import StudentDevelopment from '../components/academics/StudentDevelopment.jsx'
import AcademicsCTA from '../components/academics/AcademicsCTA.jsx'
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
