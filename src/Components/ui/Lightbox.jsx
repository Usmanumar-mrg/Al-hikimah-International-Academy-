import { useEffect, useRef } from 'react'
import MediaPlaceholder from './MediaPlaceholder.jsx'

function Lightbox({ item, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="Close image viewer"
        >
          ✕
        </button>
        {item.image ? (
          <img
            src={item.image}
            alt={item.alt || item.title}
            className="lightbox-media lightbox-real-image"
          />
        ) : (
          <MediaPlaceholder label={item.category} tone="accent" className="lightbox-media" />
        )}
        <h3 className="lightbox-title">{item.title}</h3>
        {item.caption && <p className="text-muted lightbox-caption">{item.caption}</p>}
      </div>
    </div>
  )
}

export default Lightbox