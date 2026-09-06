const FAQS = [
  {
    question: 'How do I begin the admission process?',
    answer:
      'Start by reaching out through our enquiry form or WhatsApp, and our admissions team will guide you through the next steps.',
  },
  {
    question: 'What school levels are available?',
    answer: 'We currently outline three levels: Early Years, Primary and Secondary.',
  },
  {
    question: 'What documents may be required?',
    answer:
      'Documents such as a completed application, previous school records, identification and a passport photograph are commonly requested. Exact requirements should be confirmed with the school.',
  },
  {
    question: 'Can I enquire through WhatsApp?',
    answer: 'Yes. You can reach out directly through our WhatsApp contact option for a quick response.',
  },
  {
    question: 'How does the application process work?',
    answer:
      'Enquiry, application submission, review and assessment, an admission decision, and finally enrollment — outlined in the Admission Process section above.',
  },
  {
    question: 'Are application dates fixed?',
    answer: 'Application dates will be announced by the school.',
  },
  {
    question: 'How can I learn about school fees?',
    answer: 'Admission fees: contact the school for current information.',
  },
  {
    question: 'Can I visit the school?',
    answer: 'Visit arrangements should be discussed directly with the school&rsquo;s admissions contact.',
  },
]

function AdmissionsFAQ() {
  return (
    <section className="admissions-faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="admissions-faq__list">
          {FAQS.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary className="faq-item__question">{faq.question}</summary>
              <p className="text-muted faq-item__answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionsFAQ
