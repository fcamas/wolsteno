import './About.css'

const skills = [
  { name: 'Swift',     color: '#f97316' },
  { name: 'SwiftUI',   color: '#4361ee' },
  { name: 'UIKit',     color: '#6366f1' },
  { name: 'Xcode',     color: '#1d7cf2' },
  { name: 'Core Data', color: '#0891b2' },
  { name: 'SpriteKit', color: '#16a34a' },
  { name: 'Firebase',  color: '#f59e0b' },
  { name: 'AWS',       color: '#f97316' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* ── About Me ── */}
      <div className="about-col">
        <span className="section-label">ABOUT ME</span>
        <h2>Building with purpose.</h2>
        <p>
          Build, ship, and maintain native iOS apps used by real people every day.
          Developed enterprise-scale features at a top fintech company, then spent
          3+ years independently designing and launching my own apps to the App Store.
        </p>
        <p>
          Write clean, tested Swift, architect scalable codebases, and profile
          with Instruments to keep apps fast and reliable.
        </p>

        <ul className="about-bullets">
          <li>Write Swift, SwiftUI, and UIKit for every project</li>
          <li>Architect with MVVM, Clean Architecture, and DI</li>
          <li>Test with XCTest and XCUITest, 95%+ coverage on shipped projects</li>
          <li>B.S. Computer Science, Hunter College, CUNY</li>
        </ul>

        <div className="about-links">
          <a href="https://github.com/fcamas" target="_blank" rel="noreferrer" className="about-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fcamas" target="_blank" rel="noreferrer" className="about-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* ── Resume ── */}
      <div id="resume" className="resume-col">
        <span className="section-label">RESUME</span>
        <h2>Experience &amp; Skills</h2>

        <div className="resume-jobs">
          <div className="resume-job">
            <span className="resume-job-title">iOS Engineer · Top Fintech Company</span>
            <span className="resume-job-date">May 2022 – Oct 2022</span>
          </div>
          <div className="resume-job">
            <span className="resume-job-title">iOS Engineer · Tech Startup</span>
            <span className="resume-job-date">Mar 2021 – Feb 2022</span>
          </div>
          <div className="resume-job">
            <span className="resume-job-title">Independent iOS Developer</span>
            <span className="resume-job-date">Feb 2023 – Present</span>
          </div>
        </div>

        <div className="resume-skills">
          {skills.map(s => (
            <span
              key={s.name}
              className="resume-skill-chip"
              style={{ color: s.color, background: s.color + '18', border: `1px solid ${s.color}30` }}
            >
              {s.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
