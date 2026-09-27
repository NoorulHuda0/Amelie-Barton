import React from 'react';

/**
 * Standardized Section Heading adhering strictly to the design system:
 * - Eyebrow: 0.8rem, letter-spacing 0.12em, uppercase, accent color
 * - H2: clamp(2rem, 3.5vw, 2.8rem), balanced text wrap
 * - Optional paragraph: max-width 65ch
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={className}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: 'var(--space-48)',
        maxWidth: isCenter ? '780px' : '840px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
      }}
    >
      {eyebrow && (
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-primary-light)',
            marginBottom: 'var(--space-12, 12px)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-ink)',
          lineHeight: '1.18',
          letterSpacing: '-0.025em',
          marginBottom: description ? 'var(--space-16)' : '0',
          textWrap: 'balance',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.65',
            color: 'var(--color-ink-muted)',
            maxWidth: '65ch',
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
