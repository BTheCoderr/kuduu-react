import { useState } from 'react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">
            <div className="logo-heart">
              <div className="logo-deer"></div>
            </div>
          </div>
          <span className="logo-text">Kuduu</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
          <a href="#benefits" onClick={() => scrollToSection('benefits')}>Benefits</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#pilot" onClick={() => scrollToSection('pilot')}>Pilot</a>
        </div>
        
        <div className="mobile-menu">
          <div 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleMenu()
              }
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  )
} 