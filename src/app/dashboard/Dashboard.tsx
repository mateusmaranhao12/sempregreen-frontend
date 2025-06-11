import DashboardHeader from '@/components/DashboardHeader';
import StatusBar from '@/components/StatusBar';
import TabSelector from '@/components/TabSelector';

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 min-h-screen bg-[#0e2a20] text-white">
            <DashboardHeader />
            <StatusBar />
            <TabSelector />
        </div>
    );
}
