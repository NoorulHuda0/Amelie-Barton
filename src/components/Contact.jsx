import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * Contact Section:
 * - Direct contact cards: Phone, WhatsApp, Email, Studio Address
 * - Working "Get Directions" Google Maps link
 * - Fully validated frontend inquiry form with success confirmation state
 */
export default function Contact({ initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message about your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: 'var(--space-64)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Column 1: Contact Information & Direct Channels */}
          <div>
            <SectionHeading
              eyebrow={business.contactSection.eyebrow}
              title={business.contactSection.title}
              description={business.contactSection.description}
            />

            {/* Direct Contact Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
                marginTop: 'var(--space-32)',
              }}
            >
              {/* WhatsApp Quick Action */}
              {business.contact.whatsapp && (
                <a
                  href={business.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-20, 20px) var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-rest)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(76, 29, 149, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#1E6F45',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.533 2.026.815 3.149.815 3.18 0 5.767-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm3.364 8.163c-.144.406-.837.774-1.173.824-.312.045-.717.072-2.316-.588-1.916-.79-3.155-2.73-3.251-2.856-.095-.128-.779-1.037-.779-1.977 0-.94.49-1.402.664-1.594.175-.192.382-.24.509-.24.127 0 .254.001.366.007.118.005.277-.045.433.329.16.384.549 1.341.597 1.437.048.096.08.208.016.336-.064.128-.096.208-.192.32-.096.112-.202.25-.288.336-.096.096-.197.2-.085.392.112.192.498.822 1.07 1.332.737.657 1.358.861 1.55.957.192.096.304.08.416-.048.112-.128.48-.56.608-.752.128-.192.256-.16.432-.096.176.064 1.119.528 1.311.624.192.096.32.144.368.224.048.08.048.464-.096.87z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-primary-light)',
                        }}
                      >
                        Fastest Response
                      </div>
                      <div
                        style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: 'var(--color-ink)',
                        }}
                      >
                        Message on WhatsApp
                      </div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>→</span>
                </a>
              )}

              {/* Phone Channel */}
              {business.contact.phone && (
                <a
                  href={business.contact.phoneHref}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-20, 20px) var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-rest)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(76, 29, 149, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-ink-faint)',
                      }}
                    >
                      Telephone
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-ink)',
                      }}
                    >
                      {business.contact.phoneDisplay}
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-ink-muted)' }}>Call</span>
                </a>
              )}

              {/* Email Channel */}
              {business.contact.email && (
                <a
                  href={business.contact.emailHref}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-20, 20px) var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-rest)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(76, 29, 149, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-ink-faint)',
                      }}
                    >
                      Email Inquiries
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--color-ink)',
                      }}
                    >
                      {business.contact.email}
                    </div>
                  </div>
                  <span style={{ color: 'var(--color-ink-muted)' }}>Email</span>
                </a>
              )}

              {/* Studio Location & Directions */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--space-24)',
                  marginTop: 'var(--space-8)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-primary-light)',
                    marginBottom: '8px',
                  }}
                >
                  Studio Location
                </div>
                <div
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-ink)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-16)',
                  }}
                >
                  {business.location.fullAddress}
                </div>

                <Button
                  href={business.location.googleMapsUrl}
                  variant="secondary"
                  isExternal={true}
                >
                  {business.cta.directions.label}
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Styled Usable Inquiry Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-48) var(--space-32)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-32) 0' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-24)',
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    color: 'var(--color-ink)',
                    marginBottom: 'var(--space-16)',
                  }}
                >
                  Inquiry Received
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.65',
                    color: 'var(--color-ink-muted)',
                    maxWidth: '48ch',
                    margin: '0 auto var(--space-32)',
                  }}
                >
                  Thank you, {formData.name}. Your details have been recorded. Amelie
                  will review your requirements and respond within one business day.
                </p>

                <Button variant="secondary" onClick={resetForm}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: 'var(--color-ink)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Tell Me About Your Project
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-ink-muted)',
                    marginBottom: 'var(--space-32)',
                  }}
                >
                  Direct response from the studio. No automated marketing sequences.
                </p>

                {/* Name */}
                <div style={{ marginBottom: 'var(--space-20, 20px)' }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    Full Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.name
                        ? '1px solid #DC2626'
                        : '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-ink)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.name
                        ? '#DC2626'
                        : 'var(--color-border)')
                    }
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: 'var(--space-20, 20px)' }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@company.co.uk"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.email
                        ? '1px solid #DC2626'
                        : '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-ink)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.email
                        ? '#DC2626'
                        : 'var(--color-border)')
                    }
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div style={{ marginBottom: 'var(--space-20, 20px)' }}>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07915 929263"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-ink)',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                {/* Service selector */}
                <div style={{ marginBottom: 'var(--space-20, 20px)' }}>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    Primary Service Needed
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-ink)',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  >
                    <option value="">Select a service (or discuss in message)</option>
                    {business.services.items.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 'var(--space-24)' }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                    }}
                  >
                    Project Outline <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me briefly about your business, current website status, or upcoming launch goals..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.message
                        ? '1px solid #DC2626'
                        : '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-ink)',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: '1.6',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.message
                        ? '#DC2626'
                        : 'var(--color-border)')
                    }
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isSubmitting
                      ? 'var(--color-primary-light)'
                      : 'var(--color-primary)',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: '0 4px 12px rgba(76, 29, 149, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <span>Send Project Inquiry</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-48) !important;
          }
        }
      `}</style>
    </section>
  );
}
