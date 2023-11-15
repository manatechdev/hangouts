import Icon from "./Icon";

const SIDEBARNAV_CLASSES = "";

function SidebarNav() {
  return (
    <div className={SIDEBARNAV_CLASSES}>
      <div className="flex flex-row py-2">
        <Icon type="calendarDays" customStyle="w-7 h-7" stroke={2.0} />
        <div className="ml-2 text-lg font-semibold">Upcoming</div>
      </div>
      <div className="flex flex-row py-2 text-hgray-600">
        <Icon type="cog" customStyle="w-7 h-7" stroke={1.5} />
        <div className="ml-2 text-lg">Account</div>
      </div>
    </div>
  );
}

export default SidebarNav;
