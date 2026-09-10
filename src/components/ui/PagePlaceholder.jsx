function PagePlaceholder({ title, description }) {
  return (
    <div className="container section placeholder-page">
      <span className="placeholder-page__tag">Coming Soon</span>
      <h1>{title}</h1>
      <p className="text-muted placeholder-page__desc">
        {description ||
          'This page is a structural placeholder. The full content and design for this page will be implemented in a later milestone.'}
      </p>
    </div>
  )
}

export default PagePlaceholder
