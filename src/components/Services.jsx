import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

/**
 * Services Section:
 * - Elevated grid layout (3 across desktop, 1 across mobile)
 * - Large cards with image filling the top, tonal hover zoom
 * - Unboxed clean metadata (Zero-Pill rule)
 * - Seamless integration with contact form selection
 */
export default function Services({ onSelectService }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    'Design & Dev',
    'SEO & Local',
    'Marketing & Growth',
  ];

  const getCategoryGroup = (item) => {
    if (
      item.id === 'website-design' ||
      item.id === 'website-development' ||
      item.id === 'ecommerce-website' ||
      item.id === 'wordpress-design' ||
      item.id === 'landing-page-design' ||
      item.id === 'website-redesign' ||
      item.id === 'responsive-web-design'
    ) {
      return 'Design & Dev';
    }
    if (
      item.id === 'seo-services' ||
      item.id === 'local-seo' ||
      item.id === 'google-business-profile-optimization'
    ) {
      return 'SEO & Local';
    }
    return 'Marketing & Growth';
  };

  const filteredItems = business.services.items.filter((item) => {
    if (filter === 'all') return true;
    return getCategoryGroup(item) === filter;
  });

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 'var(--space-24)',
            marginBottom: 'var(--space-32)',
          }}
        >
          <SectionHeading
            eyebrow={business.services.eyebrow}
            title={business.services.title}
            description={business.services.description}
          />

          {/* Clean Segmented Filter Bar (functional buttons, not pills) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-8)',
              padding: '6px',
              backgroundColor: 'var(--color-bg-alt)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-body)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-ink-muted)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-ink)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-ink-muted)';
                  }}
                >
                  {cat === 'all' ? 'All Services (12)' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Grid on Desktop, 1 on Mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-32)',
            alignItems: 'stretch',
          }}
          className="services-grid"
        >
          {filteredItems.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              category={service.category}
              description={service.description}
              image={service.image}
              fallbackImage={service.image}
              featured={service.featured}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-24) !important;
          }
        }
      `}</style>
    </section>
  );
}
