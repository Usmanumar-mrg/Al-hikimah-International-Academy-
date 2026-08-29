function App() {
  return (
    <main className="container section">
      <h1>Al-Hikmah International Academy</h1>
      <p className="text-muted" style={{ marginTop: 'var(--space-2)' }}>
        Foundation build — design system online. This screen is a temporary
        check page and will be replaced by the real homepage in the next
        milestone.
      </p>

      <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-3)' }}>
        <button className="btn btn-primary">Apply for Admission</button>
        <button className="btn btn-secondary">Explore Our School</button>
      </div>
    </main>
  )
}

export default App