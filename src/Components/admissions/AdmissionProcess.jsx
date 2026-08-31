const STEPS = [
  {
    number: '01',
    title: 'Make an Enquiry',
    description: 'Reach out through our form or WhatsApp to start the conversation.',
  },
  {
    number: '02',
    title: 'Submit an Application',
    description: 'Complete the application with student and parent/guardian details.',
  },
  {
    number: '03',
    title: 'Review & Assessment',
    description: 'The admissions team reviews the application and arranges next steps.',
  },
  {
    number: '04',
    title: 'Admission Decision',
    description: 'Families are informed of the outcome and any further requirements.',
  },
  {
    number: '05',
    title: 'Complete Enrollment',
    description: 'Finalize enrollment details ahead of the student joining the academy.',
  },
]

function AdmissionProcess() {
  return (
    <section className="admission-process">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Admission Process</span>
          <h2>How Admission Works</h2>
          <p className="text-muted section-header__desc">
            This is a demonstration of the admissions workflow — the exact
            process should be confirmed by the school.
          </p>
        </div>

        <div className="admission-process__grid">
          {STEPS.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess