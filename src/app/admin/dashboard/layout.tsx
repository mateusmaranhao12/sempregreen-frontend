import AdminNavbar from '@/components/navbars/AdminNavbar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white text-black min-h-screen">
            <AdminNavbar />
            <main className="p-6">{children}</main>
        </div>
    )
}
