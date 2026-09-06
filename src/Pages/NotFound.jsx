import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container section placeholder-page">
      <span className="placeholder-page__tag" style={{ backgroundColor: 'var(--color-error)' }}>
        404
      </span>
      <h1>Page Not Found</h1>
      <p className="text-muted placeholder-page__desc">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div style={{ marginTop: 'var(--space-6)' }}>
        <NavLink to="/" className="btn btn-primary">
          Return Home
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound
