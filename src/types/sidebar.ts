
export interface SidebarNavItem {
    id: string;
    label: string;
    icon: string;
    path: string;
}

export interface SidebarNavGroup {
    title: string;
    items: SidebarNavItem[];
}
