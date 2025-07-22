import { Card, Input, Row, Col, Typography, Button } from 'antd'
import { 
  SearchOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CheckCircleOutlined,
  LineChartOutlined,
  LinkOutlined,
  LockOutlined,
  MonitorOutlined,
  TeamOutlined,
  BulbOutlined,
  ArrowRightOutlined
} from '@ant-design/icons'
import { Navigation } from './components/Navigation'
import { EmailForm } from './components/EmailForm'

const { Title, Paragraph } = Typography

function App() {
  const handlePilotApply = (email: string): void => {
    console.log('Pilot application submitted:', email)
    // Here you would typically send the email to your backend
    alert('Thank you for your interest! We\'ll be in touch soon.')
  }

  // Explicitly use the function to satisfy TypeScript
  const emailFormProps = { onSubmit: handlePilotApply }

  return (
    <div className="app">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Healthcare That Predicts, Prevents, and Personalizes
          </h1>
          <p className="hero-subtitle">
            Transform patient care with predictive analytics that catch health issues before they become emergencies. Email us to learn more.
          </p>
          <EmailForm {...emailFormProps} />
        </div>
        
        {/* Floating Dashboard */}
        <div className="floating-dashboard">
          <div className="dashboard-header">
            <div className="dashboard-title">John Anderson</div>
            <div className="dashboard-status">Live Updates Active</div>
          </div>
          
          <div className="dashboard-search">
            <Input 
              className="dashboard-input"
              placeholder="Search patients, records, care plans, imaging..." 
              prefix={<SearchOutlined />}
            />
          </div>
          
          <div className="dashboard-patient">
            <div className="patient-avatar">JA</div>
            <div className="patient-info">
              <div className="patient-name">John Anderson</div>
              <div className="patient-details">49 years old • M • MRN: MRN-p1</div>
              <div className="patient-sources">Active Data Sources -</div>
            </div>
          </div>
          
          <div className="dashboard-health-score">
            <div className="health-score-title">Real-Time Health Score</div>
            <div className="health-score-circle">
              <div className="score-number">67</div>
            </div>
            <div className="health-score-status">
              <div className="status-text">Status: Moderate Risk</div>
              <div className="status-warning">Declining trend detected • Requires attention</div>
            </div>
            <div className="health-score-progress">
              <div className="progress-label">Health Score Progress</div>
              <div className="progress-bar">
                <div className="progress-segment critical">Critical</div>
                <div className="progress-segment poor">Poor</div>
                <div className="progress-segment fair">Fair</div>
                <div className="progress-segment good">Good</div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-alerts">
            <div className="alerts-title">Critical Alerts</div>
            <div className="alert-item">
              <div className="alert-text">165/95 BP (mmHg)</div>
              <div className="alert-note">requiring immediate attention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Platform Section */}
      <section className="platform-section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="platform-content">
                <Title level={2}>Healthcare Platform</Title>
                <Paragraph className="platform-subtitle">
                  Your AI-powered guide to making informed clinical decisions and improving patient outcomes.
                </Paragraph>
                
                {/* Patient Outcomes Card */}
                <div className="patient-outcomes-card card-glass">
                  <div className="card-header">
                    <Title level={4}>Patient Outcomes</Title>
                  </div>
                  <div className="card-tabs">
                    <div className="tab active">
                      <LineChartOutlined />
                      <span>Health Trends</span>
                    </div>
                    <div className="tab">
                      <BulbOutlined />
                      <span>Risk Factors</span>
                    </div>
                  </div>
                  <div className="card-chart">
                    <div className="chart-line"></div>
                  </div>
                  <div className="card-dropdown">
                    <Button type="text" className="dropdown-btn">
                      See Growth <ArrowRightOutlined />
                    </Button>
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <CheckCircleOutlined />
                        <span>Real-time patient monitoring</span>
                      </div>
                      <div className="dropdown-item">
                        <CheckCircleOutlined />
                        <span>AI-powered risk assessment</span>
                      </div>
                      <div className="dropdown-item">
                        <CheckCircleOutlined />
                        <span>Predictive health insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col xs={24} lg={12}>
              <div className="monitoring-card card-glass">
                <Title level={3}>Real-Time Monitoring</Title>
                <Paragraph>
                  Track patient vitals, medication adherence, and health trends in real-time with automated alerts and notifications.
                </Paragraph>
                
                <div className="feature-grid">
                  <div className="feature-item">
                    <HeartOutlined />
                    <span>Vital Signs</span>
                  </div>
                  <div className="feature-item">
                    <ClockCircleOutlined />
                    <span>Live Alerts</span>
                  </div>
                  <div className="feature-item">
                    <UserOutlined />
                    <span>Retention</span>
                  </div>
                  <div className="feature-item">
                    <LineChartOutlined />
                    <span>Health Trends</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleOutlined />
                    <span>Compliant</span>
                  </div>
                  <div className="feature-item">
                    <LinkOutlined />
                    <span>Integrations</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <div className="benefits-header">
            <div className="benefits-badge">BENEFITS</div>
            <Title level={2}>Why Choose Kuduu?</Title>
            <Paragraph className="benefits-subtitle">
              Revolutionary AI technology designed to transform patient care through personalized intelligence
            </Paragraph>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <UserOutlined />
                </div>
                <Title level={3}>Personalized Intelligence</Title>
                <Paragraph>
                  Each patient gets their own AI model trained on their unique health data, providing insights no generic algorithm can match.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <ClockCircleOutlined />
                </div>
                <Title level={3}>Continuous Care</Title>
                <Paragraph>
                  Monitor patient health 24/7 with AI that learns and adapts to each individual's patterns and risk factors.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <LinkOutlined />
                </div>
                <Title level={3}>Zero Disruption</Title>
                <Paragraph>
                  Integrates seamlessly with existing EHR systems, requiring no workflow changes while providing powerful AI insights.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <LockOutlined />
                </div>
                <Title level={3}>Future-Proof Care</Title>
                <Paragraph>
                  Predict health complications weeks before traditional methods, enabling proactive intervention and prevention.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <MonitorOutlined />
                </div>
                <Title level={3}>Evidence-Based AI</Title>
                <Paragraph>
                  Clinically validated algorithms with 94% accuracy, built by healthcare professionals for healthcare professionals.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="benefit-card card-glass">
                <div className="benefit-icon">
                  <TeamOutlined />
                </div>
                <Title level={3}>Team Intelligence</Title>
                <Paragraph>
                  Enable seamless collaboration between care teams with shared AI insights and coordinated care recommendations.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Feature Tags Section */}
      <section className="feature-tags">
        <div className="container">
          <div className="tags-grid">
            <div className="tag">EHR Integration</div>
            <div className="tag">Predictive Analytics</div>
            <div className="tag">Real-Time Monitoring</div>
            <div className="tag">Clinical Validation</div>
            <div className="tag">Patient-Specific Models</div>
            <div className="tag">HIPAA Compliant</div>
            <div className="tag">Proactive Care</div>
            <div className="tag">Continuous Learning</div>
            <div className="tag">Explainable AI</div>
            <div className="tag">AI Image Analysis</div>
          </div>
        </div>
      </section>

      {/* Story Behind Kuduu Section */}
      <section className="story-behind">
        <div className="container">
          <div className="story-header">
            <div className="story-badge">AI-DRIVEN PREVENTION</div>
            <Title level={2}>The Story Behind Kuduu</Title>
            <Paragraph className="story-subtitle">
              From personal experience to AI innovation in healthcare
            </Paragraph>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <div className="story-icon">
                  <BulbOutlined />
                </div>
                <Title level={3}>The Problem</Title>
                <Paragraph>
                  In 2024, the American Medical Association reported over 350,000 misdiagnosed cases in the US, leading to death or serious injury. These aren't just statistics - they're real people, real families, real tragedies.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <div className="story-icon">
                  <UserOutlined />
                </div>
                <Title level={3}>The Personal Story</Title>
                <Paragraph>
                  As the founder of Kuduu, I experienced firsthand how subtle health changes can go unnoticed until it's too late. That's when I realized healthcare needed AI that could catch what human eyes might miss.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <div className="story-icon">
                  <CheckCircleOutlined />
                </div>
                <Title level={3}>The Solution</Title>
                <Paragraph>
                  That's why we built Kuduu - AI that doesn't just analyze data, but learns each patient's unique patterns. AI that monitors health continuously and alerts providers to potential issues before they become emergencies.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="founders-note">
        <div className="container">
          <div className="founders-content">
            <div className="founders-badge">FOUNDERS NOTE</div>
            <div className="founders-quote">
              As the Founder of Kuduu, my vision extends beyond building a <span className="highlight">product</span> — it's about driving a <span className="highlight">mission</span> that reimagines the future of <span className="highlight">healthcare</span> through the power of <span className="highlight">AI</span>. It's about fostering a culture of <span className="highlight">relentless curiosity, shared purpose, and meaningful innovation</span>.
            </div>
            <div className="founders-profile">
              <div className="founders-avatar">DC</div>
              <div className="founders-info">
                <div className="founders-name">Founder - Dante Cady</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <div className="comparison-header">
            <div className="comparison-badge">COMPARISON</div>
            <Title level={2}>Why Kuduu Stands Out</Title>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="comparison-card card-glass kuduu-highlight">
                <div className="comparison-title">
                  <Title level={3}>Kuduu</Title>
                </div>
                <ul className="comparison-list">
                  <li>Patient-specific AI models (MPP technology)</li>
                  <li>Real-time predictive health analytics</li>
                  <li>Seamless EHR integration</li>
                  <li>Healthcare-first design</li>
                  <li>User friendly and intuitive design</li>
                </ul>
              </Card>
            </Col>
            
            <Col xs={24} md={12}>
              <Card className="comparison-card card-glass">
                <div className="comparison-title">
                  <Title level={3}>Others</Title>
                </div>
                <ul className="comparison-list">
                  <li>Generic one-size-fits-all algorithms</li>
                  <li>Limited to retrospective analysis</li>
                  <li>Complex integration requirements</li>
                  <li>Tech-first, healthcare-second</li>
                  <li>Complex and difficult interfaces</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Catch What Others Miss Section */}
      <section className="catch-what-others-miss">
        <div className="container">
          <div className="catch-content">
            <div className="catch-badge">JOIN OUR PILOT WAITLIST</div>
            <Title level={2}>Catch What Others Miss</Title>
            <p className="catch-subtitle">
              AI that learns each patient's unique patterns to detect early warning signs before they become problems.
            </p>
            <EmailForm {...emailFormProps} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>Ready to Transform Healthcare?</Title>
            <p className="cta-subtitle">
              AI that learns each patient's unique patterns to detect early warning signs before they become problems.
            </p>
            <EmailForm {...emailFormProps} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-heart">
                <div className="logo-deer"></div>
              </div>
              <span>Kuduu</span>
            </div>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#about">About</a>
            </div>
            <div className="footer-copyright">
              © 2024 Kuduu. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
