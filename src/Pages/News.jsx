import NewsHero from '../components/News/NewsHero.jsx'
import FeaturedStory from '../components/News/FeaturedStory.jsx'
import NewsListing from '../components/News/NewsListing.jsx'
import { NEWS_ARTICLES } from '../data/News.js'
import Seo from '../components/ui/Seo.jsx'

function News() {
  const featured = NEWS_ARTICLES.find((article) => article.featured)
  const rest = NEWS_ARTICLES.filter((article) => !article.featured)

  return (
    <>
      <Seo
        title="News | Al-Hikmah International Academy"
        description="Stay updated with the latest news and announcements from Al-Hikmah International Academy."
      />
      <NewsHero />
      {featured && <FeaturedStory article={featured} />}
      <NewsListing articles={rest} />
    </>
  )
}

export default News
