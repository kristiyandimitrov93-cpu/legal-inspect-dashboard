import type { LucideIcon } from "lucide-react";

export interface SidebarNavItem {
    id: string;
    label: string;
    icon: LucideIcon;
    path: string;
}

export interface SidebarNavGroup {
    title: string;
    items: SidebarNavItem[];
}
