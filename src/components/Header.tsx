import { Bell, CircleUser, Plus, Search, Settings } from "lucide-react"
import './Header.scss'


export const Header = () => {
    return (<header className="app-header">
        <div className="left">
            <h1 className="header-title">AI Analysis Overview</h1>
        </div>
        <div className="right">
            <div className="search-input">
                <Search className="search-icon" />
                <input type="text" placeholder="Search..." />
            </div>

            <Plus className="header-icon" size={18} />

            <Settings className="header-icon" size={18} />

            <Bell className="header-icon" size={18} />

            <CircleUser className="header-icon" size={18} />




        </div>
    </header>)
}