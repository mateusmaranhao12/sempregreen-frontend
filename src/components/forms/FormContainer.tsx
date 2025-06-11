import React from 'react';

interface FormContainerProps {
    children: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
    return (
        <div className="min-h-screen flex flex-col items-center px-4 justify-start pt-8 md:justify-center md:pt-0">
            {children}
        </div>
    );
}
