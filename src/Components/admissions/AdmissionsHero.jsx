import { NavLink } from 'react-router-dom'

function AdmissionsHero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Admissions</span>
          <h1 className="text-hero hero__headline">Begin Your Child&rsquo;s Journey</h1>
          <p className="text-body-lg hero__desc">
            We welcome prospective families to explore what Al-Hikmah
            International Academy offers and to begin the admissions
            conversation with our team.
          </p>
          <div className="hero__actions">
            <NavLink to="#application-form" className="btn btn-primary">
              Start Your Enquiry
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-panel__block hero-panel__block--gold" />
            <div className="hero-panel__block hero-panel__block--emerald" />
            <span className="hero-panel__monogram">AH</span>
            <div className="hero-panel__card hero-panel__card--top">
              <span className="hero-panel__card-title">Enquire</span>
            </div>
            <div className="hero-panel__card hero-panel__card--bottom">
              <span className="hero-panel__card-title">Enroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsHero