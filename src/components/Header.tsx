import Button from "./Button";
import Icon from "./Icon";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const HEADER_CLASSES =
  "py-4 px-4 bg-transparent flex flex-row justify-between mx-auto";

function Header() {
  return (
    <div className={HEADER_CLASSES}>
      <div className="flex flex-row content-center">
        <div className="w-10 h-10">
          <img className="rounded-lg" src={require("../assets/logo_200.png")} />
        </div>
        <div className="flex flex-row items-center ml-3 text-2xl font-extrabold">
          <p>Portal</p>
        </div>
      </div>
      <div className="flex flex-row items-center h-10 rounded-lg">
        <div className="flex flex-row h-10 p-2 text-hgray-400">
          <Icon type="userCircle" customStyle="w-5 h-5" />
          <div className="ml-2 text-base font-medium">mackaykillian</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
