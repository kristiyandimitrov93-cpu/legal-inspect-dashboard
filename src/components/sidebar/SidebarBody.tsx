import { NavLink } from 'react-router'
import { SIDEBAR_NAV_GROUPS } from '../../constants/sidebar';
import type { LucideIcon } from 'lucide-react';

export const SidebarBody = () => {
    return (
        <nav className="nav">
            {SIDEBAR_NAV_GROUPS.map((group) => (
                <div key={group.title} className="nav-group">
                    <h3 className="nav-group-title">{group.title}</h3>
                    <ul className="nav-list">
                        {group.items.map((item) => {
                            const Icon: LucideIcon = item.icon;

                            return (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                                    >
                                        <Icon className="nav-icon" />
                                        <span className="nav-label">{item.label}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    )
}