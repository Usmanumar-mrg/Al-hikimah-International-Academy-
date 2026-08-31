import { NavLink } from 'react-router-dom'
import { CONTACT_INFO, CONTACT_LINKS } from '../../config/contact.js'
import WhatsAppButton from '../ui/WhatsAppButton.jsx'

function ContactMethods() {
  return (
    <section className="contact-methods">
      <div className="container contact-methods__grid">
        <div className="contact-method-card">
          <h3>WhatsApp</h3>
          <p className="text-muted">Chat directly with the academy for a quick response.</p>
          <WhatsAppButton
            label={`Chat: ${CONTACT_INFO.whatsappDisplay}`}
            message="Hello, I would like to get in touch with Al-Hikmah International Academy."
          />
        </div>

        <div className="contact-method-card">
          <h3>Email</h3>
          <p className="text-muted">Send a message and we&rsquo;ll respond as soon as possible.</p>
          <a href={CONTACT_LINKS.email} className="btn btn-secondary">
            {CONTACT_INFO.email}
          </a>
        </div>

        <div className="contact-method-card">
          <h3>Location</h3>
          <p className="text-muted">Address coming soon.</p>
        </div>

        <div className="contact-method-card">
          <h3>Looking to Apply?</h3>
          <p className="text-muted">Visit our admissions page to start the application process.</p>
          <NavLink to="/admissions" className="btn btn-secondary">
            Go to Admissions
          </NavLink>
        </div>
      </div>

      <p className="text-caption contact-methods__note">
        Current project contact details, not yet officially confirmed.
      </p>
    </section>
  )
}

export default ContactMethods