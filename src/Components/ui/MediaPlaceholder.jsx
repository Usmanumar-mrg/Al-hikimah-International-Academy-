function MediaPlaceholder({ label, tone = 'primary', className = '' }) {
  return (
    <div
      className={`media-placeholder media-placeholder--${tone} ${className}`.trim()}
      role="img"
      aria-label={`${label} — image coming soon`}
    >
      <span className="media-placeholder__label">{label}</span>
    </div>
  )
}

export default MediaPlaceholder