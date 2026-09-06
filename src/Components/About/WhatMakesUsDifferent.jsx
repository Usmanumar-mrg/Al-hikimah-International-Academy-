const DIFFERENTIATORS = [
  {
    title: 'Balanced Growth',
    description: 'A balanced focus on academic development and character formation.',
  },
  {
    title: 'Modern Learning Environment',
    description:
      'A learning environment designed around current educational thinking and practical engagement.',
  },
  {
    title: 'Emphasis on Discipline',
    description:
      'Clear structure and expectations that support consistent, disciplined learning habits.',
  },
  {
    title: 'Technology-Aware Education',
    description: 'Building comfort and confidence with technology as part of everyday learning.',
  },
  {
    title: 'Supportive Learning Culture',
    description: 'A culture where students feel supported, encouraged and understood.',
  },
  {
    title: 'Holistic Student Development',
    description:
      'Attention to academic, social and personal growth together, not in isolation.',
  },
]

function WhatMakesUsDifferent() {
  return (
    <section className="what-different">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">What Makes Us Different</span>
          <h2>What Makes Us Different</h2>
        </div>

        <div className="what-different__grid">
          {DIFFERENTIATORS.map((item) => (
            <div className="differentiator" key={item.title}>
              <span className="differentiator__marker" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatMakesUsDifferent
