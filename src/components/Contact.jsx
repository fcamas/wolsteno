import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <span className="section-label">GET IN TOUCH</span>
      <h2>Let's build something great.</h2>
      <p className="contact-sub">
        Open to full-time iOS roles, contract work, and interesting projects.
      </p>
      <div className="contact-row">
        <a href="mailto:fredycamasdev@gmail.com" className="contact-btn-primary">
          fredycamasdev@gmail.com
        </a>
        <a href="tel:+16462049901" className="contact-btn-ghost">+1 (646) 204-9901</a>
        <a href="https://www.linkedin.com/in/fcamas" target="_blank" rel="noreferrer" className="contact-btn-ghost">LinkedIn</a>
        <a href="https://github.com/fcamas" target="_blank" rel="noreferrer" className="contact-btn-ghost">GitHub</a>
      </div>
    </section>
  )
}
