import { NavLink } from 'react-router-dom'
import WhatsAppButton from '../ui/WhatsAppButton.jsx'

function AdmissionsFinalCTA() {
  return (
    <section className="admissions-final-cta">
      <div className="container admissions-final-cta__inner">
        <h2>Ready to Start the Journey?</h2>
        <p>
          Reach out to our admissions team through the enquiry form, WhatsApp,
          or our contact page.
        </p>
        <div className="admissions-final-cta__actions">
          <NavLink to="#application-form" className="btn btn-primary">
            Start an Enquiry
          </NavLink>
          <WhatsAppButton
            label="Chat with Admissions on WhatsApp"
            message="Hello, I would like to enquire about admission to Al-Hikmah International Academy."
          />
          <NavLink to="/contact" className="btn btn-secondary admissions-final-cta__secondary">
            Contact the Academy
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsFinalCTA
