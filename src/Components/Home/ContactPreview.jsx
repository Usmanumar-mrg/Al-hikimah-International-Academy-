import { CONTACT_INFO, CONTACT_LINKS } from '../../config/contact.js'
import WhatsAppButton from '../ui/WhatsAppButton.jsx'

function ContactPreview() {
  return (
    <section className="contact-preview">
      <div className="container contact-preview__inner">
        <div className="contact-preview__content">
          <span className="eyebrow">Get In Touch</span>
          <h2>Let&rsquo;s Connect</h2>
          <p className="text-muted contact-preview__desc">
            Prospective parents and guardians can reach out for admissions
            enquiries or general questions about Al-Hikmah International
            Academy.
          </p>
          <p className="text-caption contact-preview__note">
            Current project contact details — official school contact
            information will be provided separately.
          </p>
        </div>

        <div className="contact-preview__actions">
          <WhatsAppButton />
          <a
            href={CONTACT_LINKS.email}
            className="btn btn-secondary"
            aria-label={`Send an email to ${CONTACT_INFO.email}`}
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview