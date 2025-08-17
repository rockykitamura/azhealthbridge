export function Alert({ 
  children, 
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  ...props 
}) {
  const baseStyles = 'p-6 rounded-2xl border-2 relative';
  
  const variants = {
    info: 'bg-secondary-50 border-secondary-200 text-secondary-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    neutral: 'bg-neutral-50 border-neutral-200 text-neutral-900',
  };
  
  const defaultIcons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    neutral: '💡',
  };
  
  const displayIcon = icon || defaultIcons[variant];
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      role="alert"
      {...props}
    >
      <div className="flex items-start">
        {displayIcon && (
          <span className="text-2xl mr-4 flex-shrink-0" aria-hidden="true">
            {displayIcon}
          </span>
        )}
        
        <div className="flex-1">
          {title && (
            <h4 className="text-xl font-semibold mb-2">
              {title}
            </h4>
          )}
          <div className="text-lg">
            {children}
          </div>
        </div>
        
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-4 text-2xl opacity-60 hover:opacity-100 transition-opacity duration-200"
            aria-label="Dismiss alert"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export function InfoBox({ 
  title, 
  children, 
  icon = 'ℹ️',
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`bg-gradient-to-r from-secondary-50 to-secondary-100 border-l-4 border-secondary-500 p-6 rounded-xl ${className}`}
      {...props}
    >
      <div className="flex items-start">
        <span className="text-2xl mr-4 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
        <div>
          {title && (
            <h4 className="text-xl font-semibold text-secondary-900 mb-2">
              {title}
            </h4>
          )}
          <div className="text-lg text-secondary-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}