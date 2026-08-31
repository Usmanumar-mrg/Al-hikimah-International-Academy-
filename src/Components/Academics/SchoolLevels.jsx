const LEVELS = [
  {
    label: 'Early Years',
    description:
      'A nurturing foundation where young learners develop curiosity, confidence, communication and early academic skills.',
  },
  {
    label: 'Primary',
    description:
      'A balanced programme focused on strong literacy, numeracy, knowledge-building and positive character development.',
  },
  {
    label: 'Secondary',
    description:
      'A focused academic environment preparing students for higher education, responsible citizenship and future opportunities.',
  },
]

function SchoolLevels() {
  return (
    <section className="school-levels">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">School Levels</span>
          <h2>Learning at Every Stage</h2>
        </div>

        <div className="school-levels__grid">
          {LEVELS.map((level) => (
            <div className="level-card" key={level.label}>
              <span className="level-card__icon" aria-hidden="true" />
              <h3>{level.label}</h3>
              <p className="text-muted">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolLevels