import React from 'react';
import { business } from '../config/business';

/**
 * Footer Component:
 * - Wordmark, Tagline, Address, Phone, WhatsApp, Email
 * - Quick smooth-scroll links
 * - Back to top action
 * - Current year copyright
 * - Calm, minimal, zero telemetry clutter
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#100B1A',
        color: '#FFFFFF',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
          className="footer-grid"
        >
          {/* Brand & Identity Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: '600',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: 'var(--space-8)',
              }}
            >
              {business.name}
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: 'var(--space-20, 20px)',
              }}
            >
              {business.tagline}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '38ch',
              }}
            >
              {business.location.fullAddress}
            </p>
          </div>

          {/* Direct Contact Details */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#DDD6FE',
                marginBottom: 'var(--space-16)',
              }}
            >
              Contact
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.92rem',
                padding: 0,
              }}
            >
              <li>
                <a
                  href={business.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  WhatsApp: {business.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.contact.phoneHref}
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Tel: {business.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.contact.emailHref}
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  {business.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={business.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#DDD6FE',
                marginBottom: 'var(--space-16)',
              }}
            >
              Navigation
            </div>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.92rem',
                padding: 0,
              }}
            >
              {business.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 'var(--space-24)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-16)',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>
            © {currentYear} {business.name}. {business.footer.copyright}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
          >
            <span>{business.footer.backToTop}</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-32) !important;
          }
        }
      `}</style>
    </footer>
  );
}
