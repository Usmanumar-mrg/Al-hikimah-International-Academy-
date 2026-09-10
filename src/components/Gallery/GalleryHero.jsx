function GalleryHero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Gallery</span>
          <h1 className="text-hero hero__headline">Life Beyond the Classroom</h1>
          <p className="text-body-lg hero__desc">
            A visual look at the kinds of moments, activities and learning
            environments that shape everyday school life.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-panel__block hero-panel__block--gold" />
            <div className="hero-panel__block hero-panel__block--emerald" />
            <span className="hero-panel__monogram">AH</span>
            <div className="hero-panel__card hero-panel__card--top">
              <span className="hero-panel__card-title">Sports</span>
            </div>
            <div className="hero-panel__card hero-panel__card--bottom">
              <span className="hero-panel__card-title">Creative Arts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryHero
