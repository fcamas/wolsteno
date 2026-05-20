import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppsPage from './pages/AppsPage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import AppDetailPage from './pages/AppDetailPage'
import PrivacyPage from './pages/PrivacyPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/:appId" element={<AppDetailPage />} />
        <Route path="/:appId/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
