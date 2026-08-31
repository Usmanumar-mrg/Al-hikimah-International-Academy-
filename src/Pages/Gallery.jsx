import GalleryHero from '../components/Gallery/GalleryHero.jsx'
import GalleryGrid from '../components/Gallery/GalleryGrid.jsx'
import Seo from '../components/ui/Seo.jsx'

function Gallery() {
  return (
    <>
    <Seo
  title="Gallery | Al-Hikmah International Academy"
  description="A visual look at student life, academics and activities at Al-Hikmah International Academy."
/>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}

export default Gallery