import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import ProfileComponent from './components/ProfileComponent'
import MatchListComponent from './components/MatchListComponent'
import GroupComponent from './components/GroupComponent'
import MessageComponent from './components/MessageComponent'
import EventComponent from './components/EventComponent'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SportsConnect</h1>
          <p className="tagline">Where Passion Meets Connection</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Profiles</li>
          <li>Match Recommendations</li>
          <li>Sports Interest Groups</li>
          <li>Messaging System</li>
          <li>Event Creation and RSVP</li>
          <li>Profile Verification</li>
          </ul>
        </div>
        <p>&copy; 2025 SportsConnect. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App