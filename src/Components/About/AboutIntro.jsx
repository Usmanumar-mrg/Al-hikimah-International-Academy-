function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="container about-intro__grid">
        <div className="about-intro__content">
          <span className="eyebrow">Who We Are</span>
          <h2>Who We Are</h2>
          <p className="text-muted">
            As a concept, Al-Hikmah International Academy brings together
            strong academic foundations with Islamic character development,
            practical learning and digital awareness. The aim is a learning
            environment where knowledge and values grow side by side.
          </p>
          <p className="text-muted">
            We envision students developing confidence, responsibility and
            the practical skills needed to navigate everyday life, alongside
            a solid grounding in academic subjects and moral formation.
          </p>
          <p className="text-muted">
            This vision is designed to prepare young people not only for
            examinations, but for the responsibilities and opportunities
            that come with adulthood.
          </p>
        </div>

        <div className="about-intro__visual" aria-hidden="true">
          <div className="about-intro-panel" />
        </div>
      </div>
    </section>
  )
}

export default AboutIntro