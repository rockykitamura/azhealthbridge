export function Card({ 
  children, 
  variant = 'default',
  padding = 'lg',
  hover = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-2 border-neutral-200',
    elevated: 'bg-white shadow-soft',
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200',
    secondary: 'bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200',
    sage: 'bg-gradient-to-br from-sage-50 to-sage-100 border-2 border-sage-200',
    glass: 'bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-soft',
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-[1.02] cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`mb-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, size = 'lg', className = '', ...props }) {
  const sizes = {
    sm: 'text-xl font-semibold text-neutral-900',
    md: 'text-2xl font-semibold text-neutral-900',
    lg: 'text-3xl font-bold text-neutral-900',
    xl: 'text-4xl font-bold text-neutral-900',
  };
  
  return (
    <h3 className={`${sizes[size]} ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`text-lg text-neutral-600 mt-2 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`text-base text-neutral-700 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`mt-6 pt-6 border-t-2 border-neutral-200 ${className}`} {...props}>
      {children}
    </div>
  );
}