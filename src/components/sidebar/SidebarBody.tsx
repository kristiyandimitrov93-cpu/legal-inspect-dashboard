import { Link } from 'react-router'
import type { SidebarNavGroup } from "../../types/sidebar"
import { LayoutDashboard } from 'lucide-react'
export const navGroups: SidebarNavGroup[] = [
    {
        title: 'Main',
        items: [
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard as any, path: '/' }
        ]
    }
]
export const SidebarBody = () => {
    return (
        <nav className="nav">
            {navGroups.map((group) => (
                <div key={group.title} className="nav-group">
                    <h3 className="group-title">{group.title}</h3>
                    <ul className="nav-list">
                        {group.items.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        className={`nav-item ${isActive ? 'active' : ''}`}
                                    >
                                        <Icon className="nav-icon" />
                                        <span className="nav-label">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    )
}