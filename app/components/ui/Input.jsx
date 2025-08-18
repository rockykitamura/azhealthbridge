import React from 'react';

export function Input({ 
  label,
  id,
  type = 'text',
  placeholder,
  helper,
  error,
  icon: IconComponent,
  required = false,
  disabled = false,
  className = '',
  inputClassName = '',
  ...props 
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;
  
  const baseInputStyles = 'w-full px-5 py-4 text-lg rounded-xl transition-all duration-200 focus:outline-none focus:ring-4';
  const normalStyles = 'border-2 border-neutral-300 focus:border-secondary-500 focus:ring-secondary-500/20';
  const errorStyles = 'border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20';
  const disabledStyles = 'bg-neutral-100 cursor-not-allowed opacity-60';
  
  return (
    <div className={`${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-lg font-semibold text-neutral-800 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {IconComponent && typeof IconComponent === 'function' && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-neutral-500">
            <IconComponent className="h-6 w-6" />
          </span>
        )}
        
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            ${baseInputStyles}
            ${hasError ? errorStyles : normalStyles}
            ${disabled ? disabledStyles : ''}
            ${IconComponent ? 'pl-12' : ''}
            ${inputClassName}
          `}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : helper ? `${inputId}-helper` : undefined}
          {...props}
        />
      </div>
      
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-base text-red-600" role="alert">
          {error}
        </p>
      )}
      
      {helper && !error && (
        <p id={`${inputId}-helper`} className="mt-2 text-base text-neutral-600">
          {helper}
        </p>
      )}
    </div>
  );
}

export function Select({ 
  label,
  id,
  options = [],
  placeholder = 'Select an option',
  helper,
  error,
  required = false,
  disabled = false,
  className = '',
  selectClassName = '',
  ...props 
}) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;
  
  const baseSelectStyles = 'w-full px-5 py-4 text-lg rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 appearance-none bg-white cursor-pointer';
  const normalStyles = 'border-2 border-neutral-300 focus:border-secondary-500 focus:ring-secondary-500/20';
  const errorStyles = 'border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20';
  const disabledStyles = 'bg-neutral-100 cursor-not-allowed opacity-60';
  
  return (
    <div className={`${className}`}>
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-lg font-semibold text-neutral-800 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <select
          id={selectId}
          required={required}
          disabled={disabled}
          className={`
            ${baseSelectStyles}
            ${hasError ? errorStyles : normalStyles}
            ${disabled ? disabledStyles : ''}
            ${selectClassName}
          `}
          aria-invalid={hasError}
          aria-describedby={error ? `${selectId}-error` : helper ? `${selectId}-helper` : undefined}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
          ▼
        </span>
      </div>
      
      {error && (
        <p id={`${selectId}-error`} className="mt-2 text-base text-red-600" role="alert">
          {error}
        </p>
      )}
      
      {helper && !error && (
        <p id={`${selectId}-helper`} className="mt-2 text-base text-neutral-600">
          {helper}
        </p>
      )}
    </div>
  );
}

export function Textarea({ 
  label,
  id,
  placeholder,
  rows = 4,
  helper,
  error,
  required = false,
  disabled = false,
  className = '',
  textareaClassName = '',
  ...props 
}) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const hasError = !!error;
  
  const baseTextareaStyles = 'w-full px-5 py-4 text-lg rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 resize-none';
  const normalStyles = 'border-2 border-neutral-300 focus:border-secondary-500 focus:ring-secondary-500/20';
  const errorStyles = 'border-2 border-red-500 focus:border-red-500 focus:ring-red-500/20';
  const disabledStyles = 'bg-neutral-100 cursor-not-allowed opacity-60';
  
  return (
    <div className={`${className}`}>
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-lg font-semibold text-neutral-800 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
        className={`
          ${baseTextareaStyles}
          ${hasError ? errorStyles : normalStyles}
          ${disabled ? disabledStyles : ''}
          ${textareaClassName}
        `}
        aria-invalid={hasError}
        aria-describedby={error ? `${textareaId}-error` : helper ? `${textareaId}-helper` : undefined}
        {...props}
      />
      
      {error && (
        <p id={`${textareaId}-error`} className="mt-2 text-base text-red-600" role="alert">
          {error}
        </p>
      )}
      
      {helper && !error && (
        <p id={`${textareaId}-helper`} className="mt-2 text-base text-neutral-600">
          {helper}
        </p>
      )}
    </div>
  );
}