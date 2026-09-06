import { NavLink } from 'react-router-dom'

function MobileMenu({ isOpen, onClose, links }) {
  return (
    <div
      id="mobile-menu"
      className={isOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}
    >
      <div className="mobile-menu__header">
        <span className="mobile-menu__title">Menu</span>
        <button
          type="button"
          className="mobile-menu__close"
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <nav aria-label="Mobile navigation">
        <ul className="mobile-menu__list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'mobile-menu__link mobile-menu__link--active'
                    : 'mobile-menu__link'
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <NavLink to="/admissions" className="btn btn-primary mobile-menu__cta" onClick={onClose}>
        Apply Now
      </NavLink>
    </div>
  )
}

export default MobileMenu
