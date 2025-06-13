export default function Select({
    variant = 'default',
    className = '',
    ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { variant?: 'default' | 'transparent', className?: string }) {
    const base = {
        default: 'w-full pt-2 pb-3 px-3 rounded border bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400',
        transparent: 'bg-transparent text-black text-sm cursor-pointer focus:outline-none',
    }

    return (
        <select
            {...props}
            className={`${base[variant]} ${className}`}
        >
            {props.children}
        </select>
    )
}
