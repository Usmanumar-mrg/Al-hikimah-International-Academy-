const LEVELS = [
  {
    label: 'Early Years',
    description: 'A nurturing entry point for young learners beginning their education.',
  },
  {
    label: 'Primary',
    description: 'For students ready to build strong literacy, numeracy and foundational skills.',
  },
  {
    label: 'Secondary',
    description: 'For students preparing for advanced study and future opportunities.',
  },
]

function WhoCanApply() {
  return (
    <section className="who-can-apply">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Who Can Apply</span>
          <h2>Entry Levels</h2>
        </div>

        <div className="who-can-apply__grid">
          {LEVELS.map((level) => (
            <div className="level-card" key={level.label}>
              <span className="level-card__icon" aria-hidden="true" />
              <h3>{level.label}</h3>
              <p className="text-muted">{level.description}</p>
            </div>
          ))}
        </div>

        <p className="text-caption who-can-apply__note">
          Age requirements: to be confirmed by the school.
        </p>
      </div>
    </section>
  )
}

export default WhoCanApply