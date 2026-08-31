import { useState } from 'react'

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function validate(form) {
  const errors = {}

  if (!form.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (form.phone.trim() && !/^[0-9+\s-]{7,}$/.test(form.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!form.message.trim()) errors.message = 'Message is required.'

  return errors
}

function ContactForm() {
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

    if (Object.keys(validationErrors).length > 0) return

    // DEMO ONLY: this form does not send data anywhere and is not
    // connected to a backend, database, or email service. It only
    // demonstrates client-side validation and a success state.
    // Replace with a real API call once a backend exists.
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
        <h3>Message Received</h3>
        <p>Thank you. Your message has been received in this demonstration.</p>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="fullName" className="form-label">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className="form-input"
          value={form.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="form-error">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span aria-hidden="true">*</span>
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
            Phone/WhatsApp (optional)
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
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject (optional)
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="form-input"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="form-textarea"
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="form-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary application-form__submit">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm