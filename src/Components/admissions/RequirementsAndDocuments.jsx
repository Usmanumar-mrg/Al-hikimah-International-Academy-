const REQUIREMENTS = [
  'Completed application form',
  'Previous academic records, where applicable',
  'Identification or birth documentation',
  'Recent passport photograph',
  'Transfer documents, where applicable',
]

function RequirementsAndDocuments() {
  return (
    <section className="requirements">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Requirements & Documents</span>
          <h2>What You&rsquo;ll Need</h2>
          <p className="text-muted section-header__desc">
            These are general, demonstration requirements. Exact
            documentation should be confirmed directly with the school.
          </p>
        </div>

        <ul className="requirements__list">
          {REQUIREMENTS.map((item) => (
            <li key={item}>
              <span className="check-mark" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RequirementsAndDocuments
