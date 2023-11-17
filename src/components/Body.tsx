import { ReactNode } from "react";

interface BodyProps {
  children?: ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className="flex flex-row min-h-screen">{children}</div>;
}

export default Body;
