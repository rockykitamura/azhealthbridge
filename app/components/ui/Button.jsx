export function Button({ 
  children, 
  variant = 'primary', 
  size = 'lg', 
  icon: IconComponent, 
  fullWidth = false,
  onClick,
  disabled = false,
  ariaLabel,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/50 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500/50 shadow-lg hover:shadow-xl',
    sage: 'bg-sage-500 text-white hover:bg-sage-600 focus:ring-sage-500/50 shadow-lg hover:shadow-xl',
    outline: 'border-3 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500/50',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500/50',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-3 rounded-xl',
    lg: 'text-lg px-8 py-4 rounded-2xl',
    xl: 'text-xl px-10 py-5 rounded-2xl',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || children}
      {...props}
    >
      {IconComponent && typeof IconComponent === 'function' && <IconComponent className="mr-3 h-5 w-5" />}
      {children}
    </button>
  );
}

export function IconButton({ 
  icon: IconComponent, 
  ariaLabel, 
  variant = 'ghost', 
  size = 'md',
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/50',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500/50',
    ghost: 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500/50',
  };
  
  const sizes = {
    sm: 'p-2 rounded-lg',
    md: 'p-3 rounded-xl',
    lg: 'p-4 rounded-2xl',
  };
  
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {IconComponent && typeof IconComponent === 'function' && <IconComponent className={iconSizes[size]} />}
    </button>
  );
}