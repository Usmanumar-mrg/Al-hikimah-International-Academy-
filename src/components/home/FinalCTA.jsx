import { NavLink } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner">
        <h2 className="final-cta__heading">Ready to Begin the Journey?</h2>
        <p className="final-cta__desc">
          Discover an educational environment designed to help students grow
          in knowledge, character and confidence.
        </p>
        <div className="final-cta__actions">
          <NavLink to="/admissions" className="btn btn-primary">
            Apply for Admission
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary final-cta__secondary">
            Contact the School
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
