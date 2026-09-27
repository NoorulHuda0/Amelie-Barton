import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Navbar Component:
 * - Single text element brand wordmark in display face
 * - Clean text navigation links
 * - WhatsApp CTA button
 * - Mobile responsive hamburger toggle and clean overlay panel
 * - High readability from the first millisecond on page load
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isScrolled
          ? 'rgba(252, 251, 249, 0.96)'
          : 'rgba(252, 251, 249, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: isScrolled
          ? '1px solid rgba(76, 29, 149, 0.12)'
          : '1px solid rgba(20, 14, 33, 0.06)',
        boxShadow: isScrolled ? '0 4px 20px rgba(20, 14, 33, 0.04)' : 'none',
        transition: 'all var(--transition-fast)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Zone 1: Wordmark Brand element */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            color: 'var(--color-ink)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            whiteSpace: 'nowrap',
          }}
        >
          <span>{business.name}</span>
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light)',
              display: 'inline-block',
            }}
          />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="desktop-nav"
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--color-ink-muted)',
                textDecoration: 'none',
                transition: 'color var(--transition-fast)',
                padding: '6px 0',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-ink-muted)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-16)' }}>
          <div className="desktop-cta">
            <Button
              href={business.cta.primary.href}
              variant="primary"
              isExternal={business.cta.primary.isExternal}
            >
              {business.cta.primary.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--color-ink)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border)',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--space-24) var(--space-24) var(--space-32)',
            boxShadow: '0 20px 30px rgba(20, 14, 33, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-20, 20px)',
            zIndex: 49,
          }}
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--color-ink)',
                textDecoration: 'none',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(20, 14, 33, 0.05)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ paddingTop: 'var(--space-12)' }}>
            <Button
              href={business.cta.primary.href}
              variant="primary"
              isExternal={business.cta.primary.isExternal}
              onClick={closeMenu}
              className="w-full"
            >
              {business.cta.primary.label}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive media query styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
