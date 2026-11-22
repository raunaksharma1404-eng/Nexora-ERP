import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const variants = {
    primary: 'bg-brand-blue hover:bg-brand-blue-hover text-white focus:ring-brand-blue shadow-sm',
    secondary: 'bg-brand-navy hover:bg-enterprise-800 text-white focus:ring-brand-navy shadow-sm',
    outline: 'border border-enterprise-300 bg-white text-enterprise-700 hover:bg-enterprise-50 hover:border-enterprise-400 focus:ring-enterprise-300',
    ghost: 'text-enterprise-600 hover:text-enterprise-900 hover:bg-enterprise-100 focus:ring-enterprise-200',
    success: 'bg-brand-green hover:bg-emerald-600 text-white focus:ring-brand-green shadow-sm',
    white: 'bg-white text-brand-navy hover:bg-enterprise-50 shadow-sm border border-enterprise-200 focus:ring-enterprise-200',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-4 py-2 rounded-lg gap-2',
    lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </button>
  );
};

export default Button;
