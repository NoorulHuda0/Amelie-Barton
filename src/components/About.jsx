import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * About Section:
 * - Two-column editorial layout (image one side, text the other)
 * - 16px radius for the portrait image
 * - Unboxed key facts / studio highlights
 * - Calm, confident tone
 */
export default function About() {
  const [imgError, setImgError] = useState(false);

  const displayImage = imgError
    ? business.about.fallbackImage
    : business.about.image;

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Visual Column */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-rest)',
              backgroundColor: '#FFFFFF',
              aspectRatio: '4 / 3',
            }}
          >
            <img
              src={displayImage}
              alt="Amelie Barton in Sutton Studio"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                display: 'block',
              }}
            />
            {/* Elegant luxury framing border */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid rgba(76, 29, 149, 0.1)',
                borderRadius: 'var(--radius-md)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Text & Content Column */}
          <div>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.title}
            />

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                color: 'var(--color-ink)',
                fontWeight: '500',
                marginBottom: 'var(--space-20, 20px)',
              }}
            >
              {business.about.lead}
            </p>

            {business.about.paragraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--color-ink-muted)',
                  marginBottom: 'var(--space-16)',
                }}
              >
                {para}
              </p>
            ))}

            {/* Quiet highlights block */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-20, 20px)',
                marginTop: 'var(--space-32)',
                paddingTop: 'var(--space-24)',
                borderTop: '1px solid var(--color-border-subtle)',
              }}
            >
              {business.about.highlights.map((item, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary-light)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-32)' }}>
              <Button
                href={business.cta.primary.href}
                variant="whatsapp"
                isExternal={business.cta.primary.isExternal}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-48) !important;
          }
        }
      `}</style>
    </section>
  );
}
