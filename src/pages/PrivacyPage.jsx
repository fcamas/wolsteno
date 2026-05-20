import { useParams, Link } from 'react-router-dom'
import { getAppById } from '../data/apps'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PrivacyPage.css'

export default function PrivacyPage() {
  const { appId } = useParams()
  const app = getAppById(appId)

  if (!app) {
    return (
      <div className="not-found">
        <h1>Page not found</h1>
        <Link to="/">← Back home</Link>
      </div>
    )
  }

  const { privacy } = app

  return (
    <>
      <Navbar />
      <main className="privacy-page">

        <div className="privacy-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={app.route}>{app.name}</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>

        <div className="privacy-header">
          <span className="section-label">LEGAL</span>
          <h1>{app.name} Privacy Policy</h1>
          <p className="privacy-updated">Last updated: {privacy.lastUpdated}</p>
        </div>

        <div className="privacy-body">
          {privacy.sections.map((section, i) => (
            <div key={i} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="privacy-contact">
          <p>
            Questions? Email us at{' '}
            <a href={`mailto:${privacy.contact}`}>{privacy.contact}</a>
          </p>
        </div>

      </main>
      <Footer />
    </>
  )
}
