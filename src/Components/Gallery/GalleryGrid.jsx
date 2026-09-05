import { useState } from 'react'
import CategoryFilter from '../ui/CategoryFilter.jsx'
import MediaPlaceholder from '../ui/MediaPlaceholder.jsx'
import Lightbox from '../ui/Lightbox.jsx'
import { GALLERY_ITEMS } from '../../data/gallery.js'

const CATEGORIES = [
  'All',
  'Classrooms',
  'Academics',
  'Sports',
  'Creative Activities',
  'Technology',
  'School Life',
]

function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered =
    active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === active)

  return (
    <section className="gallery-grid-section">
      <div className="container">
        <CategoryFilter categories={CATEGORIES} active={active} onChange={setActive} />

        {filtered.length > 0 ? (
          <div className="gallery-grid">
            {filtered.map((item) => (
              <button
                type="button"
                className="gallery-tile"
                key={item.id}
                onClick={() => setSelected(item)}
                aria-label={`View ${item.title}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="gallery-tile__media gallery-tile__real-image"
                  />
                ) : (
                  <MediaPlaceholder
                    label={item.category}
                    tone="primary"
                    className="gallery-tile__media"
                  />
                )}
                <span className="gallery-tile__title">{item.title}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-muted gallery-grid__empty">No images in this category yet.</p>
        )}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default GalleryGrid