import { ReactNode } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavItem from "./SideNavItem";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="w-1/4 pt-4 pb-4 pb-r bg-hred-100">
      <SideNav>
        <Link to="/">
          <SideNavItem icon="calendarDays" label="Upcoming" selected />
        </Link>
        <Link to="/community">
          <SideNavItem icon="users" label="Community" />
        </Link>
        <Link to="/settings">
          <SideNavItem icon="cog" label="Settings" />
        </Link>
      </SideNav>
    </div>
  );
}

export default Sidebar;
