import { ReactNode } from "react";
const SIDEBAR_CLASSES = "bg-hred-100 w-1/4 p-4";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return <div className={SIDEBAR_CLASSES}>{children}</div>;
}

export default Sidebar;
