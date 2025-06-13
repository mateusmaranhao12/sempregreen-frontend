export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white text-black min-h-screen">
            <main className="p-6">
                {children}
            </main>
        </div>
    )
}
