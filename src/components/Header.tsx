import Button from "./Button";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import styled from "@emotion/styled";

const HEADER_CLASSES = "container bg-hred";

function Header() {
  return (
    <div className={HEADER_CLASSES}>
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
