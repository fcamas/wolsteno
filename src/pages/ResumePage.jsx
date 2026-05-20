import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './ResumePage.css'

const experience = [
  {
    title: 'Software Engineer, iOS (Freelance)',
    company: 'Wolsteno · Invoiz & Whoosh',
    period: 'Feb 2023 – Jan 2026',
    location: 'New York City, NY',
    bullets: [
      'Designed and developed multiple iOS apps using Swift, SwiftUI, and SpriteKit with MVVM architecture.',
      'Improved app performance via Instruments profiling: 20% reduction in load time, 99.8% crash-free rate.',
      'Built test suites with XCTest and XCUITest achieving 95%+ coverage, integrated into CI/CD pipelines.',
      'Developed RESTful API integrations for real-time data sync, reducing manual entry errors by 35%.',
      'Implemented offline caching and local persistence for seamless low-connectivity experiences.',
      'Redesigned key UI flows with SwiftUI and UIKit, reducing user interaction steps by 30%.',
    ],
  },
  {
    title: 'Software Engineer, iOS',
    company: 'Top Fintech Company',
    period: 'May 2022 – Oct 2022',
    location: 'Columbus, OH',
    bullets: [
      'Built and maintained enterprise-scale iOS features for a mobile banking app serving millions of daily users.',
      'Resolved 15+ UI/UX defects and implemented ADA-compliant accessibility upgrades, dropping tickets by 25%.',
      'Increased unit test coverage from 60% to 90% across three core SDK frameworks.',
      'Collaborated with 16+ engineers in Agile sprints, tracking progress via Jira.',
    ],
  },
  {
    title: 'Software Engineer Intern / Team Lead',
    company: 'Tech Startup',
    period: 'Mar 2021 – Feb 2022',
    location: 'New York City, NY',
    bullets: [
      'Led full iOS deployment lifecycle including TestFlight distribution and App Store launch with 95% bug-free rate.',
      'Designed and implemented 15 user-facing features using SwiftUI and UIKit.',
      'Architected secure authentication with AWS Amplify and Cognito, reducing login support tickets by 30%.',
      'Refactored 80%+ of codebase using MVVM/MVC/MVP patterns with dependency injection.',
    ],
  },
]

const skills = [
  { label: 'Languages', value: 'Swift, Objective-C, Kotlin, Java, HTML, CSS' },
  { label: 'iOS Frameworks', value: 'SwiftUI, UIKit, SpriteKit, Core Data, Combine, URLSession' },
  { label: 'Architecture', value: 'MVVM, MVC, MVP, Clean Architecture, Dependency Injection' },
  { label: 'Testing', value: 'XCTest, XCUITest, Unit Testing, Integration Testing, UI Testing' },
  { label: 'Tools', value: 'Xcode, Instruments, Git, Bitbucket, Firebase, CocoaPods' },
  { label: 'Cloud / Backend', value: 'AWS (Amplify, Cognito, S3), RESTful APIs, JSON Parsing' },
  { label: 'CI/CD', value: 'Continuous Integration, Continuous Deployment, Automated Test Pipelines' },
]

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="resume-page">
        <div className="resume-page-top">
          <Link to="/" className="back-link">← Back</Link>
          <div className="resume-page-header">
            <div>
              <span className="section-label">RESUME</span>
              <h1>Fredy Camas</h1>
              <p className="resume-subtitle">Software Development Engineer · iOS</p>
              <a
                href="https://www.linkedin.com/in/fcamas"
                target="_blank"
                rel="noreferrer"
                className="resume-linkedin"
              >
                LinkedIn: linkedin.com/in/fcamas ↗
              </a>
            </div>
          </div>
        </div>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-jobs">
            {experience.map((job, i) => (
              <div key={i} className="resume-job">
                <div className="resume-job-head">
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.company} · {job.location}</p>
                  </div>
                  <span className="resume-period">{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-job">
            <div className="resume-job-head">
              <div>
                <h3>Bachelor's Degree, Computer Science</h3>
                <p>Hunter College, CUNY · New York, NY</p>
              </div>
              <span className="resume-period">Jan 2017 – Jan 2021</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="resume-skills-table">
            {skills.map(s => (
              <div key={s.label} className="skill-row">
                <span className="skill-label">{s.label}</span>
                <span className="skill-value">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="tech-highlight">
          <span className="tech-chip-r" style={{ color: '#4361ee', background: '#4361ee18' }}>SwiftUI</span>
          <span className="tech-chip-r" style={{ color: '#6366f1', background: '#6366f118' }}>UIKit</span>
          <span className="tech-chip-r" style={{ color: '#16a34a', background: '#16a34a18' }}>SpriteKit</span>
        </div>
      </main>
      <footer className="page-footer">
        <p>© {new Date().getFullYear()} WOLSTENO Studio · by Fredy Camas</p>
      </footer>
    </>
  )
}
