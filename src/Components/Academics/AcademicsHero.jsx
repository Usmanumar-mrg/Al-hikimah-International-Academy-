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
            <NavLink to="/admissions" className="btn btn-primary">
              Apply for Admission
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="academics-hero__visual">
          <img
            src="/images/academics/classroom.webp"
            alt="Students learning in a classroom at Al-Hikmah International Academy"
            className="academics-hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default AcademicsHero