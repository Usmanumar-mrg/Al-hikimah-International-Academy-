const SKILLS = [
  'Knowledge',
  'Confidence',
  'Communication',
  'Problem Solving',
  'Responsibility',
  'Collaboration',
]

function StudentDevelopment() {
  return (
    <section className="student-development">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Student Development</span>
          <h2>Growing in Every Direction</h2>
        </div>

        <div className="student-development__grid">
          {SKILLS.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentDevelopment
