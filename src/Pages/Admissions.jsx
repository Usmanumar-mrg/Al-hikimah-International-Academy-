import AdmissionsHero from '../components/admissions/AdmissionsHero.jsx'
import AdmissionsIntro from '../components/admissions/AdmissionsIntro.jsx'
import AdmissionProcess from '../components/admissions/AdmissionProcess.jsx'
import WhoCanApply from '../components/admissions/WhoCanApply.jsx'
import RequirementsAndDocuments from '../components/admissions/RequirementsAndDocuments.jsx'
import ApplicationForm from '../components/admissions/ApplicationForm.jsx'
import AdmissionsFAQ from '../components/admissions/AdmissionsFAQ.jsx'
import AdmissionsFinalCTA from '../components/admissions/AdmissionsFinalCTA.jsx'
import Seo from '../components/ui/Seo.jsx'

function Admissions() {
  return (
    <>
    <Seo
  title="Admissions | Al-Hikmah International Academy"
  description="Learn about the admissions process and start your enquiry at Al-Hikmah International Academy."
/>
      <AdmissionsHero />
      <AdmissionsIntro />
      <AdmissionProcess />
      <WhoCanApply />
      <RequirementsAndDocuments />

      <section className="application-form-section" id="application-form">
        <div className="container application-form-section__inner">
          <div className="section-header">
            <span className="eyebrow">Application</span>
            <h2>Start Your Enquiry</h2>
            <p className="text-muted section-header__desc">
              This is a demonstration enquiry form. Submissions are not sent
              anywhere in this concept build.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      <AdmissionsFAQ />
      <AdmissionsFinalCTA />
    </>
  )
}

export default Admissions
