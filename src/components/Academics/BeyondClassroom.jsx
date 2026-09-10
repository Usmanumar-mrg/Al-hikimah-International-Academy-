const ACTIVITIES = [
  {
    title: 'Sports',
    description: 'Building teamwork, discipline and physical wellbeing through active play.',
  },
  {
    title: 'Creative Activities',
    description: 'Encouraging imagination and expression through art and creative work.',
  },
  {
    title: 'Clubs',
    description: 'Shared-interest groups that build community and deepen curiosity.',
  },
  {
    title: 'Leadership',
    description: 'Opportunities to take initiative and develop responsible leadership.',
  },
  {
    title: 'Technology',
    description: 'Hands-on exposure to digital tools and practical technology skills.',
  },
  {
    title: 'Teamwork',
    description: 'Learning to collaborate, communicate and work well with others.',
  },
]

function BeyondClassroom() {
  return (
    <section className="beyond-classroom">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Beyond the Classroom</span>
          <h2>A Broader Student Experience</h2>
        </div>

        <div className="beyond-classroom__grid">
          {ACTIVITIES.map((activity) => (
            <div className="activity-block" key={activity.title}>
              <span className="activity-block__accent" aria-hidden="true" />
              <h3>{activity.title}</h3>
              <p className="text-muted">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeyondClassroom
