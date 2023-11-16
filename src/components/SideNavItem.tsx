import Icon from "./Icon";

interface SideNavItemProps {
  label: string;
  icon: string;
  selected: boolean;
}

SideNavItem.defaultProps = {
  label: "label",
  icon: "calendarDays",
  selected: false,
};

function SideNavItem({ label, icon, selected }: SideNavItemProps) {
  return (
    <div className="w-[164px] h-10 flex flex-row items-center rounded-lg hover:bg-hyellow-50">
      <div className={`w-1 h-6 rounded ${selected && "bg-hyellow-700"}`}></div>
      <div className="w-40 h-10 p-2 flex flex-row text-hgray-700">
        <Icon type={icon} customStyle="w-6 h-6" />
        <div className="ml-2 text-lg font-medium">{label}</div>
      </div>
    </div>
  );
}

export default SideNavItem;
