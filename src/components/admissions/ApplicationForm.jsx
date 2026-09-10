import { useState } from 'react'
import WhatsAppButton from '../ui/WhatsAppButton.jsx'

const SCHOOL_LEVELS = ['Early Years', 'Primary', 'Secondary']

const INITIAL_FORM = {
  parentName: '',
  email: '',
  phone: '',
  studentName: '',
  studentDob: '',
  schoolLevel: '',
  previousSchool: '',
  message: '',
}

function validate(form) {
  const errors = {}

  if (!form.parentName.trim()) errors.parentName = 'Parent/guardian name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone/WhatsApp number is required.'
  } else if (!/^[0-9+\s-]{7,}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!form.studentName.trim()) errors.studentName = "Student's name is required."
  if (!form.studentDob) errors.studentDob = "Student's date of birth is required."
  if (!form.schoolLevel) errors.schoolLevel = 'Please select an intended school level.'

  return errors
}

function ApplicationForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    // DEMO ONLY: this form does not send data anywhere and is not
    // connected to any backend, database, or email service. It only
    // demonstrates client-side validation and a success state.
    // When a real backend exists, replace this block with an actual
    // API call (see project engineering constitution — adding a
    // backend requires separate approval before implementation).
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(INITIAL_FORM)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="application-form__success" role="status">
        <h3>Thank You</h3>
        <p>
          Your enquiry has been recorded in this demonstration. In a live
          deployment, this would notify the school&rsquo;s admissions team.
        </p>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Submit Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="parentName" className="form-label">
          Parent/Guardian Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          className="form-input"
          value={form.parentName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.parentName)}
          aria-describedby={errors.parentName ? 'parentName-error' : undefined}
        />
        {errors.parentName && (
          <p id="parentName-error" className="form-error">
            {errors.parentName}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          value={form.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="form-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone/WhatsApp Number <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="form-input"
          value={form.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="form-error">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="studentName" className="form-label">
          Student Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          className="form-input"
          value={form.studentName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.studentName)}
          aria-describedby={errors.studentName ? 'studentName-error' : undefined}
        />
        {errors.studentName && (
          <p id="studentName-error" className="form-error">
            {errors.studentName}
          </p>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="studentDob" className="form-label">
            Student Date of Birth <span aria-hidden="true">*</span>
          </label>
          <input
            id="studentDob"
            name="studentDob"
            type="date"
            className="form-input"
            value={form.studentDob}
            onChange={handleChange}
            aria-invalid={Boolean(errors.studentDob)}
            aria-describedby={errors.studentDob ? 'studentDob-error' : undefined}
          />
          {errors.studentDob && (
            <p id="studentDob-error" className="form-error">
              {errors.studentDob}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="schoolLevel" className="form-label">
            Intended School Level <span aria-hidden="true">*</span>
          </label>
          <select
            id="schoolLevel"
            name="schoolLevel"
            className="form-select"
            value={form.schoolLevel}
            onChange={handleChange}
            aria-invalid={Boolean(errors.schoolLevel)}
            aria-describedby={errors.schoolLevel ? 'schoolLevel-error' : undefined}
          >
            <option value="">Select a level</option>
            {SCHOOL_LEVELS.map((level) => (
              <option value={level} key={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.schoolLevel && (
            <p id="schoolLevel-error" className="form-error">
              {errors.schoolLevel}
            </p>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="previousSchool" className="form-label">
          Previous School (optional)
        </label>
        <input
          id="previousSchool"
          name="previousSchool"
          type="text"
          className="form-input"
          value={form.previousSchool}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message / Additional Information (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="form-textarea"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary application-form__submit">
        Submit Enquiry
      </button>
    </form>
  )
}

export default ApplicationForm
