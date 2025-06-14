import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'yellow' | 'blue' | 'white' | 'green' | 'white_border_blue' | 'gray' | 'red'
    className?: string
}

export default function Button({ variant = 'yellow', className = '', ...props }: ButtonProps) {
  const base = 'font-bold py-2 px-4 rounded'
  const variants = {
    yellow: 'bg-yellow-500 text-white cursor-pointer hover:bg-yellow-600',
    blue: 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700',
    white: 'bg-transparent text-white cursor-pointer border border-white hover:bg-white hover:text-black',
    green: 'bg-green-500 text-white cursor-pointer hover:bg-green-600',
    gray: 'bg-gray-500 text-white cursor-pointer hover:bg-gray-600',
    red: 'bg-red-500 text-white cursor-pointer hover:bg-red-600',
    white_border_blue: 'bg-transparent text-blue-500 cursor-pointer border border-blue-600 hover:bg-white hover'
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}