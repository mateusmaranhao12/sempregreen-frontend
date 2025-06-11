import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatusBar from '@/components/navbars/StatusBar';
import TabSelector from '@/components/navbars/TabSelector';

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 min-h-screen bg-[#0e2a20] text-white">
            <DashboardHeader />
            <StatusBar />
            <TabSelector />
        </div>
    );
}
