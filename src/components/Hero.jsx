import heroImg from '../assets/appsbg.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">iOS DEVELOPER</span>

        <h1>
          I build apps that are{' '}
          <span className="headline-accent">useful, beautiful</span>
          {' '}and made to last.
        </h1>

        <p className="hero-sub">
          I'm a passionate developer who loves turning ideas into products
          people enjoy using.
        </p>

        <div className="hero-actions">
          <a href="#apps" className="hero-btn-primary">View My Apps ↓</a>
          <a href="#resume" className="hero-btn-secondary">View Resume ↗</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-glow" />
        <img src={heroImg} alt="App previews" className="hero-img" />
      </div>
    </section>
  )
}
