import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * FAQ Section:
 * 4 genuinely helpful questions in a clean, accessible accordion.
 * Sourced entirely from business.faq config.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.title}
          description={business.faq.description}
          align="center"
        />

        <div
          style={{
            maxWidth: '820px',
            margin: 'var(--space-48) auto 0',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: isOpen
                    ? '1px solid rgba(76, 29, 149, 0.25)'
                    : '1px solid var(--color-border-subtle)',
                  boxShadow: isOpen ? 'var(--shadow-rest)' : 'none',
                  transition: 'all var(--transition-fast)',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: 'var(--space-20, 20px) var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: '500',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-ink)',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen
                        ? 'var(--color-primary-subtle)'
                        : 'var(--color-bg-alt)',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                      flexShrink: 0,
                      transition: 'all var(--transition-fast)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24)',
                      borderTop: '1px solid rgba(20, 14, 33, 0.05)',
                      paddingTop: 'var(--space-16)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.98rem',
                        lineHeight: '1.7',
                        color: 'var(--color-ink-muted)',
                        maxWidth: '70ch',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
