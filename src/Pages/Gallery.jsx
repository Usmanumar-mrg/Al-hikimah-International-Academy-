import GalleryHero from '../components/gallery/GalleryHero.jsx'
import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
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
