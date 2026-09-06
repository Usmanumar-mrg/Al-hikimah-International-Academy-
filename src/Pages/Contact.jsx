import ContactHero from '../components/contact/ContactHero.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import Seo from '../components/ui/Seo.jsx'

function Contact() {
  return (
    <>
    <Seo
  title="Contact | Al-Hikmah International Academy"
  description="Get in touch with Al-Hikmah International Academy via WhatsApp, email or our contact form."
/>
      <ContactHero />
      <ContactMethods />

      <section className="contact-form-section" id="contact-form">
        <div className="container contact-form-section__inner">
          <div className="section-header">
            <span className="eyebrow">Send a Message</span>
            <h2>We&rsquo;d Love to Hear From You</h2>
            <p className="text-muted section-header__desc">
              This is a demonstration form. Submissions are not sent anywhere
              in this concept build.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Contact
