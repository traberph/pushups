import React from 'react';

interface LoadingBarProps {
  progress: number; // 0 to 100
  color?: 'red' | 'green' | 'blue';
  className?: string;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({
  progress,
  color = 'blue',
  className = '',
}) => {
  const colorClasses = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };

  return (
    <div className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className={`h-full transition-all duration-1000 ease-linear ${colorClasses[color]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}; 