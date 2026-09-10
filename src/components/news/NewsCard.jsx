import { NavLink } from 'react-router-dom'
import MediaPlaceholder from '../ui/MediaPlaceholder.jsx'

function NewsCard({ article }) {
  return (
    <article className="news-item-card">
      <MediaPlaceholder
        label={article.category}
        tone="secondary"
        className="news-item-card__media"
      />
      <div className="news-item-card__body">
        <span className="news-item-card__category">{article.category}</span>
        <h3>{article.title}</h3>
        <p className="text-muted">{article.excerpt}</p>
        <div className="news-item-card__meta">
          <span className="text-caption">{article.date}</span>
          <NavLink to={`/news/${article.slug}`} className="news-item-card__link">
            Read More →
          </NavLink>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
