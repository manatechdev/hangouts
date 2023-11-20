import { ReactNode } from "react";
import Icon from "./Icon";

interface SideNavProps {
  children?: ReactNode;
}

function SideNav({ children }: SideNavProps) {
  return <div className="pt-4 pb-4 pr-4">{children}</div>;
}

export default SideNav;
