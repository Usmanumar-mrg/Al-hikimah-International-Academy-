const TRUST_ITEMS = [
  {
    number: '01',
    title: 'Academic Excellence',
    description: 'A structured approach to building strong academic foundations.',
  },
  {
    number: '02',
    title: 'Holistic Development',
    description: 'Supporting growth in character, confidence and creativity.',
  },
  {
    number: '03',
    title: 'Qualified Educators',
    description: 'Dedicated teaching focused on student growth and understanding.',
  },
  {
    number: '04',
    title: 'Safe Learning Environment',
    description: 'A secure, supportive setting where students can thrive.',
  },
]

function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container trust-grid">
        {TRUST_ITEMS.map((item) => (
          <div className="trust-item" key={item.number}>
            <span className="trust-item__number">{item.number}</span>
            <h3 className="trust-item__title">{item.title}</h3>
            <p className="text-muted trust-item__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustSection
