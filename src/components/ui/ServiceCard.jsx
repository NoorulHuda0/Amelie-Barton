import React, { useState } from 'react';

/**
 * ServiceCard:
 * - 16px border-radius
 * - Fixed aspect ratio image with tonal hover zoom
 * - Clean unboxed category & number metadata
 * - H3 title and benefit-led description
 * - Robust image fallback
 */
export default function ServiceCard({
  number,
  title,
  category,
  description,
  image,
  fallbackImage,
  featured = false,
  onSelectService,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const displayImage = imgError
    ? fallbackImage || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80'
    : image;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        border: isHovered
          ? '1px solid rgba(76, 29, 149, 0.25)'
          : '1px solid var(--color-border-subtle)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
        transition: 'all var(--transition-normal)',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Image container with fixed aspect ratio & hover zoom */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: 'var(--color-bg-alt)',
        }}
      >
        <img
          src={displayImage}
          alt={title}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Subtle tonal gradient scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(20, 14, 33, 0.25) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content block */}
      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Unboxed clean metadata (Zero-Pill discipline) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: 'var(--color-primary-light)',
            fontWeight: '600',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-8)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {number && <span>{number}</span>}
          {number && category && <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>}
          {category && <span>{category}</span>}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: '500',
            color: 'var(--color-ink)',
            marginBottom: 'var(--space-8)',
            lineHeight: '1.25',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: 'var(--color-ink-muted)',
            marginBottom: 'var(--space-16)',
            flexGrow: 1,
          }}
        >
          {description}
        </p>

        {/* Action Link */}
        <div style={{ paddingTop: 'var(--space-12)', borderTop: '1px solid var(--color-border-subtle)' }}>
          <a
            href="#contact"
            onClick={(e) => {
              if (onSelectService) {
                onSelectService(title);
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              fontWeight: '600',
              color: isHovered ? 'var(--color-primary)' : 'var(--color-ink)',
              transition: 'color var(--transition-fast)',
            }}
          >
            <span>Inquire About This Service</span>
            <span
              style={{
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                transition: 'transform var(--transition-fast)',
              }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
