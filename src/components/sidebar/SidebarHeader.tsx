import { ChevronRight, ChevronLeft } from 'lucide-react'


export interface SidebarHeaderProps {
    toggle: () => void
    collapsed: boolean
}

export const SidebarHeader = ({ toggle, collapsed }: SidebarHeaderProps) => {

    return (<div className="header">
        <div className="header-logo">
            <div className="header-logo-icon">LI</div>
            <span className="header-logo-text">LegalInspect</span>
        </div>
        <button
            className="header-toggle-btn"
            onClick={toggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
    </div>
    )
}