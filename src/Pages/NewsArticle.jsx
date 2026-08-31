import { useParams, NavLink } from 'react-router-dom'
import { NEWS_ARTICLES } from '../data/News.js'
import MediaPlaceholder from '../components/ui/MediaPlaceholder.jsx'
import Seo from '../components/ui/Seo.jsx'

function NewsArticle() {
  const { slug } = useParams()
  const article = NEWS_ARTICLES.find((item) => item.slug === slug)

  if (!article) {
    return (
      <div className="container section placeholder-page">
        <span
          className="placeholder-page__tag"
          style={{ backgroundColor: 'var(--color-error)' }}
        >
          Not Found
        <Seo title="Article Not Found | Al-Hikmah International Academy" />  
        </span>
        <h1>Article Not Found</h1>
        <p className="text-muted placeholder-page__desc">
          This article may have been moved or does not exist.
        </p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <NavLink to="/news" className="btn btn-primary">
            Back to News
          </NavLink>
        </div>
      </div>
    )
  }

  const related = NEWS_ARTICLES.filter(
    (item) => item.category === article.category && item.slug !== article.slug
  ).slice(0, 2)

  return (
    <article className="news-article">
      <Seo
  title={`${article.title} | Al-Hikmah International Academy`}
  description={article.excerpt}
/>
      <div className="container news-article__header">
        <span className="eyebrow">{article.category}</span>
        <h1>{article.title}</h1>
        <span className="text-caption">{article.date}</span>
      </div>

      <div className="container news-article__hero">
        <MediaPlaceholder
          label={article.category}
          tone="primary"
          className="news-article__hero-media"
        />
      </div>

      <div className="container news-article__body">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-muted">
            {paragraph}
          </p>
        ))}

        <NavLink to="/news" className="btn btn-secondary news-article__back">
          Back to News
        </NavLink>
      </div>

      {related.length > 0 && (
        <div className="container news-article__related">
          <h2>Related Stories</h2>
          <div className="news-article__related-grid">
            {related.map((item) => (
              <NavLink
                to={`/news/${item.slug}`}
                className="news-article__related-card"
                key={item.slug}
              >
                <MediaPlaceholder label={item.category} tone="secondary" />
                <span className="news-article__related-title">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default NewsArticle