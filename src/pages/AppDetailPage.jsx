import { useParams, Link } from 'react-router-dom'
import { getAppById } from '../data/apps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AppDetailPage.css'

export default function AppDetailPage() {
  const { appId } = useParams()
  const app = getAppById(appId)

  if (!app) {
    return (
      <div className="not-found">
        <h1>App not found</h1>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="app-detail">

        {/* header */}
        <section className="app-detail-header">
          <Link to="/" className="back-link">← All apps</Link>

          <div className="app-detail-identity">
            <div
              className="app-detail-icon"
              style={{ background: app.accent + '18', border: `1px solid ${app.accent}30` }}
            >
              {app.icon
                ? <img src={app.icon} alt={app.name} />
                : <span style={{ color: app.accent }}>{app.name[0]}</span>
              }
            </div>

            <div className="app-detail-meta">
              <div className="app-detail-badges">
                <span className="badge">{app.category}</span>
                {app.platforms.map(p => (
                  <span key={p} className="badge">{p}</span>
                ))}
              </div>
              <h1>{app.name}</h1>
              <p className="app-detail-tagline">{app.tagline}</p>

              {app.appStoreUrl ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="appstore-btn"
                >
                  <span className="appstore-btn-icon">⬇</span>
                  Download on the App Store
                </a>
              ) : (
                <span className="appstore-btn appstore-btn--soon">
                  Coming to the App Store
                </span>
              )}
            </div>
          </div>
        </section>

        {/* screenshots */}
        <section className="app-screenshots">
          {app.screenshots.length > 0
            ? app.screenshots.map((src, i) => (
                <div key={i} className="screenshot-frame">
                  <img src={src} alt={`${app.name} screenshot ${i + 1}`} />
                </div>
              ))
            : <p className="screenshots-soon">📸 Screenshots coming soon</p>
          }
        </section>

        {/* description */}
        <section className="app-about">
          <h2>About {app.name}</h2>
          <p>{app.description}</p>
        </section>

        {/* features */}
        <section className="app-features">
          <h2>Features</h2>
          <div className="features-grid">
            {app.features.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* legal links */}
        <section className="app-privacy-link">
          <a href={app.privacyRoute} target="_blank" rel="noreferrer">Privacy Policy →</a>
          {app.termsUrl && (
            <a href={app.termsUrl} target="_blank" rel="noreferrer">Terms of Use →</a>
          )}
        </section>

      </main>
      <Footer />
    </>
  )
}
