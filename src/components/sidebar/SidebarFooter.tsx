import { LogOut } from 'lucide-react'


export const SidebarFooter = () => {
    return (
        <div className="footer">
            <button className="logout">
                <LogOut className="nav-icon" />
                <span className="logout-text">Logout</span>
            </button>
        </div>
    )
}