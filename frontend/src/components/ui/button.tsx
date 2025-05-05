import React from 'react';
import { CircularProgress } from './circular-progress';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingProgress?: number;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  loadingProgress = 0,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'relative px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2';
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-800 disabled:opacity-50',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200 disabled:bg-gray-800 disabled:opacity-50',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
      {isLoading && (
        <CircularProgress progress={loadingProgress} size={20} strokeWidth={2} />
      )}
      {/* {!isLoading && loadingProgress === 0 && (
        <div className="w-5 h-5 rounded-full bg-green-500" />
      )} */}
    </button>
  );
}; 