import Hero from '../components/Home/Hero.jsx'
import TrustSection from '../components/home/TrustSection.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import AcademicPrograms from '../components/home/AcademicPrograms.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import AdmissionsPreview from '../components/home/AdmissionsPreview.jsx'
import NewsPreview from '../components/home/NewsPreview.jsx'
import ContactPreview from '../components/home/ContactPreview.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'

function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutPreview />
      <AcademicPrograms />
      <WhyChooseUs />
      <AdmissionsPreview />
      <NewsPreview />
      <ContactPreview />
      <FinalCTA />
    </>
  )
}

export default Home