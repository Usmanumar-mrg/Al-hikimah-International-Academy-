const AREAS = [
  'Mathematics',
  'Sciences',
  'English & Languages',
  'Humanities & Social Sciences',
  'ICT & Technology',
]

function LearningAreas() {
  return (
    <section className="learning-areas">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Learning Areas</span>
          <h2>Core Areas of Study</h2>
        </div>

        <div className="learning-areas__grid">
          {AREAS.map((area) => (
            <div className="learning-area" key={area}>
              <span className="learning-area__marker" aria-hidden="true">
                {area.charAt(0)}
              </span>
              <span className="learning-area__label">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningAreas
