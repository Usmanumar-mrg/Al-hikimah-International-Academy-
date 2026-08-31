import { useState } from 'react'
import CategoryFilter from '../ui/CategoryFilter.jsx'
import NewsCard from './NewsCard.jsx'

const CATEGORIES = [
  'All',
  'School Life',
  'Academics',
  'Student Development',
  'Technology',
  'Activities',
  'Announcements',
]

function NewsListing({ articles }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active)

  return (
    <section className="news-listing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">All Stories</span>
          <h2>Latest News</h2>
        </div>

        <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />

        {filtered.length > 0 ? (
          <div className="news-listing__grid">
            {filtered.map((article) => (
              <NewsCard article={article} key={article.slug} />
            ))}
          </div>
        ) : (
          <p className="text-muted news-listing__empty">No articles in this category yet.</p>
        )}
      </div>
    </section>
  )
}

export default NewsListing