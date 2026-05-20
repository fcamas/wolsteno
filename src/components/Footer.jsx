import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {apps.map(app => (
          <Link key={app.id + '-privacy'} to={app.privacyRoute}>
            {app.name} Privacy Policy
          </Link>
        ))}
        <a href="/terms.html" target="_blank" rel="noreferrer">Terms of Use</a>
      </div>
      <p>
        © {new Date().getFullYear()} WOLSTENO Studio · Software Developer Portfolio by Fredy Camas
      </p>
    </footer>
  )
}
