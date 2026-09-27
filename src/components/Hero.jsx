import React, { useState } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Hero Section:
 * - Min-height: 90vh
 * - Full-bleed background imagery with a measured tonal dark overlay
 * - High-contrast editorial typography (H1 clamp)
 * - Primary & Secondary CTAs
 * - Quiet trust markers from business data
 */
export default function Hero() {
  const [bgFailed, setBgFailed] = useState(false);

  const heroImageUrl = bgFailed ? business.hero.fallbackImage : business.hero.image;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--navbar-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        overflow: 'hidden',
        color: '#FFFFFF',
        backgroundColor: '#140E21',
      }}
    >
      {/* Background Image Container with Object-fit Cover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={heroImageUrl}
          alt="Amelie Barton Studio"
          referrerPolicy="no-referrer"
          onError={() => setBgFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Measured Tonal Scrim for guaranteed WCAG AA legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(20, 14, 33, 0.92) 0%, rgba(46, 16, 101, 0.84) 45%, rgba(20, 14, 33, 0.88) 100%)',
          }}
        />
      </div>

      {/* Main Content Area */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '820px',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#DDD6FE', // soft lavender accent on dark
              marginBottom: 'var(--space-24)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <span>{business.hero.eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5.4vw, 4.4rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-24)',
              textWrap: 'balance',
            }}
          >
            {business.hero.headline}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: '#E2E8F0',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
              lineHeight: '1.65',
              maxWidth: '62ch',
              marginBottom: 'var(--space-48)',
              fontWeight: '400',
            }}
          >
            {business.hero.subheadline}
          </p>

          {/* Call to Action Group */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-16)',
              alignItems: 'center',
              marginBottom: 'var(--space-48)',
            }}
          >
            <Button
              href={business.cta.primary.href}
              variant="whatsapp"
              isExternal={business.cta.primary.isExternal}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.533 2.026.815 3.149.815 3.18 0 5.767-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm3.364 8.163c-.144.406-.837.774-1.173.824-.312.045-.717.072-2.316-.588-1.916-.79-3.155-2.73-3.251-2.856-.095-.128-.779-1.037-.779-1.977 0-.94.49-1.402.664-1.594.175-.192.382-.24.509-.24.127 0 .254.001.366.007.118.005.277-.045.433.329.16.384.549 1.341.597 1.437.048.096.08.208.016.336-.064.128-.096.208-.192.32-.096.112-.202.25-.288.336-.096.096-.197.2-.085.392.112.192.498.822 1.07 1.332.737.657 1.358.861 1.55.957.192.096.304.08.416-.048.112-.128.48-.56.608-.752.128-.192.256-.16.432-.096.176.064 1.119.528 1.311.624.192.096.32.144.368.224.048.08.048.464-.096.87z" />
                </svg>
              }
            >
              {business.cta.primary.label}
            </Button>

            <Button href={business.cta.secondary.href} variant="secondary">
              {business.cta.secondary.label}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          {business.hero.trustText && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.88rem',
                color: 'rgba(255, 255, 255, 0.72)',
                borderTop: '1px solid rgba(255, 255, 255, 0.14)',
                paddingTop: 'var(--space-20, 20px)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#A78BFA',
                  display: 'inline-block',
                }}
              />
              <span>{business.hero.trustText}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
