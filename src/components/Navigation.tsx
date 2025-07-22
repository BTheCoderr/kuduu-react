import { useState } from 'react'
import { Button, Menu, Drawer } from 'antd'
import { 
  MenuOutlined
} from '@ant-design/icons'

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

  const menuItems = [
    {
      key: 'features',
      label: 'Features',
      onClick: () => scrollToSection('features')
    },
    {
      key: 'benefits',
      label: 'Benefits',
      onClick: () => scrollToSection('benefits')
    },
    {
      key: 'about',
      label: 'About',
      onClick: () => scrollToSection('about')
    },
    {
      key: 'why-kuduu',
      label: 'Why Kuduu',
      onClick: () => scrollToSection('why-kuduu')
    }
  ]

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">
            <div className="logo-heart">
              <div className="logo-deer"></div>
            </div>
          </div>
          <div className="logo-text">Kuduu</div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#features" onClick={() => scrollToSection('features')}>
            Features
          </a>
          <a href="#benefits" onClick={() => scrollToSection('benefits')}>
            Benefits
          </a>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a href="#why-kuduu" onClick={() => scrollToSection('why-kuduu')}>
            Why Kuduu
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleMenu}
            className="mobile-menu-button"
            size="large"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="drawer-header">
            <div className="logo-heart">
              <div className="logo-deer"></div>
            </div>
            <span style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>Kuduu</span>
          </div>
        }
        placement="right"
        onClose={closeMenu}
        open={isMenuOpen}
        width={280}
        styles={{
          body: { padding: 0 },
          header: { 
            borderBottom: '1px solid var(--kuduu-border)',
            padding: '1rem 1.5rem'
          }
        }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className="mobile-menu-items"
          style={{
            border: 'none',
            background: 'transparent'
          }}
        />
      </Drawer>
    </nav>
  )
} 