import Button from "./Button";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const HEADER_CLASSES = "container bg-transparent flex flex-row justify-between";

function Header() {
  return (
    <div className={HEADER_CLASSES}>
      <div>Hangouts</div>
      <Button
        size="sm"
        variant="ghost"
        label="Account"
        iconStart={<UserCircleIcon />}
        customStyle="bg-opacity-0"
      />
    </div>
  );
}

export default Header;
