import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { EmailForm } from './components/EmailForm'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleEmailSubmit = async (email: string) => {
    console.log('Email submitted:', email)
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you! We\'ll be in touch soon.')
  }

  const handlePilotApply = () => {
    alert('Pilot application feature coming soon!')
  }

  return (
    <div className="app">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Healthcare
            <span className="hero-highlight">
              That Predicts, Prevents, and Personalizes
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Transform patient care with predictive analytics that catch health issues before they become emergencies.
          </p>
          
          <p className="hero-cta-text">Email us to learn more.</p>
          
          <EmailForm onSubmit={handleEmailSubmit} />
        </div>

        {/* Floating Dashboard */}
        <div className="floating-dashboard">
          <div className="dashboard-header">
            <div className="patient-info">
              <span className="patient-name">John Anderson</span>
              <div className="dropdown-arrow">▼</div>
            </div>
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>Live Updates Active</span>
            </div>
          </div>
          
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <span className="search-placeholder">Search patients, records, care plans, imaging...</span>
          </div>
          
          <div className="dashboard-content">
            <div className="patient-details">
              <div className="patient-avatar">JA</div>
              <div className="patient-data">
                <div className="patient-name-large">John Anderson</div>
                <div className="patient-meta">49 years old • M • MRN: MRN-p1</div>
                <div className="data-sources">
                  <span>Active Data Sources -</span>
                  <div className="source-dots">
                    <div className="dot green"></div>
                    <div className="dot blue"></div>
                    <div className="dot purple"></div>
                    <div className="dot pink"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="health-score-section">
              <div className="score-header">
                <span className="heart-icon">❤️</span>
                <span>Real-Time Health Score</span>
              </div>
              <div className="score-display">
                <div className="score-circle">
                  <div className="score-number">67</div>
                  <div className="score-max">100</div>
                </div>
                <div className="score-status">
                  <div className="status-text">Status: Moderate Risk</div>
                  <div className="trend-indicator">📉 Declining trend detected • Requires attention</div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-segments">
                  <span>Critical</span>
                  <span>Poor</span>
                  <span>Fair</span>
                  <span>Good</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '67%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="vitals-section">
              <div className="vital-reading">
                <span className="vital-value">165/95</span>
                <span className="vital-unit">BP (mmHg)</span>
              </div>
              <div className="alert-section">
                <div className="alert-badge">active</div>
                <span className="ai-confide">AI Confide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="main-cards-section">
        <div className="container">
          <div className="cards-grid">
            {/* Transform Patient Care Card */}
            <div className="main-card transform-card">
              <h2 className="card-title">Transform Patient Care</h2>
              <p className="card-description">
                Elevate your healthcare delivery with AI-powered insights and predictive analytics that catch health issues before they become emergencies.
              </p>
              <div className="card-features">
                <div className="feature-item">
                  <span className="feature-text">Early Detection</span>
                </div>
                <div className="feature-item">
                  <span className="feature-text">Predictive Insights</span>
                </div>
                <div className="feature-item">
                  <span className="feature-text">Smarter Decisions</span>
                </div>
              </div>
            </div>

            {/* Healthcare Intelligence Card */}
            <div 
              className={`main-card intelligence-card ${hoveredCard === 'intelligence' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard('intelligence')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2 className="card-title">Healthcare Intelligence</h2>
              <p className="card-description">
                Automate everything from patient monitoring to predictive analytics and real-time health risk assessment.
              </p>
              
              <div className="intelligence-content">
                <div className="kuduu-section">
                  <div className="kuduu-button">Kuduu</div>
                  <div className="clinical-support">Clinical Decision Support</div>
                  <div className="wave-graph"></div>
                </div>
                
                <div className="features-grid">
                  <div className="feature-link">
                    <span>Patient Monitoring</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                  <div className="feature-link">
                    <span>Predictive Models</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                  <div className="feature-link">
                    <span>Risk Assessment</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                  <div className="feature-link">
                    <span>Automated Alerts</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                  <div className="feature-link">
                    <span>Clinical Analytics</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                  <div className="feature-link">
                    <span>Health Trends</span>
                    <div className="arrow-icon">↗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform & Monitoring Cards Section */}
      <section className="platform-monitoring-section">
        <div className="container">
          <div className="cards-grid">
            {/* Healthcare Platform Card */}
            <div className="main-card platform-card">
              <h2 className="card-title">Healthcare Platform</h2>
              <p className="card-description">
                Your AI-powered guide to making informed clinical decisions and improving patient outcomes.
              </p>
              <div className="platform-content">
                <div className="platform-section">
                  <h3>Patient Outcomes</h3>
                  <div className="platform-tabs">
                    <div className="platform-tab active">
                      <span>📊</span>
                      <span>Health Trends</span>
                    </div>
                    <div className="platform-tab">
                      <span>⚠️</span>
                      <span>Risk Factors</span>
                    </div>
                  </div>
                  <div className="platform-graph"></div>
                  <div className="platform-logo">
                    <div className="logo-heart-small">
                      <div className="logo-deer-small"></div>
                    </div>
                  </div>
                </div>
                <div className="platform-section">
                  <div className="growth-header">
                    <span>See Growth</span>
                    <span className="caret">▲</span>
                  </div>
                  <div className="growth-checklist">
                    <div className="checklist-item">
                      <span className="check-icon">✓</span>
                      <span>Real-time patient monitoring</span>
                    </div>
                    <div className="checklist-item">
                      <span className="check-icon">✓</span>
                      <span>AI-powered risk assessment</span>
                    </div>
                    <div className="checklist-item">
                      <span className="check-icon">✓</span>
                      <span>Predictive health insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Monitoring Card */}
            <div className="main-card monitoring-card">
              <h2 className="card-title">Real-Time Monitoring</h2>
              <p className="card-description">
                Track patient vitals, medication adherence, and health trends in real-time with automated alerts and notifications.
              </p>
              <div className="monitoring-features">
                <div className="monitoring-item">
                  <span className="monitoring-icon">❤️</span>
                  <span>Vital Signs</span>
                </div>
                <div className="monitoring-item">
                  <span className="monitoring-icon">⏰</span>
                  <span>Live Alerts</span>
                </div>
                <div className="monitoring-item">
                  <span className="monitoring-icon">🔄</span>
                  <span>Retention</span>
                </div>
                <div className="monitoring-item">
                  <span className="monitoring-icon">📈</span>
                  <span>Health Trends</span>
                </div>
                <div className="monitoring-item">
                  <span className="monitoring-icon">🛡️</span>
                  <span>Compliant</span>
                </div>
                <div className="monitoring-item">
                  <span className="monitoring-icon">🔗</span>
                  <span>Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Future-Proof Care</h3>
              <p>Predict health complications weeks before traditional methods, enabling proactive intervention and prevention.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Evidence-Based AI</h3>
              <p>Clinically validated algorithms with 94% accuracy, built by healthcare professionals for healthcare professionals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h3>Team Intelligence</h3>
              <p>Enable seamless collaboration between care teams with shared AI insights and coordinated care recommendations.</p>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="feature-pills">
            <div className="pills-row">
              <div className="feature-pill">Predictive Analytics</div>
              <div className="feature-pill">Real-Time Monitoring</div>
              <div className="feature-pill">Clinical Validation</div>
              <div className="feature-pill">Patient-Specific Models</div>
              <div className="feature-pill">EHR Integration</div>
            </div>
            <div className="pills-row">
              <div className="feature-pill">Explainable AI</div>
              <div className="feature-pill">AI Image Analysis</div>
              <div className="feature-pill">HIPAA Compliant</div>
              <div className="feature-pill">Proactive Care</div>
              <div className="feature-pill">Continuous Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <div className="benefits-tag">BENEFITS</div>
            <h2 className="section-title">Why Choose Kuduu?</h2>
            <p className="section-subtitle">
              Revolutionary AI technology designed to transform patient care through personalized intelligence
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Personalized Intelligence</h3>
              <p>Each patient gets their own AI model trained on their unique health data, providing insights no generic algorithm can match.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Continuous Care</h3>
              <p>Monitor patient health 24/7 with AI that learns and adapts to each individual's patterns and risk factors.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Zero Disruption</h3>
              <p>Integrates seamlessly with existing EHR systems, requiring no workflow changes while providing powerful AI insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="about-tag">AI-DRIVEN PREVENTION</div>
            <h2 className="about-title">The Story Behind Kuduu</h2>
            <p className="about-subtitle">From personal experience to AI innovation in healthcare.</p>
          </div>
          
          <div className="story-cards">
            <div className="story-card">
              <div className="story-icon">⚠️</div>
              <h3>The Problem</h3>
              <p>In 2024, the American Medical Association reported over 350,000 misdiagnosed cases in the US, leading to death or serious injury. These aren't just statistics - they're real people, real families, real tragedies.</p>
            </div>
            <div className="story-card">
              <div className="story-icon">👤</div>
              <h3>The Personal Story</h3>
              <p>As the founder of Kuduu, I experienced firsthand how subtle health changes can go unnoticed until it's too late. That's when I realized healthcare needed AI that could catch what human eyes might miss.</p>
            </div>
            <div className="story-card">
              <div className="story-icon">⚙️</div>
              <h3>The Solution</h3>
              <p>That's why we built Kuduu - AI that doesn't just analyze data, but learns each patient's unique patterns. AI that monitors health continuously and alerts providers to potential issues before they become emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kuduu Stands Out Section */}
      <section className="stands-out-section">
        <div className="container">
          <div className="stands-out-header">
            <h2 className="stands-out-title">Why Kuduu Stands Out</h2>
            <p className="stands-out-subtitle">See how we compare against other healthcare AI solutions.</p>
          </div>
          
          <div className="logo-center">
            <div className="large-logo">
              <div className="logo-heart-large">
                <div className="logo-deer-large"></div>
              </div>
            </div>
          </div>
          
          <div className="comparison-section">
            <div className="comparison-grid">
              <div className="comparison-column kuduu-column">
                <div className="comparison-header">
                  <div className="company-logo">Kuduu</div>
                </div>
                <div className="comparison-features">
                  <div className="comparison-feature">
                    <span className="check-icon">✓</span>
                    <span>Patient-specific AI models</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="check-icon">✓</span>
                    <span>Real-time predictive health analytics</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="check-icon">✓</span>
                    <span>Seamless EHR integration</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="check-icon">✓</span>
                    <span>Healthcare-first design</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="check-icon">✓</span>
                    <span>User friendly and intuitive design</span>
                  </div>
                </div>
              </div>
              
              <div className="comparison-column others-column">
                <div className="comparison-header">
                  <div className="others-icon">📄</div>
                  <div className="company-logo">Others</div>
                </div>
                <div className="comparison-features">
                  <div className="comparison-feature">
                    <span className="x-icon">✗</span>
                    <span>Generic one-size-fits-all algorithms</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="x-icon">✗</span>
                    <span>Limited to retrospective analysis</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="x-icon">✗</span>
                    <span>Complex integration requirements</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="x-icon">✗</span>
                    <span>Tech-first, healthcare-second</span>
                  </div>
                  <div className="comparison-feature">
                    <span className="x-icon">✗</span>
                    <span>Complex and difficult interfaces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-heart">
                  <div className="logo-deer"></div>
                </div>
              </div>
              <span>Kuduu</span>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#about">About</a>
              <a href="#pilot">Pilot</a>
            </div>
            <div className="footer-contact">
              <p>support@kuduu.io</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 — Kuduu Platforms LLC</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
