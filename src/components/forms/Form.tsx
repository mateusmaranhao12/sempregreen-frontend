import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

export default function Form({ children, className = '', ...props }: FormProps) {
    const baseClasses = "w-full max-w-sm flex flex-col gap-4";
    return (
        <form className={`${baseClasses} ${className}`} {...props}>
            {children}
        </form>
    );
}
