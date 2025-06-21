interface CardWrapperProps {
    children: React.ReactNode;
}

export default function CardWrapper({children}: CardWrapperProps) {
    return (
        <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-4 text-black text-center md:text-left">
            {children}
        </div>
    )
}