import { CONTACT_LINKS } from '../../config/contact.js'

function WhatsAppButton({ label = 'Chat on WhatsApp', message, className = '' }) {
  const href = message
    ? `${CONTACT_LINKS.whatsapp}?text=${encodeURIComponent(message)}`
    : CONTACT_LINKS.whatsapp

  return (
   <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary whatsapp-btn ${className}`.trim()}
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
    >
      <svg
        className="whatsapp-btn__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 3C7.03 3 3 7.03 3 12c0 1.77.52 3.42 1.42 4.81L3 21l4.33-1.38A8.94 8.94 0 0 0 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.5 9.5c0 3.5 2.5 6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {label}
    </a>
  )
}

export default WhatsAppButton