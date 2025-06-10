import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link'
}

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
  const base = "w-full text-white font-bold py-2 px-4 rounded";
  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500",
    secondary: "bg-blue-600 hover:bg-blue-700",
    link: "bg-transparent border border-white hover:bg-white hover:text-black",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]}`}
    />
  );
}