export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="p-6 min-h-screen bg-white text-black">
            {children}
        </main>
    )
}
