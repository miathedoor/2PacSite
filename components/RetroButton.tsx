import React from 'react';

interface RetroButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[#c0c0c0] 
        text-black 
        font-bold 
        py-1 
        px-3 
        border-t-2 border-l-2 border-white 
        border-b-2 border-r-2 border-black
        active:border-t-black active:border-l-black active:border-b-white active:border-r-white
        active:translate-y-[1px]
        disabled:opacity-50 disabled:cursor-not-allowed
        uppercase tracking-wider
        ${className}
      `}
    >
      {children}
    </button>
  );
};