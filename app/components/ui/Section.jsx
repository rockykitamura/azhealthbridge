export function Section({ 
  children, 
  className = '', 
  background = 'default',
  padding = 'lg',
  ...props 
}) {
  const backgrounds = {
    default: 'bg-white',
    light: 'bg-neutral-50',
    gradient: 'bg-gradient-to-b from-neutral-50 to-white',
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100',
    secondary: 'bg-gradient-to-br from-secondary-50 to-secondary-100',
    sage: 'bg-gradient-to-br from-sage-50 to-sage-100',
  };
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
    '2xl': 'py-24',
  };
  
  return (
    <section 
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  className = '',
  ...props 
}) {
  const alignmentClass = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignmentClass} ${className}`} {...props}>
      {title && (
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Container({ 
  children, 
  className = '',
  size = 'default',
  ...props 
}) {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`${sizes[size]} mx-auto px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Grid({ 
  children, 
  columns = 3,
  gap = 'md',
  responsive = true,
  className = '',
  ...props 
}) {
  const gaps = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
  };
  
  const columnClasses = {
    1: 'grid-cols-1',
    2: `grid-cols-1 ${responsive ? 'md:grid-cols-2' : 'grid-cols-2'}`,
    3: `grid-cols-1 ${responsive ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3'}`,
    4: `grid-cols-1 ${responsive ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4'}`,
  };
  
  return (
    <div 
      className={`grid ${columnClasses[columns]} ${gaps[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}