import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import './AppsSection.css'

function AppCard({ app }) {
  return (
    <Link to={app.route} className="app-card">
      <div
        className="app-card-icon"
        style={{ background: app.accent + '20', border: `1.5px solid ${app.accent}30` }}
      >
        {app.icon
          ? <img src={app.icon} alt={app.name} />
          : <span style={{ color: app.accent }}>{app.name[0]}</span>
        }
      </div>

      <div className="app-card-body">
        <h3>{app.name}</h3>
        <p>{app.tagline}</p>
        <div className="app-card-tags">
          <span className="app-tag">{app.category}</span>
          {app.platforms.map(p => (
            <span key={p} className="app-tag">{p}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function AppsSection() {
  return (
    <section id="apps" className="apps-section">
      <div className="apps-section-header">
        <h2>My Apps</h2>
        <span className="apps-view-all">View All →</span>
      </div>

      <div className="apps-grid">
        {apps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
