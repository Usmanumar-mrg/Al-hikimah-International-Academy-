import { CONTACT_LINKS } from '../../config/contact.js'

function FloatingWhatsApp() {
  return (
   <a 
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="whatsapp-float__icon"
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
    </a>
  )
}

export default FloatingWhatsApp
