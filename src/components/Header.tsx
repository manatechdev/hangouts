import Button from "./Button";
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
        <div className="text-2xl font-extrabold ml-3 flex flex-row items-center">
          <p>Portal</p>
        </div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        label="Account"
        iconStart="userCircle"
        customStyle="bg-opacity-0"
      />
    </div>
  );
}

export default Header;
