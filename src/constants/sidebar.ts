import type { SidebarNavGroup } from "../types/sidebar"
import { ChartArea, ClipboardType, Columns3Cog, File, House, MessageCircleQuestionMark, Search, Settings, Users, Workflow, type LucideIcon } from 'lucide-react'

export const SIDEBAR_NAV_GROUPS: SidebarNavGroup[] = [
    {
        title: 'Main',
        items: [
            { id: 'dashboard', label: 'Dashboard', icon: House, path: '/' },
            { id: 'cases', label: 'Cases', icon: File, path: '/cases' },
            { id: 'legal-search', label: 'Legal Search', icon: Search, path: '/legal-search' },
            { id: 'smart-review', label: 'Smart Review', icon: Columns3Cog, path: '/smart-review' }
        ]
    },
    {
        title: 'Analytics',
        items: [
            { id: 'compliance-view', label: 'Compliance view', icon: ChartArea, path: '/compliance-view' },
            { id: 'legal-forms', label: 'Legal Forms', icon: ClipboardType, path: '/legal-forms' },
        ]
    }, {
        title: 'Management',
        items: [
            { id: 'team', label: 'Team', icon: Users, path: '/team' },
            { id: 'integrations', label: 'Integrations', icon: Workflow, path: '/integrations' },
        ]
    }, {
        title: 'Other',
        items: [
            { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
            { id: 'support-center', label: 'Support Center', icon: MessageCircleQuestionMark, path: '/support' },
        ]
    },

]