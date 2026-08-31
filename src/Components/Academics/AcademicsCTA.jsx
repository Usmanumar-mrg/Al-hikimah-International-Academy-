import { NavLink } from 'react-router-dom'

function AcademicsCTA() {
  return (
    <section className="academics-cta">
      <div className="container academics-cta__inner">
        <h2>Ready to Take the Next Step?</h2>
        <p>
          Start your child&rsquo;s admission journey or reach out to the
          academy for more information.
        </p>
        <div className="academics-cta__actions">
          <NavLink to="/admissions" className="btn btn-primary">
            Start Your Application
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary academics-cta__secondary">
            Contact the Academy
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default AcademicsCTA