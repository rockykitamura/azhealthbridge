export function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center font-semibold transition-colors duration-200';
  
  const variants = {
    default: 'bg-neutral-100 text-neutral-700 border-2 border-neutral-200',
    primary: 'bg-primary-100 text-primary-700 border-2 border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 border-2 border-secondary-200',
    sage: 'bg-sage-100 text-sage-700 border-2 border-sage-200',
    success: 'bg-green-100 text-green-700 border-2 border-green-200',
    warning: 'bg-amber-100 text-amber-700 border-2 border-amber-200',
    danger: 'bg-red-100 text-red-700 border-2 border-red-200',
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1 rounded-lg',
    md: 'text-base px-4 py-2 rounded-xl',
    lg: 'text-lg px-5 py-2.5 rounded-2xl',
  };
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </span>
  );
}

export function StatusBadge({ status, className = '', ...props }) {
  const statusConfig = {
    new: { variant: 'primary', text: 'New', icon: '✨' },
    popular: { variant: 'secondary', text: 'Popular', icon: '⭐' },
    recommended: { variant: 'sage', text: 'Recommended', icon: '👍' },
    limited: { variant: 'warning', text: 'Limited Time', icon: '⏰' },
    available: { variant: 'success', text: 'Available', icon: '✓' },
    unavailable: { variant: 'danger', text: 'Not Available', icon: '✗' },
  };
  
  const config = statusConfig[status] || statusConfig.available;
  
  return (
    <Badge 
      variant={config.variant} 
      icon={config.icon}
      className={className}
      {...props}
    >
      {config.text}
    </Badge>
  );
}