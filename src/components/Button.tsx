import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'yellow' | 'blue' | 'white'
}

export default function Button({ variant = 'yellow', ...props }: ButtonProps) {
  const base = "w-full text-white font-bold py-2 px-4 rounded";
  const variants = {
    yellow: "bg-yellow-500 cursor-pointer hover:bg-yellow-600",
    blue: "bg-blue-600 cursor-pointer hover:bg-blue-700",
    white: "bg-transparent cursor-pointer border border-white hover:bg-white hover:text-black",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]}`}
    />
  );
}