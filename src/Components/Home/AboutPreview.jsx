import { NavLink } from 'react-router-dom'

const POINTS = ['Academic Excellence', 'Character Formation', 'Practical Learning']

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-preview__grid">
        <div className="about-preview__content">
          <span className="eyebrow">About Al-Hikmah</span>
          <h2>Education Beyond the Classroom</h2>
          <p className="about-preview__desc">
            Al-Hikmah International Academy is envisioned as a modern
            educational institution committed to developing knowledgeable,
            disciplined and confident learners.
          </p>
          <p className="about-preview__desc">
            Our approach combines strong academic foundations with character
            formation, practical learning and preparation for the
            opportunities and responsibilities of the future.
          </p>

          <ul className="about-preview__points">
            {POINTS.map((point) => (
              <li key={point}>
                <span className="check-mark" aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>

          <NavLink to="/about" className="btn btn-primary">
            Learn More About Us
          </NavLink>
        </div>

        <div className="about-preview__visual" aria-hidden="true">
          <div className="about-panel">
            <div className="about-panel__block about-panel__block--navy" />
            <div className="about-panel__block about-panel__block--gold" />
            <div className="about-panel__block about-panel__block--emerald" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview