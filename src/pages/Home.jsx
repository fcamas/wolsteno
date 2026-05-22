import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import appsbg from '../assets/appsbg.png'
import sign from '../assets/sign.png'
import { apps } from '../data/apps'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <main className="home-main">

        {/* ── Hero ── */}
        <div className="home-hero">
          <div className="home-hero-left">
            <span className="home-badge">iOS DEVELOPER</span>
            <h1>
              I build apps that are{' '}
              <span className="h-accent">useful, beautiful</span>
              {' '}and made to last.
            </h1>
            <p>
              I'm a passionate developer who loves turning ideas into products
              people enjoy using.
            </p>
            <div className="home-hero-btns">
              <Link to="/apps" className="h-btn-dark">View My Apps ↓</Link>
              <Link to="/resume" className="h-btn-text">View Resume ↗</Link>
            </div>
          </div>

          <div className="home-hero-right">
            <div className="h-glow" />
            <img src={appsbg} alt="App previews" className="h-phones" />
          </div>

        </div>

        {/* ── Bottom 3-col grid ── */}
        <div className="home-bottom">

          {/* My Apps */}
          <div className="home-col" id="apps-col">
            <div className="col-head">
              <span>My Apps</span>
              <Link to="/apps" className="col-link">View All →</Link>
            </div>
            <div className="app-icon-grid">
              {apps.map(app => {
                const iconEl = (
                  <>
                    <div
                      className="app-icon-box"
                      style={{ background: app.accent + '18', border: `1.5px solid ${app.accent}28` }}
                    >
                      {app.icon
                        ? <img src={app.icon} alt={app.name} />
                        : <span style={{ color: app.accent }}>{app.name[0]}</span>
                      }
                    </div>
                    <span className="app-icon-name">{app.name}</span>
                    <span className="app-icon-cat" style={{ color: app.accent, background: app.accent + '18' }}>
                      {app.category}
                    </span>
                  </>
                )
                return app.route
                  ? <Link key={app.id} to={app.route} className="app-icon-item">{iconEl}</Link>
                  : <div key={app.id} className="app-icon-item app-icon-item--static">{iconEl}</div>
              })}
            </div>
          </div>

          {/* About Me */}
          <div className="home-col" id="about-col">
            <div className="col-head">
              <span>About Me</span>
              <Link to="/about" className="col-link">More →</Link>
            </div>
            <p className="col-body">
              I'm a developer who enjoys building clean, efficient and user-friendly
              applications. I focus on great design, performance and creating real value.
            </p>
            <ul className="col-bullets">
              <li>Clean &amp; modern code</li>
              <li>Problem solver</li>
              <li>Detail oriented</li>
              <li>Always learning</li>
            </ul>
          </div>

          {/* Resume */}
          <div className="home-col" id="resume-col">
            <div className="col-head">
              <span>Resume</span>
              <Link to="/resume" className="col-link">View →</Link>
            </div>
            <p className="col-body">
              Download my resume to learn more about my experience and skills.
            </p>
            <Link to="/resume" className="resume-dl-btn">
              Download Resume +
            </Link>
          </div>

        </div>

      </main>

      <footer className="home-footer">
        <img src={sign} alt="Fredy signature" className="home-sign-img" />
        <p>© {new Date().getFullYear()} WOLSTENO Studio · Software Developer Portfolio by Fredy Camas</p>
      </footer>
    </div>
  )
}
