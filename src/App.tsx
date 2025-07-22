import { Card, Input, Row, Col, Typography, Divider } from 'antd'
import { 
  HeartOutlined, 
  BulbOutlined, 
  AppstoreOutlined, 
  MonitorOutlined,
  CheckCircleOutlined,
  StarOutlined,
  UserOutlined,
  SearchOutlined
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
            <div className="dashboard-title">Patient Monitor</div>
            <div className="dashboard-status">Active</div>
          </div>
          
          <div className="dashboard-search">
            <Input 
              className="dashboard-input"
              placeholder="Search patients..." 
              prefix={<SearchOutlined />}
            />
          </div>
          
          <div className="dashboard-patient">
            <div className="patient-avatar">JD</div>
            <div className="patient-info">
              <div className="patient-name">John Doe</div>
              <div className="patient-id">ID: 12345</div>
            </div>
            <div className="patient-status">Stable</div>
          </div>
          
          <div className="dashboard-metrics">
            <div className="metric">
              <div className="metric-label">Health Score</div>
              <div className="metric-value">92</div>
            </div>
            <div className="metric">
              <div className="metric-label">Risk Level</div>
              <div className="metric-value low">Low</div>
            </div>
          </div>
          
          <div className="dashboard-vitals">
            <div className="vital">
              <div className="vital-label">BP</div>
              <div className="vital-value">120/80</div>
            </div>
            <div className="vital">
              <div className="vital-label">HR</div>
              <div className="vital-value">72</div>
            </div>
            <div className="vital">
              <div className="vital-label">Temp</div>
              <div className="vital-value">98.6</div>
            </div>
            <div className="vital">
              <div className="vital-label">O2</div>
              <div className="vital-value">98%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="main-cards">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} lg={6}>
              <Card 
                className="transform-card card-glass"
              >
                <div className="card-icon">
                  <HeartOutlined />
                </div>
                <Title level={3}>Transform</Title>
                <Paragraph>
                  Revolutionize healthcare delivery with AI-powered insights that transform patient outcomes.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={12} lg={6}>
              <Card 
                className="intelligence-card card-glass"
              >
                <div className="card-icon">
                  <BulbOutlined />
                </div>
                <Title level={3}>Intelligence</Title>
                <Paragraph>
                  Advanced AI that learns and adapts to each patient's unique health patterns.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={12} lg={6}>
              <Card 
                className="platform-card card-glass"
              >
                <div className="card-icon">
                  <AppstoreOutlined />
                </div>
                <Title level={3}>Platform</Title>
                <Paragraph>
                  Seamless integration with existing healthcare systems and workflows.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={12} lg={6}>
              <Card 
                className="monitoring-card card-glass"
              >
                <div className="card-icon">
                  <MonitorOutlined />
                </div>
                <Title level={3}>Monitoring</Title>
                <Paragraph>
                  Continuous health monitoring with real-time alerts and predictive analytics.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="text-center mb-5">
            <Title level={2}>Why Choose Kuduu?</Title>
            <p className="section-subtitle">
              Advanced AI technology designed specifically for healthcare professionals
            </p>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="feature-card card-glass">
                <div className="feature-icon">
                  <CheckCircleOutlined />
                </div>
                <Title level={3}>Patient-Specific AI</Title>
                <Paragraph>
                  Our MPP technology creates unique AI models for each patient, ensuring personalized care.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="feature-card card-glass">
                <div className="feature-icon">
                  <StarOutlined />
                </div>
                <Title level={3}>Real-Time Analytics</Title>
                <Paragraph>
                  Predictive health analytics that work in real-time to catch issues before they escalate.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="feature-card card-glass">
                <div className="feature-icon">
                  <UserOutlined />
                </div>
                <Title level={3}>Seamless Integration</Title>
                <Paragraph>
                  Works with your existing EHR systems without disrupting current workflows.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2}>The Benefits</Title>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <CheckCircleOutlined />
                </div>
                <div>
                  <Title level={4}>Early Detection</Title>
                  <Paragraph>
                    Catch health issues before they become serious problems with predictive AI.
                  </Paragraph>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <CheckCircleOutlined />
                </div>
                <div>
                  <Title level={4}>Reduced Costs</Title>
                  <Paragraph>
                    Prevent expensive emergency interventions through proactive monitoring.
                  </Paragraph>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <CheckCircleOutlined />
                </div>
                <div>
                  <Title level={4}>Better Outcomes</Title>
                  <Paragraph>
                    Improve patient outcomes with data-driven insights and early interventions.
                  </Paragraph>
                </div>
              </div>
            </Col>
            
            <Col xs={24} lg={12}>
              <div className="benefits-visual">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">350K+</div>
                    <div className="stat-label">Misdiagnosed Cases Prevented</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Accuracy Rate</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Continuous Monitoring</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">10x</div>
                    <div className="stat-label">Faster Detection</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="text-center mb-5">
            <Title level={2}>The Story Behind Kuduu</Title>
            <p className="section-subtitle">
              From personal experience to AI innovation in healthcare
            </p>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <Title level={3}>The Problem</Title>
                <Paragraph>
                  In 2024, the American Medical Association reported over 350,000 misdiagnosed cases in the US, leading to death or serious injury. These aren't just statistics - they're real people, real families, real tragedies.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <Title level={3}>The Personal Story</Title>
                <Paragraph>
                  As the founder of Kuduu, I experienced firsthand how subtle health changes can go unnoticed until it's too late. That's when I realized healthcare needed AI that could catch what human eyes might miss.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card className="story-card card-glass">
                <Title level={3}>The Solution</Title>
                <Paragraph>
                  That's why we built Kuduu - AI that doesn't just analyze data, but learns each patient's unique patterns. AI that monitors health continuously and alerts providers to potential issues before they become emergencies.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Why Kuduu Stands Out Section */}
      <section id="why-kuduu" className="why-kuduu">
        <div className="container">
          <div className="text-center mb-5">
            <Title level={2}>Why Kuduu Stands Out</Title>
            <p className="section-subtitle">
              See how we compare against other healthcare AI solutions
            </p>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="comparison-card card-glass kuduu-highlight">
                <div className="text-center mb-4">
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
                <div className="text-center mb-4">
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

      {/* CTA Section */}
      <section id="cta" className="cta-section">
        <div className="container">
          <div className="text-center">
            <Title level={2} style={{ color: 'white' }}>
              JOIN OUR PILOT WAITLIST
            </Title>
            <Title level={2} style={{ color: 'white' }}>
              Catch What Others Miss
            </Title>
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
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8}>
              <div className="footer-brand">
                <div className="logo-heart">
                  <div className="logo-deer"></div>
                </div>
                <div className="footer-logo-text">Kuduu</div>
              </div>
            </Col>
            
            <Col xs={24} md={8}>
              <div className="footer-links">
                <a href="#benefits">Benefits</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
              </div>
            </Col>
            
            <Col xs={24} md={8}>
              <div className="footer-social">
                <a href="mailto:support@kuduu.io">support@kuduu.io</a>
              </div>
            </Col>
          </Row>
          
          <Divider style={{ borderColor: 'var(--kuduu-border)' }} />
          
          <div className="text-center">
            <p className="footer-copyright">
              © 2025 — Kuduu Platforms LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
