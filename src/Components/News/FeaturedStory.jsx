import { NavLink } from 'react-router-dom'
import MediaPlaceholder from '../ui/MediaPlaceholder.jsx'

function FeaturedStory({ article }) {
  return (
    <section className="featured-story">
      <div className="container featured-story__grid">
        <MediaPlaceholder
          label={article.category}
          tone="accent"
          className="featured-story__media"
        />
        <div className="featured-story__content">
          <span className="eyebrow">{article.category}</span>
          <h2>{article.title}</h2>
          <p className="text-muted">{article.excerpt}</p>
          <span className="text-caption featured-story__date">{article.date}</span>
          <NavLink to={`/news/${article.slug}`} className="btn btn-primary featured-story__cta">
            Read Story
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStory