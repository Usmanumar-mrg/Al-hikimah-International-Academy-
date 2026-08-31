const PRINCIPLES = [
  {
    number: '01',
    title: 'Strong Foundations',
    description: 'Building solid understanding across core subjects and disciplined study habits.',
  },
  {
    number: '02',
    title: 'Curiosity & Critical Thinking',
    description: 'Encouraging students to ask questions, explore ideas and think for themselves.',
  },
  {
    number: '03',
    title: 'Practical Understanding',
    description: 'Connecting classroom knowledge with real situations and problem solving.',
  },
  {
    number: '04',
    title: 'Independent Learning & Character',
    description: 'Developing self-direction alongside discipline, responsibility and integrity.',
  },
]

function AcademicPhilosophy() {
  return (
    <section className="academic-philosophy">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Philosophy</span>
          <h2>How We Approach Learning</h2>
        </div>

        <div className="academic-philosophy__grid">
          {PRINCIPLES.map((item) => (
            <div className="philosophy-item" key={item.number}>
              <span className="philosophy-item__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicPhilosophy