import { NavLink } from 'react-router-dom'

const PROGRAMS = [
  {
    id: 'early-years',
    label: 'Early Years',
    description:
      'A nurturing foundation where young learners develop curiosity, confidence, communication and early academic skills.',
  },
  {
    id: 'primary',
    label: 'Primary',
    description:
      'A balanced programme focused on strong literacy, numeracy, knowledge-building and positive character development.',
  },
  {
    id: 'secondary',
    label: 'Secondary',
    description:
      'A focused academic environment preparing students for higher education, responsible citizenship and future opportunities.',
  },
]

function AcademicPrograms() {
  return (
    <section className="academic-programs">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Academics</span>
          <h2>Learning Designed for Every Stage</h2>
          <p className="text-muted section-header__desc">
            A structured learning journey designed to support students as
            they grow academically, socially and personally.
          </p>
        </div>

        <div className="academic-programs__grid">
          {PROGRAMS.map((program) => (
            <div className="program-card" key={program.id}>
              <span className="program-card__icon" aria-hidden="true" />
              <h3>{program.label}</h3>
              <p className="text-muted">{program.description}</p>
              <NavLink to="/academics" className="program-card__link">
                Learn More →
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicPrograms
