import { NavLink } from 'react-router-dom'

const STEPS = [
  {
    number: '01',
    title: 'Explore',
    description: 'Learn about our school and academic programmes.',
  },
  {
    number: '02',
    title: 'Apply',
    description: 'Submit an admission application.',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'Our admissions team will guide you through the next steps.',
  },
]

function AdmissionsPreview() {
  return (
    <section className="admissions-preview">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Admissions</span>
          <h2>Start Your Child&rsquo;s Journey</h2>
          <p className="text-muted section-header__desc">
            Interested in joining Al-Hikmah International Academy? Our
            admissions process is being designed to make the journey clear,
            simple and accessible for families.
          </p>
        </div>

        <div className="admissions-preview__steps">
          {STEPS.map((step) => (
            <div className="admission-step" key={step.number}>
              <span className="admission-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="admissions-preview__actions">
          <NavLink to="/apply" className="btn btn-primary">
            Apply for Admission
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary">
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsPreview