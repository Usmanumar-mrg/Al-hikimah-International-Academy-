import { NavLink } from 'react-router-dom'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container about-hero__inner">
        <div className="about-hero__content">
          <span className="eyebrow about-hero__eyebrow">About Al-Hikmah</span>
          <h1>Education That Builds Knowledge, Character and Purpose</h1>
          <p className="text-body-lg about-hero__description">
            Al-Hikmah International Academy is a concept for a modern
            learning environment where academic growth, character formation
            and practical preparation work together.
          </p>
          <div className="about-hero__actions">
            <NavLink to="/academics" className="btn btn-primary">
              Explore Academics
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="about-hero__visual">
          <img
            src="/images/about/character-education.webp"
           alt="Students engaged in character education at Al-Hikmah International Academy"
            className="about-hero__image"
          />
          <span className="about-hero-tag about-hero-tag--knowledge">Knowledge</span>
          <span className="about-hero-tag about-hero-tag--character">Character</span>
          <span className="about-hero-tag about-hero-tag--purpose">Purpose</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero