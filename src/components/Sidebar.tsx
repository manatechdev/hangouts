import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import SideNav from "./SideNav";
import SideNavItem from "./SideNavItem";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <div className="w-1/4 pt-4 pb-4 pb-r bg-hred-100">
      <SideNav>
        <NavLink to="/">
          {({ isActive }) => (
            <SideNavItem
              icon="calendarDays"
              label="Upcoming"
              selected={isActive}
            />
          )}
        </NavLink>
        <NavLink to="/community">
          {({ isActive }) => (
            <SideNavItem icon="users" label="Community" selected={isActive} />
          )}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) => (
            <SideNavItem icon="cog" label="Settings" selected={isActive} />
          )}
        </NavLink>
      </SideNav>
    </div>
  );
}

export default Sidebar;
