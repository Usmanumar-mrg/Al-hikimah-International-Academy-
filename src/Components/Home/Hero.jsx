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
            <NavLink to="/admissions" className="btn btn-primary">
              Apply for Admission
            </NavLink>
            <NavLink to="/about" className="btn btn-secondary">
              Explore Our School
            </NavLink>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="/images/home/hero-campus.webp"
            alt="Al-Hikmah International Academy campus"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
