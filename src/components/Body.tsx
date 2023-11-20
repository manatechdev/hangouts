import { ReactNode } from "react";

interface BodyProps {
  children?: ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className="flex flex-row min-h-screen p-4">{children}</div>;
}

export default Body;
