import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Welcome to Al-Hikmah International Academy</span>
          <h1 className="text-hero hero__headline">
            Building Knowledge.
            <br />
            Shaping Character.
            <br />
            Preparing Tomorrow&rsquo;s Leaders.
          </h1>
          <p className="text-body-lg hero__desc">
            A forward-thinking learning environment where academic excellence,
            character development and practical learning come together to
            prepare students for a changing world.
          </p>
          <div className="hero__actions">
            <NavLink to="/apply" className="btn btn-primary">
              Apply for Admission
            </NavLink>
            <NavLink to="/about" className="btn btn-secondary">
              Explore Our School
            </NavLink>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-panel__block hero-panel__block--gold" />
            <div className="hero-panel__block hero-panel__block--emerald" />
            <span className="hero-panel__monogram">AH</span>

            <div className="hero-panel__card hero-panel__card--top">
              <span className="hero-panel__card-title">Academic Excellence</span>
            </div>
            <div className="hero-panel__card hero-panel__card--bottom">
              <span className="hero-panel__card-title">Character Formation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero