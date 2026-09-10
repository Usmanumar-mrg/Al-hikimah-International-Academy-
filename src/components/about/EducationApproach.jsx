const APPROACH_CARDS = [
  {
    title: 'Learn Deeply',
    description:
      'We believe students need strong foundations, clear understanding and the confidence to ask questions, solve problems and keep learning.',
  },
  {
    title: 'Live with Character',
    description:
      'Education should shape conduct as well as knowledge, encouraging discipline, responsibility, respect and integrity.',
  },
  {
    title: 'Prepare for Tomorrow',
    description:
      'Students should develop the digital awareness, creativity and practical mindset needed to navigate a changing world.',
  },
]

function EducationApproach() {
  return (
    <section className="education-approach">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Approach</span>
          <h2>Our Educational Approach</h2>
        </div>

        <div className="education-approach__grid">
          {APPROACH_CARDS.map((card) => (
            <div className="education-approach__card" key={card.title}>
              <span className="education-approach__icon" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p className="text-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationApproach
