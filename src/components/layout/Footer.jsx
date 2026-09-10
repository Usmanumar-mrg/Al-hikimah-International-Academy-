import { NavLink } from 'react-router-dom'
import { CONTACT_INFO, CONTACT_LINKS } from '../../config/contact.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <span className="brand__name" style={{ color: '#FFFFFF' }}>
            Al-Hikmah
          </span>
          <p className="text-muted site-footer__desc">
            A modern educational institution combining academic development,
            character formation and practical learning.
          </p>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading">Quick Links</h4>
          <ul className="site-footer__list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/academics">Academics</NavLink></li>
            <li><NavLink to="/admissions">Admissions</NavLink></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading">Academics</h4>
          <ul className="site-footer__list">
            <li><NavLink to="/academics">Early Years</NavLink></li>
            <li><NavLink to="/academics">Primary</NavLink></li>
            <li><NavLink to="/academics">Secondary</NavLink></li>
            <li><NavLink to="/admissions">Apply</NavLink></li>
          </ul>
         
        <div> className="site-footer__col" </div>
          <h4 className="site-footer__heading">Contact</h4>
          <ul className="site-footer__list">
            <li className="text-muted">Address coming soon</li>
            <li>
              <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp: {CONTACT_INFO.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT_LINKS.email}>{CONTACT_INFO.email}</a>
            </li>
          </ul>
          <p className="text-caption site-footer__note">
            Current project contact details, not yet officially confirmed.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>© 2026 Al-Hikmah International Academy</span>
          <span>Concept Website — Designed &amp; Developed by Albani Tech Solutions</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
