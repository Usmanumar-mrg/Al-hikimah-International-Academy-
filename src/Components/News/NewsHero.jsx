function NewsHero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">News &amp; Updates</span>
          <h1 className="text-hero hero__headline">Stories, Updates &amp; School Life</h1>
          <p className="text-body-lg hero__desc">
            A look at the kinds of updates, stories and everyday moments this
            space will share as the academy grows.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-panel__block hero-panel__block--gold" />
            <div className="hero-panel__block hero-panel__block--emerald" />
            <span className="hero-panel__monogram">AH</span>
            <div className="hero-panel__card hero-panel__card--top">
              <span className="hero-panel__card-title">School Life</span>
            </div>
            <div className="hero-panel__card hero-panel__card--bottom">
              <span className="hero-panel__card-title">Academics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsHero