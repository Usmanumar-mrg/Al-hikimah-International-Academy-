import { NavLink } from 'react-router-dom'

function AcademicsHero() {
  return (
    <section className="academics-hero">
      <div className="container academics-hero__grid">
        <div className="academics-hero__content">
          <span className="eyebrow">Our Academics</span>
          <h1>Learning Designed to Build Knowledge, Character and Confidence</h1>
          <p className="text-body-lg academics-hero__desc">
            Our academic approach brings together strong foundations,
            curiosity and practical understanding to prepare students for
            the future.
          </p>
          <div className="academics-hero__actions">
            <NavLink to="/apply" className="btn btn-primary">
              Apply for Admission
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="academics-hero__visual" aria-hidden="true">
          <div className="academics-panel">
            <div className="academics-panel__block academics-panel__block--gold" />
            <div className="academics-panel__block academics-panel__block--emerald" />
            <div className="academics-panel__card academics-panel__card--top">
              Foundations
            </div>
            <div className="academics-panel__card academics-panel__card--bottom">
              Critical Thinking
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicsHero