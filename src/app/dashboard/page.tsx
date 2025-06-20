'use client'
import DashboardLayout from '@/components/layouts/DashboardLayout';
import TabSelector from '@/components/navbars/TabSelector';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <TabSelector />
        </DashboardLayout>
    );
}
