const VALUES = [
  {
    letter: 'K',
    title: 'Knowledge',
    description: 'Building strong foundations of understanding across every subject.',
  },
  {
    letter: 'I',
    title: 'Integrity',
    description: 'Doing what is right, even when no one is watching.',
  },
  {
    letter: 'D',
    title: 'Discipline',
    description: 'Developing consistency, focus and self-control in learning and life.',
  },
  {
    letter: 'R',
    title: 'Respect',
    description: 'Valuing people, ideas and the wider community.',
  },
  {
    letter: 'R',
    title: 'Responsibility',
    description: "Owning one's actions and their impact on others.",
  },
  {
    letter: 'E',
    title: 'Excellence',
    description: 'Pursuing high standards in learning, conduct and character.',
  },
]

function CoreValues() {
  return (
    <section className="core-values">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">What We Value</span>
          <h2>What We Value</h2>
        </div>

        <div className="core-values__grid">
          {VALUES.map((value) => (
            <div className="core-value" key={value.title}>
              <span className="core-value__icon" aria-hidden="true">
                {value.letter}
              </span>
              <h3 className="core-value__title">{value.title}</h3>
              <p className="text-muted core-value__description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues