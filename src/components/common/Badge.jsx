import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-enterprise-100 text-enterprise-700 border border-enterprise-200',
    primary: 'bg-brand-blue-light text-brand-blue border border-blue-200',
    success: 'bg-brand-green-light text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200',
    navy: 'bg-enterprise-900 text-white',
    erp: 'bg-blue-50 text-enterprise-800 border border-enterprise-300 font-semibold',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1 gap-1.5',
  };

  const dotColors = {
    default: 'bg-enterprise-500',
    primary: 'bg-brand-blue',
    success: 'bg-brand-green',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
    navy: 'bg-white',
    erp: 'bg-brand-blue',
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || 'bg-current'}`} />}
      {children}
    </span>
  );
};

export default Badge;
