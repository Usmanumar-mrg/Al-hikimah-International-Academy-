import { NavLink } from 'react-router-dom'

const NEWS_ITEMS = [
  {
    id: 1,
    category: 'Announcement',
    title: 'Welcome to the New Al-Hikmah Website',
    excerpt:
      'We are building a new digital home for our school community — with more updates on the way.',
  },
  {
    id: 2,
    category: 'Community',
    title: 'Building a Modern Learning Community',
    excerpt:
      'Our vision is to combine academic rigor with character formation and practical learning.',
  },
  {
    id: 3,
    category: 'Future',
    title: 'Preparing Students for the Future',
    excerpt:
      'Discover how our academic approach is designed to support students at every stage.',
  },
]

function NewsPreview() {
  return (
    <section className="news-preview">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">From the School</span>
          <h2>Latest News &amp; Updates</h2>
        </div>

        <div className="news-preview__grid">
          {NEWS_ITEMS.map((item) => (
            <article className="news-card" key={item.id}>
              <div className="news-card__top">
                <span className="news-card__category">{item.category}</span>
                <span className="news-card__date text-caption">Coming Soon</span>
              </div>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.excerpt}</p>
              <NavLink to="/news" className="program-card__link">
                Read More →
              </NavLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsPreview
