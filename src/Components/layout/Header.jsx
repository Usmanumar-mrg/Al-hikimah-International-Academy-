import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand__name">Al-Hikmah</span>
          <span className="brand__subtitle">International Academy</span>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink to="/apply" className="btn btn-primary site-header__cta">
          Apply Now
        </NavLink>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="hamburger-btn"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-btn__bar" />
          <span className="hamburger-btn__bar" />
          <span className="hamburger-btn__bar" />
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        links={NAV_LINKS}
      />
    </header>
  )
}

export default Header