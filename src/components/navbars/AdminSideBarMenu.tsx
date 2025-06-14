import AdminMenuSection from '../../app/admin/dashboard/components/AdminMenuSection'

interface Section {
    title: string
    items: {
        label: string
        actions?: ('add' | 'edit' | 'view')[]
    }[]
}

interface AdminSidebarMenuProps {
    sections: Section[]
}

export default function AdminSidebarMenu({ sections }: AdminSidebarMenuProps) {
    return (
        <div className="flex flex-col gap-6 w-full md:w-64">
            {sections.map((section, index) => (
                <AdminMenuSection
                    key={index}
                    title={section.title}
                    items={section.items}
                />
            ))}
        </div>
    )
}
