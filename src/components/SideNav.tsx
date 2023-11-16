import { ReactNode } from "react";
import Icon from "./Icon";

interface SideNavProps {
  children?: ReactNode;
}

function SideNav({ children }: SideNavProps) {
  return <div className="p-4">{children}</div>;
}

export default SideNav;
