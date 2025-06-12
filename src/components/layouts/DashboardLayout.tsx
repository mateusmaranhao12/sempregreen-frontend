import DashboardHeader from '@/components/navbars/DashboardHeader'
import StatusBar from '@/components/navbars/StatusBar'

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 min-h-screen bg-[#0e2a20] text-white">
            <DashboardHeader />
            <StatusBar />
            {children}
        </div>
    );
}
