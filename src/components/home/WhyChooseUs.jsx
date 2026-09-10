const FEATURES = [
  {
    title: 'Character & Values',
    description:
      'We place strong emphasis on integrity, discipline, responsibility and respectful conduct.',
  },
  {
    title: 'Academic Excellence',
    description:
      'Students are encouraged to build strong foundations, think critically and pursue excellence in their studies.',
  },
  {
    title: 'Practical Learning',
    description:
      'Learning should connect knowledge with practical skills and real-world problem solving.',
  },
  {
    title: 'Student Development',
    description:
      'We seek to nurture confidence, communication, creativity and leadership alongside academic growth.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>More Than Education</h2>
          <p className="text-muted section-header__desc">
            We aim to develop learners who are knowledgeable, disciplined,
            confident and prepared to make a meaningful contribution to
            society.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {FEATURES.map((feature) => (
            <div className="feature-block" key={feature.title}>
              <span className="feature-block__accent" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
