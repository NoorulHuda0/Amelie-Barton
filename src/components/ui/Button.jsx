import React from 'react';

/**
 * Reusable Button component respecting design tokens:
 * - 8px radius
 * - Single-line controls
 * - Subtle transition and lift
 * - Accessible focus rings
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp'
  isExternal = false,
  className = '',
  type = 'button',
  icon = null,
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.95rem',
    fontWeight: '600',
    fontFamily: 'var(--font-body)',
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    border: '1px solid transparent',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(76, 29, 149, 0.25)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-border)',
      backgroundColor: '#FFFFFF',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    whatsapp: {
      backgroundColor: '#1E6F45', // refined muted forest emerald luxury green
      color: '#FFFFFF',
      boxShadow: '0 2px 8px rgba(30, 111, 69, 0.25)',
    },
  };

  const style = {
    ...baseStyles,
    ...variants[variant],
  };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgba(76, 29, 149, 0.35)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-subtle)';
      e.currentTarget.style.borderColor = 'var(--color-primary-light)';
      e.currentTarget.style.color = 'var(--color-primary)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
      e.currentTarget.style.color = '#FFFFFF';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else if (variant === 'whatsapp') {
      e.currentTarget.style.backgroundColor = '#155232';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgba(21, 82, 50, 0.35)';
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(76, 29, 149, 0.25)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#FFFFFF';
      e.currentTarget.style.borderColor = 'var(--color-border)';
      e.currentTarget.style.color = 'var(--color-ink)';
      e.currentTarget.style.transform = 'translateY(0)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--color-primary)';
      e.currentTarget.style.transform = 'translateY(0)';
    } else if (variant === 'whatsapp') {
      e.currentTarget.style.backgroundColor = '#1E6F45';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 111, 69, 0.25)';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        className={className}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
