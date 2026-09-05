function SchoolIntroduction() {
  return (
    <section className="school-intro">
      <div className="container school-intro__grid">
        <div className="school-intro__content">
          <span className="eyebrow">Who We Are</span>
          <h2>Who We Are</h2>
          <p className="text-muted">
            Al-Hikmah International Academy is envisioned as a modern
            learning community where academic development and character
            formation grow side by side.
          </p>
          <p className="text-muted">
            Our approach is built around curiosity, critical thinking and
            discipline — helping students build strong foundations while
            developing the confidence to ask questions and solve problems.
          </p>
          <p className="text-muted">
            We aim to prepare students not only for examinations, but for
            the responsibilities of active, responsible citizenship in a
            changing world.
          </p>
        </div>

        <div className="school-intro__visual">
          <img
            src="/images/about/who-we-are.webp"
            alt="Students and teachers at Al-Hikmah International Academy"
            className="school-intro__image"
          />
        </div>
      </div>
    </section>
  )
}

export default SchoolIntroduction