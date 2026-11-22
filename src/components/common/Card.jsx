import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = false,
  padding = 'default',
  border = true,
  onClick,
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-card 
        ${border ? 'border border-enterprise-200' : ''} 
        ${hoverEffect ? 'hover:shadow-card hover:border-enterprise-300 transition-all duration-200' : 'shadow-subtle'} 
        ${paddings[padding] || paddings.default} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, action, className = '' }) => (
  <div className={`flex items-start justify-between pb-4 border-b border-enterprise-100 mb-4 ${className}`}>
    <div>
      <h3 className="text-base font-semibold text-brand-navy">{title}</h3>
      {subtitle && <p className="text-sm text-enterprise-500 mt-0.5">{subtitle}</p>}
    </div>
    {action && <div className="ml-4 shrink-0">{action}</div>}
  </div>
);

export default Card;
