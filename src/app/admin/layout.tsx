'use client'

import { usePathname } from 'next/navigation'
import AdminNavbar from '@/components/navbars/AdminNavbar'
import AdminDashboardLayout from '@/components/layouts/AdminDashboardLayout'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const hideNavbar = pathname === '/admin/login'

  return (
    <div className="min-h-screen bg-white text-black">
      {!hideNavbar && <AdminNavbar />}
      <AdminDashboardLayout>
        {children}
      </AdminDashboardLayout>
    </div>
  )
}
