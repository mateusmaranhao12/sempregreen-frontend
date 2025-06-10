import DashboardHeader from '@/components/DashboardHeader';
import NavMenu from '@/components/NavMenu';
import StatusBar from '@/components/StatusBar';
import TabSelector from '@/components/TabSelector';
import MatchList from '@/components/MatchList';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#0e2a20] text-white">
            <DashboardHeader />
            <NavMenu />
            <StatusBar />
            <TabSelector />
            <MatchList />
        </div>
    );
}
