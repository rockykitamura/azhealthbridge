import { useState } from 'react';
import { Link } from '@remix-run/react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-neutral-200 shadow-soft">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-white text-2xl font-bold">AZ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Health Bridge</h1>
              <p className="text-sm text-neutral-600">Arizona Medicare Resource</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#plans">Medicare Plans</NavLink>
            <NavLink href="#counties">Service Areas</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <NavLink href="#tools">Tools</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-500/50">
              Get Started →
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-neutral-500/50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t-2 border-neutral-200 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#plans" onClick={() => setMobileMenuOpen(false)}>
                Medicare Plans
              </MobileNavLink>
              <MobileNavLink href="#counties" onClick={() => setMobileMenuOpen(false)}>
                Service Areas
              </MobileNavLink>
              <MobileNavLink href="#resources" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </MobileNavLink>
              <MobileNavLink href="#tools" onClick={() => setMobileMenuOpen(false)}>
                Tools
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
              <button className="bg-primary-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all duration-200 shadow-lg mt-4">
                Get Started →
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 px-4 py-3 rounded-xl hover:bg-primary-50"
    >
      {children}
    </a>
  );
}

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-neutral-400">›</span>}
            {item.href ? (
              <Link
                to={item.href}
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}