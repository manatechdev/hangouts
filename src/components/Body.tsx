import { ReactNode } from "react";

const BODY_CLASSES = "bg-hred-100 min-h-screen flex flex-row";

interface BodyProps {
  children?: ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className={BODY_CLASSES}>{children}</div>;
}

export default Body;
