import { ReactNode } from "react";
import SideNav from "./SideNav";
import SideNavItem from "./SideNavItem";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="w-1/4 p-4 bg-hred-100">
      <SideNav>
        <SideNavItem icon="calendarDays" label="Upcoming" selected />
        <SideNavItem icon="cog" label="Settings" />
        <SideNavItem icon="cog" label="Payments" />
      </SideNav>
    </div>
  );
}

export default Sidebar;
