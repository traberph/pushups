import React from 'react';

interface CircularProgressProps {
    progress: number; // 0 to 100
    size?: number;
    strokeWidth?: number;
    className?: string;
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    progress,
    size = 24,
    strokeWidth = 2,
    className = '',
    text = "prompt",
    onClick,
    disabled
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    // Calculate offset for clockwise progress starting from top
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    className="text-gray-200 transition-colors duration-300 delay-300 hover:text-gray-300"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill={disabled ? "transparent" : "green"}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* Progress circle */}
                <g className="">
                    <circle
                        className="text-red-500 transition-all duration-1000 ease-linear"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        onClick={() => {
                            if (onClick && !disabled) {
                                onClick();
                            }
                        }}
                        onKeyDown={(e) => {
                            if (onClick && !disabled && e.key === 'Enter') {
                                onClick();
                            }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={text}
                    />
                </g>
                {text && (
                    <g className="transform rotate-90">
                        <text x="50%" y="-50%" textAnchor="middle" fill="currentColor" dy=".3em" className="text-xl font-bold">
                            {text}
                        </text>
                    </g>
                )}
            </svg>
        </div>
    );
}; 