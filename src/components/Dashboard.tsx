import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_profiles' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles')}
        >
          User Profiles
        </button>
        <button 
          className={activeTab === 'match_recommendations' ? 'active' : ''}
          onClick={() => setActiveTab('match_recommendations')}
        >
          Match Recommendations
        </button>
        <button 
          className={activeTab === 'sports_interest_groups' ? 'active' : ''}
          onClick={() => setActiveTab('sports_interest_groups')}
        >
          Sports Interest Groups
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_profiles' && (
          <div className="tab-content">
            <h2>User Profiles</h2>
            <p>Manage your user profiles here.</p>
          </div>
        )}

        {activeTab === 'match_recommendations' && (
          <div className="tab-content">
            <h2>Match Recommendations</h2>
            <p>Manage your match recommendations here.</p>
          </div>
        )}

        {activeTab === 'sports_interest_groups' && (
          <div className="tab-content">
            <h2>Sports Interest Groups</h2>
            <p>Manage your sports interest groups here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard