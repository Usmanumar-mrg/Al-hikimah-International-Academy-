import WhatsAppButton from '../ui/WhatsAppButton.jsx'

function ContactHero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="text-hero hero__headline">Let&rsquo;s Start a Conversation</h1>
          <p className="text-body-lg hero__desc">
            Have a question about admissions, academics or anything else?
            Reach out and our team will get back to you.
          </p>
          <div className="hero__actions">
            <a href="#contact-form" className="btn btn-primary">
              Send a Message
            </a>
            <WhatsAppButton
              label="Chat on WhatsApp"
              message="Hello, I have a question about Al-Hikmah International Academy."
              className="btn-secondary"
            />
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-panel__block hero-panel__block--gold" />
            <div className="hero-panel__block hero-panel__block--emerald" />
            <span className="hero-panel__monogram">AH</span>
            <div className="hero-panel__card hero-panel__card--top">
              <span className="hero-panel__card-title">Quick Response</span>
            </div>
            <div className="hero-panel__card hero-panel__card--bottom">
              <span className="hero-panel__card-title">We&rsquo;re Listening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero