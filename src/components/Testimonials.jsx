import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section:
 * Rendered ONLY if real testimonials exist in business configuration.
 * Otherwise returns null to omit cleanly without filler.
 */
export default function Testimonials() {
  const testimonials = business.testimonials;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Client Experiences"
          title="What Clients Say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-48)',
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-rest)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <blockquote
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-24)',
                }}
              >
                "{item.quote}"
              </blockquote>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  paddingTop: 'var(--space-16)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {item.author}
                  </div>
                  {item.role && (
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      {item.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
