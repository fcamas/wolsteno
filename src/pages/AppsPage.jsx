import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { apps } from '../data/apps'
import './AppsPage.css'

function AppCard({ app }) {
  const inner = (
    <>
      <div
        className="apc-icon"
        style={{ background: app.accent + '18', border: `1.5px solid ${app.accent}28` }}
      >
        {app.icon
          ? <img src={app.icon} alt={app.name} />
          : <span style={{ color: app.accent }}>{app.name[0]}</span>
        }
      </div>
      <h3 className="apc-name">{app.name}</h3>
      <span className="apc-cat" style={{ color: app.accent, background: app.accent + '18' }}>
        {app.category}
      </span>
    </>
  )

  return app.route
    ? <Link to={app.route} className="apc-card">{inner}</Link>
    : <div className="apc-card apc-card--static">{inner}</div>
}

export default function AppsPage() {
  return (
    <>
      <Navbar />
      <main className="apps-page">
        <div className="apps-page-header">
          <Link to="/" className="back-link">← Back</Link>
          <span className="section-label">ALL APPS</span>
          <h1>My Apps</h1>
          <p>Apps I've built and shipped to the App Store, with a few more in the works.</p>
        </div>

        <div className="apc-grid">
          {apps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </main>
      <footer className="page-footer">
        <p>© {new Date().getFullYear()} WOLSTENO Studio · by Fredy Camas</p>
      </footer>
    </>
  )
}
