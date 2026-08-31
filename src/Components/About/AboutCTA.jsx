import { NavLink } from 'react-router-dom'

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container about-cta__inner">
        <h2>Ready to Learn More?</h2>
        <p>
          Explore our academic approach, admissions pathway or contact the
          academy concept team for more information.
        </p>
        <div className="about-cta__actions">
          <NavLink to="/academics" className="btn btn-primary">
            Explore Academics
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary about-cta__secondary">
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA