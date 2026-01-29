import { useState } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarBody } from "./SidebarBody";
import { SidebarFooter } from "./SidebarFooter";
import './Sidebar.scss';

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`sidebar ${!open ? "collapsed" : ""}`}>
            <SidebarHeader toggle={() => setOpen((v) => !v)} collapsed={!open} ></SidebarHeader>
            <SidebarBody />
            <SidebarFooter />
        </div>
    );
}
