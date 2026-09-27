import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Why Choose Us Section:
 * - 4 concise trust points drawn only from actual business data
 * - Clean editorial number ("01", "02", etc.)
 * - Short label + clear explanation
 * - No fake stats or vanity numbers
 */
export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.title}
          description={business.whyChooseUs.description}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-48)',
          }}
          className="why-grid"
        >
          {business.whyChooseUs.items.map((item) => (
            <div
              key={item.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-32) var(--space-24)',
                boxShadow: 'var(--shadow-rest)',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(76, 29, 149, 0.25)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Clean Editorial Number */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-16)',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-12, 12px)',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.65',
                  color: 'var(--color-ink-muted)',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-20, 20px) !important;
          }
        }
      `}</style>
    </section>
  );
}
