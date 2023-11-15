import Icon from "./Icon";

const SIDEBARNAV_CLASSES = "";

function SidebarNav() {
  return (
    <div className={SIDEBARNAV_CLASSES}>
      <div className="flex flex-row py-1">
        <Icon type="calendarDays" customStyle="w-7 h-7" />
        <div className="ml-2 text-lg font-semibold">Upcoming</div>
      </div>
      <div className="flex flex-row py-1">
        <Icon type="cog" customStyle="w-7 h-7" />
        <div className="ml-2 text-lg">Account</div>
      </div>
    </div>
  );
}

export default SidebarNav;
