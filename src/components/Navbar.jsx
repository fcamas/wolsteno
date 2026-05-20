import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">W</span>
        <div className="logo-text-group">
          <span className="logo-main">WOLSTENO <span className="logo-studio">Studio</span></span>
          <span className="logo-sub">by Fredy Camas</span>
        </div>
      </Link>

      <div className="navbar-right">
        <div className="navbar-links">
          <Link to="/apps">APPS</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        <a href="mailto:fredycamasdev@gmail.com" className="btn-filled">Contact Me</a>
      </div>
    </nav>
  )
}
